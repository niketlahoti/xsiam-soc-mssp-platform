-- XSIAM SOC MSSP Platform Database Schema
-- PostgreSQL 15+

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =====================================================
-- USERS & AUTHENTICATION
-- =====================================================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'analyst', 'manager', 'ciso', 'mssp_admin')),
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- =====================================================
-- CUSTOMERS (Multi-Tenant)
-- =====================================================

CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    industry VARCHAR(100),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(50),
    xsiam_api_url VARCHAR(500) NOT NULL,
    xsiam_api_id VARCHAR(100) NOT NULL,
    xsiam_api_key_encrypted TEXT NOT NULL,
    auto_fetch_enabled BOOLEAN DEFAULT true,
    fetch_interval INTEGER DEFAULT 300000,
    is_active BOOLEAN DEFAULT true,
    onboarded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    offboarded_at TIMESTAMP,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_customers_slug ON customers(slug);
CREATE INDEX idx_customers_active ON customers(is_active);

-- =====================================================
-- CUSTOMER USERS (Many-to-Many)
-- =====================================================

CREATE TABLE customer_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL CHECK (role IN ('analyst', 'manager', 'ciso', 'viewer')),
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(customer_id, user_id)
);

CREATE INDEX idx_customer_users_customer ON customer_users(customer_id);
CREATE INDEX idx_customer_users_user ON customer_users(user_id);

-- =====================================================
-- INCIDENTS
-- =====================================================

CREATE TABLE incidents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    xsiam_incident_id VARCHAR(255) NOT NULL,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    severity VARCHAR(50) CHECK (severity IN ('critical', 'high', 'medium', 'low', 'informational')),
    status VARCHAR(50) CHECK (status IN ('new', 'investigating', 'contained', 'resolved', 'false_positive', 'closed')),
    assigned_to UUID REFERENCES users(id),
    mitre_tactics TEXT[], -- Array of MITRE ATT&CK tactics
    mitre_techniques TEXT[], -- Array of MITRE ATT&CK techniques
    affected_assets TEXT[],
    source_ip VARCHAR(45),
    destination_ip VARCHAR(45),
    detection_time TIMESTAMP,
    first_seen TIMESTAMP,
    last_seen TIMESTAMP,
    raw_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(customer_id, xsiam_incident_id)
);

CREATE INDEX idx_incidents_customer ON incidents(customer_id);
CREATE INDEX idx_incidents_severity ON incidents(severity);
CREATE INDEX idx_incidents_status ON incidents(status);
CREATE INDEX idx_incidents_assigned ON incidents(assigned_to);
CREATE INDEX idx_incidents_detection_time ON incidents(detection_time);
CREATE INDEX idx_incidents_mitre_tactics ON incidents USING GIN(mitre_tactics);
CREATE INDEX idx_incidents_mitre_techniques ON incidents USING GIN(mitre_techniques);

-- =====================================================
-- INCIDENT ANALYSIS (AI Generated)
-- =====================================================

CREATE TABLE incident_analyses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    incident_id UUID REFERENCES incidents(id) ON DELETE CASCADE,
    executive_summary TEXT,
    observations TEXT,
    findings TEXT,
    business_impact TEXT,
    root_cause TEXT,
    lateral_movement TEXT,
    affected_assets TEXT,
    recommended_actions TEXT,
    remediation_steps TEXT,
    false_positive_likelihood DECIMAL(3,2), -- 0.00 to 1.00
    confidence_score DECIMAL(3,2), -- 0.00 to 1.00
    analysis_metadata JSONB,
    analyzed_by VARCHAR(100), -- AI model used
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_analyses_incident ON incident_analyses(incident_id);

-- =====================================================
-- CAUSALITY CHAINS
-- =====================================================

