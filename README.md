# 🛡️ XSIAM SOC MSSP Platform

## World-Class SOC Investigation & MSSP Management Platform

Enterprise-grade, multi-tenant Security Operations Center powered by Palo Alto Cortex XSIAM APIs with AI-driven incident analysis, automated investigation workflows, and stunning visualizations.

---

## 🌟 Key Features

### 🏢 Multi-Tenant MSSP Architecture
- **Customer Onboarding/Offboarding** - Isolated data per customer
- **Global MSSP Dashboard** - Cross-customer analytics
- **Role-Based Access Control** - Analyst, Manager, CISO views
- **Customer Selector** - Seamless tenant switching

### 🔍 Automated Incident Investigation
- **Real-time Case Fetching** - Auto-sync from XSIAM
- **AI-Powered Analysis** - Root cause, impact, recommendations
- **Causality Chain Parsing** - Visual attack tree
- **MITRE ATT&CK Mapping** - Technique identification
- **Artifact Collection** - Automated evidence gathering

### 📊 World-Class Dashboards
- **Analyst Dashboard** - Incident queue, alerts, integrations
- **SOC Manager Dashboard** - Team performance, MTTR, automation metrics
- **CISO Dashboard** - Executive summary, risk posture, ROI
- **MSSP Super Dashboard** - Multi-customer overview

### 🎨 Premium UI/UX
- **Animated Visualizations** - Smooth transitions, card flips
- **Interactive Graphs** - Causality chains, MITRE heatmaps
- **Glassmorphic Design** - Modern, professional aesthetic
- **Dark/Light Themes** - Auto-switching support

### 🤖 AI-Powered Intelligence
- **Automated Report Generation** - Analyst-ready summaries
- **Business Impact Analysis** - Risk scoring
- **Threat Hunting** - IOC search, YARA rules
- **Predictive Scoring** - Incident prioritization

### 📧 Reporting & Communication
- **Email Delivery** - Customer incident reports
- **PDF/HTML Export** - Professional formatting
- **Preview Mode** - Review before sending
- **SMTP/OAuth Integration** - Flexible email setup

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React/Next.js)                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Analyst  │  │ Manager  │  │  CISO    │  │  MSSP    │   │
│  │Dashboard │  │Dashboard │  │Dashboard │  │Dashboard │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                   API Gateway (Express/FastAPI)              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   Auth   │  │ Customer │  │ Incident │  │   AI     │   │
│  │  Service │  │  Service │  │  Service │  │ Service  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer (PostgreSQL + Redis)           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │Customer  │  │Incidents │  │  Users   │  │  Cache   │   │
│  │   DB     │  │    DB    │  │    DB    │  │  (Redis) │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│              External Integrations                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  XSIAM   │  │   AI     │  │  Email   │  │  Threat  │   │
│  │   API    │  │  Models  │  │  SMTP    │  │  Intel   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Python 3.11+
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

### Installation

```bash
# Clone repository
git clone https://github.com/niketlahoti/xsiam-soc-mssp-platform.git
cd xsiam-soc-mssp-platform

# Using Docker (Recommended)
docker-compose up -d

# Or manual setup
cd backend && npm install
cd ../frontend && npm install

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Run migrations
npm run migrate

# Start development
npm run dev
```

### Default Customer (Pre-configured)
- **Customer**: Altisec Technologies Pvt Ltd
- **API URL**: https://api-atpl-nfr.xdr.in.paloaltonetworks.com
- **API ID**: 10

---

## 📁 Project Structure

```
xsiam-soc-mssp-platform/
├── frontend/                 # React/Next.js frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API clients
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   └── styles/          # Global styles
│   └── public/              # Static assets
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── services/        # Business logic
│   │   ├── models/          # Database models
│   │   ├── middleware/      # Express middleware
│   │   ├── utils/           # Helper functions
│   │   └── config/          # Configuration
│   └── tests/               # Backend tests
├── ai-engine/               # AI analysis service
│   ├── src/
│   │   ├── analyzers/       # Incident analyzers
│   │   ├── models/          # AI model integrations
│   │   └── prompts/         # AI prompt templates
├── database/                # Database schemas & migrations
│   ├── migrations/          # SQL migrations
│   └── seeds/               # Seed data
├── docker/                  # Docker configurations
├── docs/                    # Documentation
├── scripts/                 # Utility scripts
└── tests/                   # Integration tests
```

---

## 🔧 Configuration

### Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/xsiam_mssp
REDIS_URL=redis://localhost:6379

# XSIAM API (Default Customer)
XSIAM_API_URL=https://api-atpl-nfr.xdr.in.paloaltonetworks.com
XSIAM_API_ID=10
XSIAM_API_KEY=your_api_key_here

# AI Services
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Application
NODE_ENV=development
PORT=3000
API_PORT=8000
JWT_SECRET=your_jwt_secret
```

---

## 📚 API Documentation

### XSIAM Integration
- **GET** `/api/xsiam/incidents` - Fetch incidents
- **GET** `/api/xsiam/incidents/:id` - Get incident details
- **GET** `/api/xsiam/causality/:id` - Get causality chain
- **POST** `/api/xsiam/test-connection` - Test API connectivity

### Customer Management
- **GET** `/api/customers` - List all customers
- **POST** `/api/customers` - Onboard new customer
- **PUT** `/api/customers/:id` - Update customer
- **DELETE** `/api/customers/:id` - Offboard customer

### Incident Analysis
- **POST** `/api/incidents/:id/analyze` - Trigger AI analysis
- **GET** `/api/incidents/:id/report` - Get incident report
- **POST** `/api/incidents/:id/send-email` - Email report

---

## 🎨 UI Components

### Dashboards
- **MSSP Super Dashboard** - `/dashboard/mssp`
- **Analyst Dashboard** - `/dashboard/analyst`
- **SOC Manager Dashboard** - `/dashboard/manager`
- **CISO Dashboard** - `/dashboard/ciso`

### Features
- **Incident Investigation** - `/incidents/:id`
- **Threat Hunting** - `/threat-hunting`
- **Customer Management** - `/customers`
- **Settings** - `/settings`

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run frontend tests
cd frontend && npm test

# Run backend tests
cd backend && npm test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

---

## 📦 Deployment

### Docker Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes Deployment
```bash
kubectl apply -f k8s/
```

### Manual Deployment
```bash
npm run build
npm run start:prod
```

---

## 🔒 Security

- **Encryption at Rest** - API keys encrypted in database
- **OAuth2/SAML** - Enterprise authentication
- **RBAC** - Role-based access control
- **Audit Logging** - Complete action trail
- **Data Isolation** - Multi-tenant security
- **SOC 2 Type II** - Compliance ready

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

## 🙏 Acknowledgments

- **Palo Alto Networks** - Cortex XSIAM API
- **MITRE** - ATT&CK Framework
- **OpenAI/Anthropic** - AI Analysis

---

## 📞 Support

- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/niketlahoti/xsiam-soc-mssp-platform/issues)
- **Email**: support@example.com

---

**Built with ❤️ by the SOC Team**

*Transforming Security Operations with Intelligence & Automation*
