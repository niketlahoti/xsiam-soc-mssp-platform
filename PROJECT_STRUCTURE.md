# 📁 Complete Project Structure

```
xsiam-soc-mssp-platform/
│
├── 📄 README.md                          # Main documentation
├── 📄 .gitignore                         # Git ignore rules
├── 📄 .env.example                       # Environment template
├── 📄 docker-compose.yml                 # Docker orchestration
├── 📄 package.json                       # Root package config
├── 📄 LICENSE                            # MIT License
│
├── 📁 frontend/                          # Next.js Frontend Application
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   ├── 📄 next.config.js
│   ├── 📄 tailwind.config.js
│   ├── 📄 postcss.config.js
│   ├── 📄 Dockerfile
│   ├── 📄 .eslintrc.json
│   │
│   ├── 📁 public/                        # Static assets
│   │   ├── favicon.ico
│   │   ├── logo.svg
│   │   └── images/
│   │
│   └── 📁 src/
│       ├── 📁 app/                       # Next.js 14 App Router
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   ├── globals.css
│       │   ├── 📁 dashboard/
│       │   │   ├── 📁 mssp/             # MSSP Super Dashboard
│       │   │   ├── 📁 analyst/          # Analyst Dashboard
│       │   │   ├── 📁 manager/          # Manager Dashboard
│       │   │   └── 📁 ciso/             # CISO Dashboard
│       │   ├── 📁 incidents/
│       │   │   ├── page.tsx
│       │   │   └── 📁 [id]/
│       │   │       ├── page.tsx
│       │   │       └── 📁 analysis/
│       │   ├── 📁 customers/
│       │   ├── 📁 threat-hunting/
│       │   ├── 📁 settings/
│       │   └── 📁 auth/
│       │
│       ├── 📁 components/                # Reusable UI Components
│       │   ├── 📁 common/
│       │   │   ├── Button.tsx
│       │   │   ├── Card.tsx
│       │   │   ├── Modal.tsx
│       │   │   ├── Loader.tsx
│       │   │   ├── Toast.tsx
│       │   │   └── Dropdown.tsx
│       │   ├── 📁 layout/
│       │   │   ├── Header.tsx
│       │   │   ├── Sidebar.tsx
│       │   │   ├── Footer.tsx
│       │   │   └── CustomerSelector.tsx
│       │   ├── 📁 dashboard/
│       │   │   ├── StatCard.tsx
│       │   │   ├── IncidentChart.tsx
│       │   │   ├── MitreHeatmap.tsx
│       │   │   ├── ThreatIntelWidget.tsx
│       │   │   └── IntegrationHealth.tsx
│       │   ├── 📁 incidents/
│       │   │   ├── IncidentList.tsx
│       │   │   ├── IncidentCard.tsx
│       │   │   ├── IncidentDetails.tsx
│       │   │   ├── CausalityChain.tsx
│       │   │   ├── ArtifactsList.tsx
│       │   │   └── AnalysisReport.tsx
│       │   ├── 📁 charts/
│       │   │   ├── LineChart.tsx
│       │   │   ├── BarChart.tsx
│       │   │   ├── PieChart.tsx
│       │   │   ├── RadarChart.tsx
│       │   │   └── HeatmapChart.tsx
│       │   └── 📁 animations/
│       │       ├── CardFlip.tsx
│       │       ├── FadeIn.tsx
│       │       └── SlideIn.tsx
│       │
│       ├── 📁 services/                  # API Client Services
│       │   ├── api.ts
│       │   ├── xsiamService.ts
│       │   ├── incidentService.ts
│       │   ├── customerService.ts
│       │   ├── authService.ts
│       │   ├── aiService.ts
│       │   └── websocketService.ts
│       │
│       ├── 📁 hooks/                     # Custom React Hooks
│       │   ├── useAuth.ts
│       │   ├── useCustomer.ts
│       │   ├── useIncidents.ts
│       │   ├── useWebSocket.ts
│       │   ├── useTheme.ts
│       │   └── useDebounce.ts
│       │
│       ├── 📁 store/                     # State Management (Zustand)
│       │   ├── authStore.ts
│       │   ├── customerStore.ts
│       │   ├── incidentStore.ts
│       │   └── uiStore.ts
│       │
│       ├── 📁 types/                     # TypeScript Types
│       │   ├── incident.ts
│       │   ├── customer.ts
│       │   ├── user.ts
│       │   ├── analysis.ts
│       │   └── api.ts
│       │
│       ├── 📁 utils/                     # Utility Functions
│       │   ├── formatters.ts
│       │   ├── validators.ts
│       │   ├── constants.ts
│       │   └── helpers.ts
│       │
│       └── 📁 styles/                    # Global Styles
│           ├── globals.css
│           └── animations.css
│
├── 📁 backend/                           # Node.js/Express Backend
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   ├── 📄 Dockerfile
│   ├── 📄 .eslintrc.json
│   ├── 📄 knexfile.ts
│   │
│   └── 📁 src/
│       ├── 📄 index.ts                   # Main entry point
│       ├── 📄 worker.ts                  # Background worker
│       ├── 📄 app.ts                     # Express app setup
│       │
│       ├── 📁 config/                    # Configuration
│       │   ├── database.ts
│       │   ├── redis.ts
│       │   ├── email.ts
│       │   └── constants.ts
│       │
│       ├── 📁 controllers/               # Route Controllers
│       │   ├── authController.ts
│       │   ├── customerController.ts
│       │   ├── incidentController.ts
│       │   ├── xsiamController.ts
│       │   ├── analysisController.ts
│       │   ├── reportController.ts
│       │   └── dashboardController.ts
│       │
│       ├── 📁 services/                  # Business Logic
│       │   ├── authService.ts
│       │   ├── customerService.ts
│       │   ├── incidentService.ts
│       │   ├── xsiamService.ts
│       │   ├── analysisService.ts
│       │   ├── emailService.ts
│       │   ├── reportService.ts
│       │   ├── threatIntelService.ts
│       │   └── mitreService.ts
│       │
│       ├── 📁 models/                    # Database Models
│       │   ├── User.ts
│       │   ├── Customer.ts
│       │   ├── Incident.ts
│       │   ├── Analysis.ts
│       │   ├── Artifact.ts
│       │   └── AuditLog.ts
│       │
│       ├── 📁 middleware/                # Express Middleware
│       │   ├── auth.ts
│       │   ├── validation.ts
│       │   ├── errorHandler.ts
│       │   ├── rateLimiter.ts
│       │   ├── logger.ts
│       │   └── multiTenant.ts
│       │
│       ├── 📁 routes/                    # API Routes
│       │   ├── index.ts
│       │   ├── auth.ts
│       │   ├── customers.ts
│       │   ├── incidents.ts
│       │   ├── xsiam.ts
│       │   ├── analysis.ts
│       │   ├── reports.ts
│       │   └── dashboard.ts
│       │
│       ├── 📁 utils/                     # Utility Functions
│       │   ├── logger.ts
│       │   ├── encryption.ts
│       │   ├── validators.ts
│       │   ├── helpers.ts
│       │   └── constants.ts
│       │
│       ├── 📁 types/                     # TypeScript Types
│       │   ├── express.d.ts
│       │   ├── incident.ts
│       │   ├── customer.ts
│       │   └── xsiam.ts
│       │
│       └── 📁 jobs/                      # Background Jobs
│           ├── incidentFetcher.ts
│           ├── analysisProcessor.ts
│           ├── reportGenerator.ts
│           └── healthChecker.ts
│
├── 📁 ai-engine/                         # AI Analysis Service
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   ├── 📄 Dockerfile
│   │
│   └── 📁 src/
│       ├── 📄 index.ts
│       │
│       ├── 📁 analyzers/                 # Analysis Modules
│       │   ├── incidentAnalyzer.ts
│       │   ├── rootCauseAnalyzer.ts
│       │   ├── impactAnalyzer.ts
│       │   ├── mitreMapper.ts
│       │   └── threatScorer.ts
│       │
│       ├── 📁 models/                    # AI Model Integrations
│       │   ├── openai.ts
│       │   ├── anthropic.ts
│       │   └── langchain.ts
│       │
│       ├── 📁 prompts/                   # AI Prompt Templates
│       │   ├── incidentAnalysis.ts
│       │   ├── rootCause.ts
│       │   ├── businessImpact.ts
│       │   └── recommendations.ts
│       │
│       ├── 📁 services/
│       │   ├── analysisService.ts
│       │   ├── queueService.ts
│       │   └── cacheService.ts
│       │
│       └── 📁 utils/
│           ├── logger.ts
│           └── helpers.ts
│
├── 📁 database/                          # Database Management
│   ├── 📄 schema.sql                     # Complete schema
│   │
│   ├── 📁 migrations/                    # Knex Migrations
│   │   ├── 001_create_users.ts
│   │   ├── 002_create_customers.ts
│   │   ├── 003_create_incidents.ts
│   │   ├── 004_create_analyses.ts
│   │   └── 005_create_audit_logs.ts
│   │
│   ├── 📁 seeds/                         # Seed Data
│   │   ├── 001_default_admin.ts
│   │   ├── 002_altisec_customer.ts
│   │   └── 003_mitre_attack.ts
│   │
│   └── 📁 init/                          # Docker init scripts
│       └── 01-init.sql
│
├── 📁 docker/                            # Docker Configurations
│   ├── 📁 nginx/
│   │   ├── nginx.conf
│   │   └── 📁 ssl/
│   ├── 📁 prometheus/
│   │   └── prometheus.yml
│   └── 📁 grafana/
│       ├── 📁 dashboards/
│       └── 📁 datasources/
│
├── 📁 scripts/                           # Utility Scripts
│   ├── setup.sh
│   ├── deploy.sh
│   ├── backup.sh
│   ├── restore.sh
│   └── seed-mitre.ts
│
├── 📁 docs/                              # Documentation
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   ├── DEVELOPMENT.md
│   ├── SECURITY.md
│   └── USER_GUIDE.md
│
├── 📁 tests/                             # Integration Tests
│   ├── 📁 integration/
│   │   ├── auth.test.ts
│   │   ├── incidents.test.ts
│   │   └── customers.test.ts
│   ├── 📁 e2e/
│   │   ├── dashboard.spec.ts
│   │   ├── incidents.spec.ts
│   │   └── analysis.spec.ts
│   └── 📁 fixtures/
│       └── sample-data.json
│
└── 📁 k8s/                               # Kubernetes Manifests
    ├── namespace.yaml
    ├── configmap.yaml
    ├── secrets.yaml
    ├── postgres.yaml
    ├── redis.yaml
    ├── backend.yaml
    ├── frontend.yaml
    ├── ai-engine.yaml
    ├── ingress.yaml
    └── service.yaml
```

