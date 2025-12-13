# 🎨 UI Preview & Design Documentation

## Visual Overview of XSIAM SOC MSSP Platform

---

## 🌐 Live Preview

**Access the interactive preview at:**
```
http://localhost:3000/preview
```

This page showcases all major dashboards and features with realistic data and interactions.

---

## 🎯 Design Philosophy

### Color Palette
- **Primary**: Blue (#0ea5e9) to Purple (#a855f7) gradients
- **Success**: Green (#22c55e)
- **Warning**: Yellow (#f59e0b) to Orange (#d97706)
- **Danger**: Red (#ef4444)
- **Background**: Dark slate (#0f172a) with purple accents

### Design Style
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Neumorphism**: Soft shadows for depth
- **Gradients**: Vibrant color transitions
- **Animations**: Smooth transitions and hover effects

---

## 📱 Dashboard Previews

### 1. 🌐 MSSP Super Dashboard

**Purpose**: Global overview for MSSP administrators managing multiple customers

**Key Features**:
```
┌─────────────────────────────────────────────────────────┐
│  🏢 Total Customers    🚨 Active Incidents              │
│     24 (+3)               156 (12 critical)             │
│                                                         │
│  🤖 Automation Rate    ⚡ Avg Response                  │
│     94% (+5%)             4.2m (-1.3m)                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Customer Grid (3 columns)                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │ Altisec Tech │ │ SecureBank   │ │ TechStart    │   │
│  │ 23 incidents │ │ 45 incidents │ │ 12 incidents │   │
│  │ 🟢 Healthy   │ │ 🟡 Warning   │ │ 🟢 Healthy   │   │
│  └──────────────┘ └──────────────┘ └──────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  🎯 MITRE ATT&CK Heatmap                                │
│  [████][████][████][████][████][████][████][████]      │
│  [████][████][████][████][████][████][████][████]      │
│  Color-coded by threat frequency                        │
└─────────────────────────────────────────────────────────┘
```

**Visual Elements**:
- ✅ 4 animated stat cards with gradient backgrounds
- ✅ Customer cards with status indicators (green/yellow/red)
- ✅ Interactive MITRE ATT&CK heatmap (50 techniques)
- ✅ Hover effects and smooth transitions

---

### 2. 🔍 Analyst Dashboard

**Purpose**: Daily workspace for SOC analysts investigating incidents

**Key Features**:
```
┌─────────────────────────────────────────────────────────┐
│  📋 My Queue    ⏳ In Progress    ✅ Resolved    ⬆️ Escalated │
│     8 (2 new)      3 (Avg 2.5h)     12 (+4)       2      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  🚨 Incident Queue                                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │ INC-2024-001 [CRITICAL] [NEW]                   │   │
│  │ Suspicious PowerShell Execution      5 min ago  │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ INC-2024-002 [HIGH] [INVESTIGATING]             │   │
│  │ Multiple Failed Login Attempts      12 min ago  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Integration Health                                     │
│  🟢 XSIAM API (45ms)  🟢 Threat Intel (120ms)          │
│  🟡 Email Gateway (890ms - Degraded)                   │
└─────────────────────────────────────────────────────────┘
```

**Visual Elements**:
- ✅ Real-time incident queue with severity badges
- ✅ Status indicators (NEW, INVESTIGATING, RESOLVED)
- ✅ Integration health cards with latency metrics
- ✅ Click-to-investigate functionality

---

### 3. 📊 SOC Manager Dashboard

**Purpose**: Team performance and operational metrics

**Key Features**:
```
┌─────────────────────────────────────────────────────────┐
│  👥 Team Size    ⏱️ MTTR         🎯 MTTA      📈 SLA    │
│     12 (2 leave)   18m (-5m)      4m (-2m)    98% (+2%) │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  👥 Team Performance                                    │
│  ┌─────────────────────────────────────────────────┐   │
│  │ John Doe        45 resolved  15m avg  [96%]     │   │
│  │ Jane Smith      52 resolved  12m avg  [98%]     │   │
│  │ Mike Johnson    38 resolved  18m avg  [92%]     │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  🤖 Automation Metrics                                  │
│  Auto-Resolved: 67%  │  AI Accuracy: 94%  │  Saved: 142h│
└─────────────────────────────────────────────────────────┘
```

**Visual Elements**:
- ✅ Team performance leaderboard
- ✅ MTTR/MTTA trend charts
- ✅ Automation success metrics
- ✅ Efficiency percentages with color coding

---

### 4. 👔 CISO Executive Dashboard

**Purpose**: High-level security posture for executives

**Key Features**:
```
┌─────────────────────────────────────────────────────────┐
│  🛡️ Security Posture  ⚠️ Risk Exposure  💰 ROI  ✓ Compliance│
│     87/100 (+5)         Medium (↓)      $2.4M    99.2%   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  📋 Executive Summary                                   │
│  Overall Status: Operations performing well with 94%   │
│  automation. No critical breaches this quarter.         │
│                                                         │
│  Key Achievements: 156 incidents mitigated, zero        │
│  business impact. MTTR reduced 28% via AI.              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  🌍 Threat Landscape        📊 Attack Surface           │
│  Ransomware    High   ↑    Cloud Assets:    1,247      │
│  Phishing      Medium →    Endpoints:       3,456      │
│  DDoS          Low    ↓    Network Devices:   892      │
└─────────────────────────────────────────────────────────┘
```

**Visual Elements**:
- ✅ Executive summary cards
- ✅ Threat landscape overview
- ✅ Attack surface metrics
- ✅ Compliance status indicators

---

### 5. 🚨 Incident Detail Page

**Purpose**: Deep-dive investigation and AI analysis

**Key Features**:
```
┌─────────────────────────────────────────────────────────┐
│  INC-2024-001 • Suspicious PowerShell Execution         │
│  [🤖 Analyze with AI]  [📧 Send Report]                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Severity: CRITICAL  │  Status: Investigating           │
│  Assigned: John Doe  │  Detected: 2024-12-11 14:23:45   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  🤖 AI-Powered Analysis                                 │
│                                                         │
│  Executive Summary:                                     │
│  Detected malicious PowerShell execution attempting     │
│  to download remote payload. Fileless malware attack.   │
│                                                         │
│  Root Cause:                                            │
│  Phishing email → Credential harvest → Remote exec      │
│                                                         │
│  Business Impact: MEDIUM                                │
│  Potential data exfiltration, no lateral movement       │
│                                                         │
│  Recommended Actions:                                   │
│  • Isolate workstation immediately                      │
│  • Reset credentials + enforce MFA                      │
│  • Scan for similar PowerShell patterns                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  🎯 MITRE ATT&CK Mapping                                │
│  [T1566 Phishing] [T1059.001 PowerShell]               │
│  [T1071 App Protocol] [T1567 Exfiltration]             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  🔗 Attack Causality Chain                              │
│  [Phishing] → [Attachment] → [Harvest] → [Exec] → [C2] │
│   14:15:23     14:16:45       14:17:12    14:23:45      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  📦 Collected Artifacts                                 │
│  File Hash:    a3f5d8e9c2b1...        [High Threat]    │
│  IP Address:   192.168.1.105          [Medium Threat]  │
│  Domain:       malicious-site.com     [High Threat]    │
└─────────────────────────────────────────────────────────┘
```

**Visual Elements**:
- ✅ AI-generated analysis sections
- ✅ MITRE ATT&CK technique badges
- ✅ Visual causality chain timeline
- ✅ Artifact collection with threat scores
- ✅ Action buttons for analysis and reporting

---

## 🎨 UI Components Library

### Stat Cards
```
┌──────────────────┐
│  🏢              │
│                  │
│  Total Customers │
│  24              │
│  +3 this month   │
└──────────────────┘
```
- Gradient backgrounds
- Icon indicators
- Animated hover effects
- Trend indicators

### Customer Cards
```
┌──────────────────┐
│ Altisec Tech  🟢 │
│                  │
│ Incidents: 23    │
│ Critical:  3     │
└──────────────────┘
```
- Status indicators (🟢🟡🔴)
- Hover scale effect
- Click to navigate

### Incident Rows
```
┌────────────────────────────────────────┐
│ INC-2024-001 [CRITICAL] [NEW]          │
│ Suspicious PowerShell Execution        │
│                            5 min ago    │
└────────────────────────────────────────┘
```
- Severity badges
- Status badges
- Timestamp
- Hover highlight

### MITRE Badges
```
┌──────────────┐
│ T1566        │
│ Phishing     │
│ Initial Access│
└──────────────┘
```
- Purple theme
- Technique ID
- Tactic name

---

## 🌈 Color System

### Severity Levels
- **Critical**: Red (#ef4444)
- **High**: Orange (#f59e0b)
- **Medium**: Yellow (#fbbf24)
- **Low**: Blue (#3b82f6)
- **Informational**: Gray (#6b7280)

### Status Colors
- **Healthy**: Green (#22c55e)
- **Warning**: Yellow (#f59e0b)
- **Critical**: Red (#ef4444)
- **Unknown**: Gray (#6b7280)

### Gradients
- **Primary**: Blue → Cyan
- **Success**: Green → Emerald
- **Warning**: Yellow → Orange
- **Danger**: Red → Pink
- **Info**: Purple → Pink

---

## ✨ Animations

### Hover Effects
- **Scale**: 1.05x on hover
- **Glow**: Subtle shadow increase
- **Color**: Brightness adjustment

### Transitions
- **Fade In**: 0.5s ease-in-out
- **Slide In**: 0.3s ease-out
- **Card Flip**: 0.6s ease-in-out

### Loading States
- **Pulse**: Breathing effect
- **Spin**: Circular rotation
- **Skeleton**: Content placeholder

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

### Adaptive Features
- Collapsible sidebar on mobile
- Stacked cards on small screens
- Horizontal scroll for tables
- Touch-friendly buttons

---

## 🎯 Interactive Elements

### Clickable Areas
- ✅ Incident rows → Detail page
- ✅ Customer cards → Customer view
- ✅ Stat cards → Filtered views
- ✅ MITRE badges → Technique details

### Buttons
- **Primary**: Blue gradient
- **Success**: Green gradient
- **Danger**: Red gradient
- **Secondary**: White outline

### Forms
- Floating labels
- Inline validation
- Error states
- Success feedback

---

## 🚀 How to View

### Option 1: Live Preview
```bash
# Start the development server
npm run dev

# Navigate to preview page
http://localhost:3000/preview
```

### Option 2: Production Build
```bash
# Build for production
npm run build

# Start production server
npm start

# Access preview
http://localhost:3000/preview
```

### Option 3: Docker
```bash
# Start with Docker
docker-compose up -d

# Access preview
http://localhost:3000/preview
```

---

## 📸 Screenshot Guide

When taking screenshots for documentation:

1. **Full Dashboard**: Capture entire viewport
2. **Component Focus**: Zoom to specific cards
3. **Interactions**: Show hover states
4. **Mobile View**: Use responsive mode
5. **Dark Theme**: Default dark background

---

## 🎨 Design Tools Used

- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Recharts**: Data visualizations
- **React Flow**: Causality diagrams
- **Lucide Icons**: Modern icon set

---

## 📝 Customization

### Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

### Animations
Edit `globals.css`:
```css
@keyframes yourAnimation {
  /* keyframes */
}
```

### Components
All components in:
```
frontend/src/components/
```

---

## 🎉 Summary

The UI features:
- ✅ **5 Major Dashboards** (MSSP, Analyst, Manager, CISO, Incident)
- ✅ **Modern Design** (Glassmorphism + Gradients)
- ✅ **Smooth Animations** (Hover, Transitions, Loading)
- ✅ **Responsive Layout** (Mobile, Tablet, Desktop)
- ✅ **Interactive Elements** (Click, Hover, Navigate)
- ✅ **Professional Theme** (Dark mode with vibrant accents)

**Access the live preview at: http://localhost:3000/preview**

---

**Built with ❤️ using Next.js 14, Tailwind CSS, and modern web technologies**
