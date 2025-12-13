'use client';

import { useState } from 'react';

export default function PreviewPage() {
  const [activeTab, setActiveTab] = useState('mssp');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🛡️</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">XSIAM SOC Platform</h1>
                <p className="text-gray-400 text-xs">Multi-Tenant MSSP</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <select className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 backdrop-blur">
                <option>Altisec Technologies</option>
                <option>Customer 2</option>
                <option>Customer 3</option>
              </select>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
                <span className="text-white text-sm">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-black/20 backdrop-blur border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'mssp', label: '🌐 MSSP Dashboard', icon: '🌐' },
              { id: 'analyst', label: '🔍 Analyst View', icon: '🔍' },
              { id: 'manager', label: '📊 Manager View', icon: '📊' },
              { id: 'ciso', label: '👔 CISO View', icon: '👔' },
              { id: 'incident', label: '🚨 Incident Detail', icon: '🚨' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        {activeTab === 'mssp' && <MSSPDashboard />}
        {activeTab === 'analyst' && <AnalystDashboard />}
        {activeTab === 'manager' && <ManagerDashboard />}
        {activeTab === 'ciso' && <CISODashboard />}
        {activeTab === 'incident' && <IncidentDetail />}
      </div>
    </div>
  );
}

// MSSP Dashboard
function MSSPDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">🌐 MSSP Super Dashboard</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Total Customers"
          value="24"
          change="+3 this month"
          icon="🏢"
          color="from-blue-500 to-cyan-500"
        />
        <StatCard
          title="Active Incidents"
          value="156"
          change="12 critical"
          icon="🚨"
          color="from-red-500 to-orange-500"
        />
        <StatCard
          title="Automation Rate"
          value="94%"
          change="+5% vs last month"
          icon="🤖"
          color="from-green-500 to-emerald-500"
        />
        <StatCard
          title="Avg Response Time"
          value="4.2m"
          change="-1.3m improvement"
          icon="⚡"
          color="from-purple-500 to-pink-500"
        />
      </div>

      {/* Customer Grid */}
      <div className="grid grid-cols-3 gap-6">
        <CustomerCard
          name="Altisec Technologies"
          incidents={23}
          critical={3}
          status="healthy"
        />
        <CustomerCard
          name="SecureBank Corp"
          incidents={45}
          critical={8}
          status="warning"
        />
        <CustomerCard
          name="TechStart Inc"
          incidents={12}
          critical={1}
          status="healthy"
        />
        <CustomerCard
          name="Global Finance"
          incidents={67}
          critical={15}
          status="critical"
        />
        <CustomerCard
          name="HealthCare Plus"
          incidents={34}
          critical={5}
          status="warning"
        />
        <CustomerCard
          name="Retail Solutions"
          incidents={19}
          critical={2}
          status="healthy"
        />
      </div>

      {/* MITRE ATT&CK Heatmap */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">🎯 MITRE ATT&CK Coverage</h3>
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`h-12 rounded ${
                i % 5 === 0
                  ? 'bg-red-500/80'
                  : i % 3 === 0
                  ? 'bg-orange-500/60'
                  : i % 2 === 0
                  ? 'bg-yellow-500/40'
                  : 'bg-green-500/20'
              } hover:scale-110 transition-transform cursor-pointer`}
              title={`Technique T${1000 + i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Analyst Dashboard
function AnalystDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">🔍 Analyst Dashboard</h2>
      
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="My Queue" value="8" change="2 new" icon="📋" color="from-blue-500 to-cyan-500" />
        <StatCard title="In Progress" value="3" change="Avg 2.5h" icon="⏳" color="from-yellow-500 to-orange-500" />
        <StatCard title="Resolved Today" value="12" change="+4 vs yesterday" icon="✅" color="from-green-500 to-emerald-500" />
        <StatCard title="Escalated" value="2" change="Needs review" icon="⬆️" color="from-red-500 to-pink-500" />
      </div>

      {/* Incident Queue */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">🚨 Incident Queue</h3>
        <div className="space-y-3">
          <IncidentRow
            id="INC-2024-001"
            title="Suspicious PowerShell Execution"
            severity="critical"
            time="5 min ago"
            status="new"
          />
          <IncidentRow
            id="INC-2024-002"
            title="Multiple Failed Login Attempts"
            severity="high"
            time="12 min ago"
            status="investigating"
          />
          <IncidentRow
            id="INC-2024-003"
            title="Unusual Outbound Traffic"
            severity="medium"
            time="23 min ago"
            status="new"
          />
          <IncidentRow
            id="INC-2024-004"
            title="Privilege Escalation Detected"
            severity="critical"
            time="45 min ago"
            status="investigating"
          />
        </div>
      </div>

      {/* Integration Health */}
      <div className="grid grid-cols-3 gap-6">
        <IntegrationCard name="XSIAM API" status="healthy" latency="45ms" />
        <IntegrationCard name="Threat Intel" status="healthy" latency="120ms" />
        <IntegrationCard name="Email Gateway" status="degraded" latency="890ms" />
      </div>
    </div>
  );
}

// Manager Dashboard
function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">📊 SOC Manager Dashboard</h2>
      
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Team Size" value="12" change="2 on leave" icon="👥" color="from-blue-500 to-cyan-500" />
        <StatCard title="MTTR" value="18m" change="-5m this week" icon="⏱️" color="from-green-500 to-emerald-500" />
        <StatCard title="MTTA" value="4m" change="-2m this week" icon="🎯" color="from-purple-500 to-pink-500" />
        <StatCard title="SLA Compliance" value="98%" change="+2% improvement" icon="📈" color="from-yellow-500 to-orange-500" />
      </div>

      {/* Team Performance */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">👥 Team Performance</h3>
        <div className="space-y-4">
          <AnalystPerformance name="John Doe" resolved={45} avg="15m" efficiency={96} />
          <AnalystPerformance name="Jane Smith" resolved={52} avg="12m" efficiency={98} />
          <AnalystPerformance name="Mike Johnson" resolved={38} avg="18m" efficiency={92} />
          <AnalystPerformance name="Sarah Williams" resolved={41} avg="16m" efficiency={94} />
        </div>
      </div>

      {/* Automation Success */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">🤖 Automation Metrics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-2">Auto-Resolved</div>
            <div className="text-3xl font-bold text-green-400">67%</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-2">AI Accuracy</div>
            <div className="text-3xl font-bold text-blue-400">94%</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-2">Time Saved</div>
            <div className="text-3xl font-bold text-purple-400">142h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CISO Dashboard
function CISODashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">👔 CISO Executive Dashboard</h2>
      
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Security Posture" value="87/100" change="+5 this quarter" icon="🛡️" color="from-green-500 to-emerald-500" />
        <StatCard title="Risk Exposure" value="Medium" change="Trending down" icon="⚠️" color="from-yellow-500 to-orange-500" />
        <StatCard title="Automation ROI" value="$2.4M" change="+$400K saved" icon="💰" color="from-blue-500 to-cyan-500" />
        <StatCard title="Compliance" value="99.2%" change="All frameworks" icon="✓" color="from-purple-500 to-pink-500" />
      </div>

      {/* Executive Summary */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">📋 Executive Summary</h3>
        <div className="space-y-4 text-gray-300">
          <p className="leading-relaxed">
            <strong className="text-white">Overall Status:</strong> Security operations are performing well with 94% automation rate and improved response times. No critical breaches detected this quarter.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Key Achievements:</strong> Successfully mitigated 156 incidents with zero business impact. MTTR reduced by 28% through AI-powered analysis.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Areas of Focus:</strong> Continue monitoring emerging threats in cloud infrastructure. Enhance detection capabilities for supply chain attacks.
          </p>
        </div>
      </div>

      {/* Threat Landscape */}
      <div className="grid grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-bold text-white mb-4">🌍 Threat Landscape</h3>
          <div className="space-y-3">
            <ThreatItem type="Ransomware" level="High" trend="↑" />
            <ThreatItem type="Phishing" level="Medium" trend="→" />
            <ThreatItem type="DDoS" level="Low" trend="↓" />
            <ThreatItem type="Insider Threat" level="Medium" trend="↑" />
          </div>
        </div>
        
        <div className="glass rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-bold text-white mb-4">📊 Attack Surface</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Cloud Assets</span>
              <span className="text-white font-bold">1,247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Endpoints</span>
              <span className="text-white font-bold">3,456</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Network Devices</span>
              <span className="text-white font-bold">892</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Applications</span>
              <span className="text-white font-bold">234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Incident Detail Page
function IncidentDetail() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">🚨 Incident Details</h2>
          <p className="text-gray-400">INC-2024-001 • Suspicious PowerShell Execution</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
            🤖 Analyze with AI
          </button>
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
            📧 Send Report
          </button>
        </div>
      </div>

      {/* Incident Overview */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-gray-400 text-sm mb-1">Severity</div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">CRITICAL</span>
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">Status</div>
            <div className="text-white font-semibold">Investigating</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">Assigned To</div>
            <div className="text-white font-semibold">John Doe</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">Detection Time</div>
            <div className="text-white font-semibold">2024-12-11 14:23:45</div>
          </div>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">🤖 AI-Powered Analysis</h3>
        <div className="space-y-4">
          <div>
            <div className="text-blue-400 font-semibold mb-2">Executive Summary</div>
            <p className="text-gray-300 leading-relaxed">
              Detected malicious PowerShell execution attempting to download and execute a remote payload. The activity originated from a compromised user account and shows characteristics of a fileless malware attack.
            </p>
          </div>
          <div>
            <div className="text-blue-400 font-semibold mb-2">Root Cause</div>
            <p className="text-gray-300 leading-relaxed">
              Initial access gained through phishing email with malicious attachment. User credentials harvested and used to execute PowerShell commands remotely.
            </p>
          </div>
          <div>
            <div className="text-blue-400 font-semibold mb-2">Business Impact</div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-orange-400 font-semibold">MEDIUM</span> - Potential data exfiltration from compromised workstation. No evidence of lateral movement detected yet.
            </p>
          </div>
          <div>
            <div className="text-blue-400 font-semibold mb-2">Recommended Actions</div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Immediately isolate affected workstation</li>
              <li>Reset user credentials and enforce MFA</li>
              <li>Scan network for similar PowerShell patterns</li>
              <li>Review email gateway logs for phishing campaign</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MITRE ATT&CK Mapping */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">🎯 MITRE ATT&CK Mapping</h3>
        <div className="flex flex-wrap gap-3">
          <MitreBadge technique="T1566" name="Phishing" tactic="Initial Access" />
          <MitreBadge technique="T1059.001" name="PowerShell" tactic="Execution" />
          <MitreBadge technique="T1071" name="Application Layer Protocol" tactic="Command and Control" />
          <MitreBadge technique="T1567" name="Exfiltration Over Web Service" tactic="Exfiltration" />
        </div>
      </div>

      {/* Causality Chain */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">🔗 Attack Causality Chain</h3>
        <div className="flex items-center gap-4 overflow-x-auto pb-4">
          <CausalityNode step="1" action="Phishing Email" time="14:15:23" />
          <Arrow />
          <CausalityNode step="2" action="Malicious Attachment" time="14:16:45" />
          <Arrow />
          <CausalityNode step="3" action="Credential Harvest" time="14:17:12" />
          <Arrow />
          <CausalityNode step="4" action="PowerShell Execution" time="14:23:45" />
          <Arrow />
          <CausalityNode step="5" action="C2 Connection" time="14:24:01" />
        </div>
      </div>

      {/* Artifacts */}
      <div className="glass rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">📦 Collected Artifacts</h3>
        <div className="space-y-2">
          <ArtifactRow type="File Hash" value="a3f5d8e9c2b1..." threat="High" />
          <ArtifactRow type="IP Address" value="192.168.1.105" threat="Medium" />
          <ArtifactRow type="Domain" value="malicious-site.com" threat="High" />
          <ArtifactRow type="Process" value="powershell.exe" threat="Medium" />
        </div>
      </div>
    </div>
  );
}

// Helper Components
function StatCard({ title, value, change, icon, color }: any) {
  return (
    <div className="glass rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center text-2xl`}>
          {icon}
        </div>
      </div>
      <div className="text-gray-400 text-sm mb-1">{title}</div>
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-green-400 text-sm">{change}</div>
    </div>
  );
}