CREATE TABLE causality_chains (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    incident_id UUID REFERENCES incidents(id) ON DELETE CASCADE,
    chain_data JSONB NOT NULL,
    graph_visualization JSONB,
    root_event_id VARCHAR(255),
    total_events INTEGER,
    fetched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_causality_incident ON causality_chains(incident_id);

-- =====================================================
-- ARTIFACTS
-- =====================================================

CREATE TABLE artifacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    incident_id UUID REFERENCES incidents(id) ON DELETE CASCADE,
    artifact_type VARCHAR(100) NOT NULL, -- file, process, network, registry, etc.
    artifact_value TEXT NOT NULL,
    artifact_metadata JSONB,
    threat_score DECIMAL(3,2),
    is_malicious BOOLEAN,
    collected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_artifacts_incident ON artifacts(incident_id);
CREATE INDEX idx_artifacts_type ON artifacts(artifact_type);

-- =====================================================
-- INCIDENT COMMENTS
-- =====================================================

CREATE TABLE incident_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    incident_id UUID REFERENCES incidents(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    comment TEXT NOT NULL,
    is_internal BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_comments_incident ON incident_comments(incident_id);
CREATE INDEX idx_comments_user ON incident_comments(user_id);

-- =====================================================
-- INCIDENT REPORTS
-- =====================================================

CREATE TABLE incident_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    incident_id UUID REFERENCES incidents(id) ON DELETE CASCADE,
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    report_type VARCHAR(50) CHECK (report_type IN ('pdf', 'html', 'json')),
    report_content TEXT,
    report_metadata JSONB,
    generated_by UUID REFERENCES users(id),
    sent_to_customer BOOLEAN DEFAULT false,
    sent_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reports_incident ON incident_reports(incident_id);
CREATE INDEX idx_reports_customer ON incident_reports(customer_id);

-- =====================================================
-- THREAT INTELLIGENCE
-- =====================================================

CREATE TABLE threat_intel (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    indicator_type VARCHAR(50) NOT NULL, -- ip, domain, url, hash, email
    indicator_value VARCHAR(500) NOT NULL,
    threat_score DECIMAL(3,2),
    threat_category VARCHAR(100),
    source VARCHAR(100),
    first_seen TIMESTAMP,
    last_seen TIMESTAMP,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(indicator_type, indicator_value)
);

CREATE INDEX idx_threat_intel_type ON threat_intel(indicator_type);
CREATE INDEX idx_threat_intel_value ON threat_intel(indicator_value);

-- =====================================================
-- MITRE ATT&CK MAPPING
-- =====================================================

CREATE TABLE mitre_attack (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    technique_id VARCHAR(50) UNIQUE NOT NULL,
    technique_name VARCHAR(255) NOT NULL,
    tactic VARCHAR(100) NOT NULL,
    description TEXT,
    detection TEXT,
    mitigation TEXT,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_mitre_technique ON mitre_attack(technique_id);
CREATE INDEX idx_mitre_tactic ON mitre_attack(tactic);

-- =====================================================
-- INTEGRATIONS HEALTH
-- =====================================================

CREATE TABLE integration_health (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    integration_name VARCHAR(100) NOT NULL,
    integration_type VARCHAR(50),
    status VARCHAR(50) CHECK (status IN ('healthy', 'degraded', 'down', 'unknown')),
    last_check TIMESTAMP,
    error_message TEXT,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_integration_customer ON integration_health(customer_id);
CREATE INDEX idx_integration_status ON integration_health(status);

-- =====================================================
-- AUDIT LOGS
-- =====================================================

CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    customer_id UUID REFERENCES customers(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(100),
    resource_id UUID,
    details JSONB,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_customer ON audit_logs(customer_id);
CREATE INDEX idx_audit_action ON audit_logs(action);
CREATE INDEX idx_audit_created ON audit_logs(created_at);

-- =====================================================
-- METRICS & ANALYTICS
-- =====================================================

CREATE TABLE metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    metric_type VARCHAR(100) NOT NULL,
    metric_value DECIMAL(10,2),
    metric_metadata JSONB,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_metrics_customer ON metrics(customer_id);
CREATE INDEX idx_metrics_type ON metrics(metric_type);
CREATE INDEX idx_metrics_recorded ON metrics(recorded_at);

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Update timestamp trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply update trigger to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_incidents_updated_at BEFORE UPDATE ON incidents
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_incident_comments_updated_at BEFORE UPDATE ON incident_comments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- VIEWS
-- =====================================================

-- Active incidents summary per customer
CREATE VIEW v_customer_incident_summary AS
SELECT 
    c.id as customer_id,
    c.name as customer_name,
    COUNT(i.id) as total_incidents,
    COUNT(CASE WHEN i.severity = 'critical' THEN 1 END) as critical_count,
    COUNT(CASE WHEN i.severity = 'high' THEN 1 END) as high_count,
    COUNT(CASE WHEN i.severity = 'medium' THEN 1 END) as medium_count,
    COUNT(CASE WHEN i.severity = 'low' THEN 1 END) as low_count,
    COUNT(CASE WHEN i.status = 'new' THEN 1 END) as new_count,
    COUNT(CASE WHEN i.status = 'investigating' THEN 1 END) as investigating_count,
    COUNT(CASE WHEN i.status = 'resolved' THEN 1 END) as resolved_count
FROM customers c
LEFT JOIN incidents i ON c.id = i.customer_id
WHERE c.is_active = true
GROUP BY c.id, c.name;

-- MITRE ATT&CK coverage per customer
CREATE VIEW v_customer_mitre_coverage AS
SELECT 
    c.id as customer_id,
    c.name as customer_name,
    COUNT(DISTINCT unnest(i.mitre_techniques)) as unique_techniques,
    COUNT(DISTINCT unnest(i.mitre_tactics)) as unique_tactics
FROM customers c
LEFT JOIN incidents i ON c.id = i.customer_id
WHERE c.is_active = true
GROUP BY c.id, c.name;

-- =====================================================
-- INITIAL DATA
-- =====================================================

-- Insert default admin user (password: Admin@123)
INSERT INTO users (email, password_hash, first_name, last_name, role, is_active)
VALUES ('admin@xsiam-mssp.com', '$2a$10$rKZqYvTr.xJKGKqKqKqKqOqKqKqKqKqKqKqKqKqKqKqKqKqKqKqKq', 'Admin', 'User', 'mssp_admin', true);

-- Insert default customer: Altisec Technologies Pvt Ltd
INSERT INTO customers (
    name, 
    slug, 
    description, 
    contact_email, 
    xsiam_api_url, 
    xsiam_api_id, 
    xsiam_api_key_encrypted,
    auto_fetch_enabled,
    is_active
) VALUES (
    'Altisec Technologies Pvt Ltd',
    'altisec-tech',
    'Default customer - Altisec Technologies',
    'contact@altisec.com',
    'https://api-atpl-nfr.xdr.in.paloaltonetworks.com',
    '10',
    pgp_sym_encrypt('gyljBCKp2NvQRlSHwOpeAl88wL3FMQXVuyUExKyJRGLW3jg3kARRW1281WcYJpDUccjK9PKtsHvCPQozcpEOXZxkib33qrF8IReyUnnyY2gLzOO1vezbez5ULh344VyA', 'encryption_key_change_in_production'),
    true,
    true
);

COMMENT ON DATABASE xsiam_mssp IS 'XSIAM SOC MSSP Platform Database';
