# ⚡ Quick Start Guide

Get the XSIAM SOC MSSP Platform running in **5 minutes**!

---

## 🚀 Fastest Way (Docker)

```bash
# 1. Clone repository
git clone https://github.com/niketlahoti/xsiam-soc-mssp-platform.git
cd xsiam-soc-mssp-platform

# 2. Copy environment file
cp .env.example .env

# 3. Start everything
docker-compose up -d

# 4. Initialize database
docker-compose exec backend npm run migrate
docker-compose exec backend npm run seed

# 5. Open browser
open http://localhost:3000
```

**Default Login:**
- Email: `admin@xsiam-mssp.com`
- Password: `Admin@123`

---

## 📦 What Gets Started

| Service | Port | URL |
|---------|------|-----|
| Frontend | 3000 | http://localhost:3000 |
| Backend API | 8000 | http://localhost:8000 |
| AI Engine | 8001 | http://localhost:8001 |
| PostgreSQL | 5432 | localhost:5432 |
| Redis | 6379 | localhost:6379 |
| Grafana | 3001 | http://localhost:3001 |
| Prometheus | 9090 | http://localhost:9090 |

---

## 🎯 First Steps After Login

1. **View MSSP Dashboard**
   - Navigate to Dashboard → MSSP
   - See overview of all customers

2. **Check Default Customer**
   - Customer: Altisec Technologies Pvt Ltd
   - Already configured with XSIAM API

3. **Test XSIAM Connection**
   - Go to Settings → Integrations
   - Click "Test Connection"

4. **Fetch Incidents**
   - Navigate to Incidents
   - Click "Fetch Now" or wait for auto-sync

5. **Trigger AI Analysis**
   - Click on any incident
   - Click "Analyze with AI"

---

## 🛠️ Common Commands

```bash
# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Restart services
docker-compose restart

# Rebuild after code changes
docker-compose up -d --build

# Access backend shell
docker-compose exec backend sh

# Access database
docker-compose exec postgres psql -U postgres -d xsiam_mssp
```

---

## 🔧 Configuration

### Add Your XSIAM API Keys

Edit `.env`:
```env
XSIAM_API_URL=your_xsiam_url
XSIAM_API_ID=your_api_id
XSIAM_API_KEY=your_api_key
```

### Add AI API Keys

```env
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

### Configure Email

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change ports in docker-compose.yml
ports:
  - "3001:3000"  # Frontend
  - "8001:8000"  # Backend
```

### Database Connection Failed
```bash
# Reset database
docker-compose down -v
docker-compose up -d
docker-compose exec backend npm run migrate
```

### Can't Login
```bash
# Reset admin password
docker-compose exec backend npm run seed
```

---

## 📚 Next Steps

- Read [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup
- Check [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for architecture
- See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute

---

## 🆘 Need Help?

- **Issues**: [GitHub Issues](https://github.com/niketlahoti/xsiam-soc-mssp-platform/issues)
- **Docs**: [Documentation](docs/)
- **Email**: support@example.com

---

**🎉 You're all set! Start exploring the platform!**