## 📊 File Count Summary

- **Total Directories**: 50+
- **Total Files**: 150+
- **Frontend Components**: 30+
- **Backend Services**: 15+
- **API Routes**: 10+
- **Database Tables**: 15+
- **AI Analyzers**: 5+

## 🎯 Key Directories Explained

### Frontend (`/frontend`)
- **App Router**: Next.js 14 app directory structure
- **Components**: Modular, reusable UI components
- **Services**: API client integrations
- **Hooks**: Custom React hooks for state & logic
- **Store**: Zustand state management

### Backend (`/backend`)
- **Controllers**: HTTP request handlers
- **Services**: Business logic layer
- **Models**: Database ORM models
- **Middleware**: Express middleware stack
- **Jobs**: Background task processors

### AI Engine (`/ai-engine`)
- **Analyzers**: Specialized analysis modules
- **Models**: AI provider integrations
- **Prompts**: Structured prompt templates

### Database (`/database`)
- **Schema**: Complete PostgreSQL schema
- **Migrations**: Version-controlled DB changes
- **Seeds**: Initial data population

## 🚀 Quick Navigation

| Feature | Location |
|---------|----------|
| MSSP Dashboard | `/frontend/src/app/dashboard/mssp` |
| Incident Analysis | `/backend/src/services/analysisService.ts` |
| XSIAM Integration | `/backend/src/services/xsiamService.ts` |
| AI Prompts | `/ai-engine/src/prompts/` |
| Database Schema | `/database/schema.sql` |
| Docker Setup | `/docker-compose.yml` |
| API Routes | `/backend/src/routes/` |

---

**This structure supports:**
- ✅ Multi-tenant architecture
- ✅ Microservices design
- ✅ Scalable deployment
- ✅ Clean code organization
- ✅ Easy maintenance
- ✅ Team collaboration