function CustomerCard({ name, incidents, critical, status }: any) {
  const statusColors = {
    healthy: 'from-green-500 to-emerald-500',
    warning: 'from-yellow-500 to-orange-500',
    critical: 'from-red-500 to-pink-500',
  };

  return (
    <div className="glass rounded-xl p-5 border border-white/20 hover:scale-105 transition-transform cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-white font-semibold">{name}</h4>
        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${statusColors[status as keyof typeof statusColors]}`} />
      </div>
      <div className="flex justify-between text-sm">
        <div>
          <div className="text-gray-400">Incidents</div>
          <div className="text-white font-bold text-xl">{incidents}</div>
        </div>
        <div>
          <div className="text-gray-400">Critical</div>
          <div className="text-red-400 font-bold text-xl">{critical}</div>
        </div>
      </div>
    </div>
  );
}

function IncidentRow({ id, title, severity, time, status }: any) {
  const severityColors = {
    critical: 'bg-red-500/20 text-red-400',
    high: 'bg-orange-500/20 text-orange-400',
    medium: 'bg-yellow-500/20 text-yellow-400',
    low: 'bg-blue-500/20 text-blue-400',
  };

  return (
    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-400 text-sm font-mono">{id}</span>
            <span className={`px-2 py-1 rounded text-xs font-bold ${severityColors[severity as keyof typeof severityColors]}`}>
              {severity.toUpperCase()}
            </span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-bold">
              {status.toUpperCase()}
            </span>
          </div>
          <div className="text-white font-semibold">{title}</div>
        </div>
        <div className="text-gray-400 text-sm">{time}</div>
      </div>
    </div>
  );
}

function IntegrationCard({ name, status, latency }: any) {
  return (
    <div className="glass rounded-xl p-4 border border-white/20">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-semibold">{name}</span>
        <div className={`w-2 h-2 rounded-full ${status === 'healthy' ? 'bg-green-400' : 'bg-yellow-400'}`} />
      </div>
      <div className="text-gray-400 text-sm">Latency: {latency}</div>
    </div>
  );
}

function AnalystPerformance({ name, resolved, avg, efficiency }: any) {
  return (
    <div className="bg-white/5 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-semibold">{name}</span>
        <span className="text-green-400 font-bold">{efficiency}%</span>
      </div>
      <div className="flex gap-6 text-sm">
        <div>
          <span className="text-gray-400">Resolved: </span>
          <span className="text-white font-semibold">{resolved}</span>
        </div>
        <div>
          <span className="text-gray-400">Avg Time: </span>
          <span className="text-white font-semibold">{avg}</span>
        </div>
      </div>
    </div>
  );
}

function ThreatItem({ type, level, trend }: any) {
  const levelColors = {
    High: 'text-red-400',
    Medium: 'text-yellow-400',
    Low: 'text-green-400',
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-300">{type}</span>
      <div className="flex items-center gap-2">
        <span className={`font-semibold ${levelColors[level as keyof typeof levelColors]}`}>{level}</span>
        <span className="text-gray-400">{trend}</span>
      </div>
    </div>
  );
}

function MitreBadge({ technique, name, tactic }: any) {
  return (
    <div className="bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-2">
      <div className="text-purple-300 text-xs font-semibold">{technique}</div>
      <div className="text-white font-semibold">{name}</div>
      <div className="text-gray-400 text-xs">{tactic}</div>
    </div>
  );
}

function CausalityNode({ step, action, time }: any) {
  return (
    <div className="bg-white/10 rounded-lg p-4 min-w-[150px] border border-white/20">
      <div className="text-blue-400 text-xs font-semibold mb-1">Step {step}</div>
      <div className="text-white font-semibold mb-1">{action}</div>
      <div className="text-gray-400 text-xs">{time}</div>
    </div>
  );
}

function Arrow() {
  return <div className="text-gray-400 text-2xl">→</div>;
}

function ArtifactRow({ type, value, threat }: any) {
  return (
    <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-sm w-24">{type}</span>
        <span className="text-white font-mono text-sm">{value}</span>
      </div>
      <span className={`px-3 py-1 rounded text-xs font-bold ${
        threat === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
      }`}>
        {threat} Threat
      </span>
    </div>
  );
}
