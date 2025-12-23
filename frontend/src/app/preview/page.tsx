'use client';

import { useState } from 'react';

export default function PreviewPage() {
  const [activeTab, setActiveTab] = useState('mssp');
  const [selectedCustomer, setSelectedCustomer] = useState('all');

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#0f1419] border-r border-gray-800">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <span className="text-cyan-400 text-xl">🛡️</span>
            </div>
            <span className="text-white font-bold text-lg">XSIAM SOC</span>
          </div>

          <select 
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
            className="w-full bg-[#1a2332] text-white px-4 py-2 rounded-lg border border-gray-700 mb-6"
          >
            <option value="all">All Customers</option>
            <option value="altisec">Altisec Technologies</option>
            <option value="techstart">TechStart Innovations</option>
          </select>

          <nav className="space-y-2">
            <div className="text-gray-500 text-xs font-semibold uppercase mb-3">MSSP Overview</div>
            <button
              onClick={() => setActiveTab('mssp')}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'mssp' ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <span>📊</span>
              <span>MSSP Dashboard</span>
            </button>

            <div className="text-gray-500 text-xs font-semibold uppercase mb-3 mt-6">Security Operations</div>
            <button
              onClick={() => setActiveTab('analyst')}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'analyst' ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <span>🔍</span>
              <span>Analyst Dashboard</span>
              {activeTab === 'analyst' && <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>}
            </button>
            <button
              onClick={() => setActiveTab('incident')}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'incident' ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <span>⚠️</span>
              <span>Incident Analysis</span>
            </button>

            <div className="text-gray-500 text-xs font-semibold uppercase mb-3 mt-6">Executive Dashboard</div>
            <button
              onClick={() => setActiveTab('ciso')}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'ciso' ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <span>📈</span>
              <span>CISO Dashboard</span>
            </button>

            <div className="text-gray-500 text-xs font-semibold uppercase mb-3 mt-6">System Configuration</div>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-800">
              <span>👥</span>
              <span>Customer Onboarding</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-[#0f1419] border-b border-gray-800 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">
                {activeTab === 'mssp' && 'MSSP Super Dashboard'}
                {activeTab === 'analyst' && 'Analyst Dashboard'}
                {activeTab === 'incident' && 'Incident Analysis'}
                {activeTab === 'ciso' && 'CISO Dashboard'}
              </h1>
              <p className="text-gray-400 text-sm">
                {activeTab === 'mssp' && 'Centralized multi-tenant security operations management and monitoring'}
                {activeTab === 'analyst' && 'Real-time incident investigation and response'}
                {activeTab === 'incident' && 'AI-powered incident analysis and recommendations'}
                {activeTab === 'ciso' && 'Executive security posture and risk overview'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                🔄 Refresh
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-white text-sm">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {activeTab === 'mssp' && <MSSPDashboard />}
          {activeTab === 'analyst' && <AnalystDashboard />}
          {activeTab === 'incident' && <IncidentDetail />}
          {activeTab === 'ciso' && <CISODashboard />}
        </div>
      </div>
    </div>
  );
}

// MSSP Dashboard with Enhanced Customer Cards
function MSSPDashboard() {
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          icon="🛡️"
          title="Total Customers"
          value="12"
          change="+8.3%"
          trend="up"
          color="cyan"
        />
        <StatCard
          icon="⚠️"
          title="Active Incidents"
          value="247"
          change="-12.5%"
          trend="down"
          color="red"
        />
        <StatCard
          icon="⚡"
          title="Automation Success"
          value="87%"
          change="+5.2%"
          trend="up"
          color="green"
        />
        <StatCard
          icon="⏱️"
          title="Avg MTTR"
          value="2.4h"
          change="+15.8%"
          trend="up"
          color="orange"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800">
        <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-4">
          <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2">
            <span>👥</span>
            <span>Onboard Customer</span>
          </button>
          <button className="px-6 py-3 bg-[#0f1419] text-gray-300 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 border border-gray-700">
            <span>⚙️</span>
            <span>Configure API</span>
          </button>
          <button className="px-6 py-3 bg-[#0f1419] text-gray-300 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 border border-gray-700">
            <span>⚠️</span>
            <span>View All Incidents</span>
          </button>
          <button className="px-6 py-3 bg-[#0f1419] text-gray-300 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 border border-gray-700">
            <span>📊</span>
            <span>CISO Dashboard</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search customers..."
          className="flex-1 bg-[#1a2332] text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none"
        />
        <select className="bg-[#1a2332] text-white px-4 py-2 rounded-lg border border-gray-700">
          <option>Incidents (High to Low)</option>
          <option>Incidents (Low to High)</option>
          <option>Alphabetical</option>
        </select>
        <select className="bg-[#1a2332] text-white px-4 py-2 rounded-lg border border-gray-700">
          <option>All Status</option>
          <option>Healthy</option>
          <option>Warning</option>
          <option>Critical</option>
        </select>
        <select className="bg-[#1a2332] text-white px-4 py-2 rounded-lg border border-gray-700">
          <option>All Severities</option>
          <option>Critical Only</option>
          <option>High Only</option>
        </select>
      </div>

      {/* Live Monitoring Status */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <span>⏰</span>
          <span>Last updated: 12:12:49 PM</span>
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Live monitoring active</span>
        </div>
      </div>

      {/* Customer Cards Grid */}
      <div className="grid grid-cols-3 gap-6">
        <EnhancedCustomerCard
          name="TechStart Innovations"
          industry="Technology Startup"
          logo="🚀"
          totalIncidents={52}
          critical={5}
          high={15}
          medium={20}
          low={12}
          automation={78}
          status="warning"
          lastSync="15 mins ago"
        />
        <EnhancedCustomerCard
          name="Telecommunications Plus"
          industry="Telecommunications"
          logo="📡"
          totalIncidents={48}
          critical={6}
          high={14}
          medium={18}
          low={10}
          automation={84}
          status="error"
          lastSync="25 mins ago"
        />
        <EnhancedCustomerCard
          name="Altisec Technologies Pvt Ltd"
          industry="Cybersecurity Services"
          logo="🛡️"
          totalIncidents={45}
          critical={3}
          high={12}
          medium={18}
          low={12}
          automation={92}
          status="healthy"
          lastSync="2 mins ago"
        />
        <EnhancedCustomerCard
          name="Media Streaming Corp"
          industry="Entertainment & Media"
          logo="🎬"
          totalIncidents={44}
          critical={4}
          high={13}
          medium={17}
          low={10}
          automation={79}
          status="healthy"
          lastSync="7 mins ago"
        />
        <EnhancedCustomerCard
          name="Retail Solutions Group"
          industry="E-commerce & Retail"
          logo="🛒"
          totalIncidents={41}
          critical={4}
          high={11}
          medium={16}
          low={10}
          automation={82}
          status="healthy"
          lastSync="8 mins ago"
        />
        <EnhancedCustomerCard
          name="Global Finance Corporation"
          industry="Financial Services"
          logo="💰"
          totalIncidents={38}
          critical={2}
          high={10}
          medium={16}
          low={10}
          automation={85}
          status="healthy"
          lastSync="5 mins ago"
        />
      </div>

      {/* MITRE ATT&CK Heatmap */}
      <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-4">🎯 MITRE ATT&CK Global Coverage</h3>
        <div className="grid grid-cols-14 gap-2">
          {Array.from({ length: 70 }).map((_, i) => (
            <div
              key={i}
              className={`h-12 rounded cursor-pointer transition-all hover:scale-110 ${
                i % 5 === 0
                  ? 'bg-red-500/80 hover:bg-red-500'
                  : i % 3 === 0
                  ? 'bg-orange-500/60 hover:bg-orange-500'
                  : i % 2 === 0
                  ? 'bg-yellow-500/40 hover:bg-yellow-500'
                  : 'bg-green-500/20 hover:bg-green-500'
              }`}
              title={`Technique T${1000 + i}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500/80 rounded"></div>
            <span className="text-gray-400">High Frequency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500/60 rounded"></div>
            <span className="text-gray-400">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500/40 rounded"></div>
            <span className="text-gray-400">Low</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500/20 rounded"></div>
            <span className="text-gray-400">Minimal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Customer Card Component
function EnhancedCustomerCard({ name, industry, logo, totalIncidents, critical, high, medium, low, automation, status, lastSync }: any) {
  const statusConfig = {
    healthy: { color: 'text-green-400', bg: 'bg-green-500/10', dot: 'bg-green-400', label: 'Healthy' },
    warning: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', dot: 'bg-yellow-400', label: 'Warning' },
    error: { color: 'text-red-400', bg: 'bg-red-500/10', dot: 'bg-red-400', label: 'Error' },
  };

  const config = statusConfig[status as keyof typeof statusConfig];
  const total = critical + high + medium + low;

  return (
    <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
            {logo}
          </div>
          <div>
            <h3 className="text-white font-semibold">{name}</h3>
            <p className="text-gray-400 text-sm">{industry}</p>
          </div>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${config.bg}`}>
          <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
          <span className={`text-xs font-semibold ${config.color}`}>{config.label}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
            <span>⚠️</span>
            <span>Total Incidents</span>
          </div>
          <div className="text-2xl font-bold text-white">{totalIncidents}</div>
        </div>
        <div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
            <span>⚡</span>
            <span>Automation</span>
          </div>
          <div className="text-2xl font-bold text-cyan-400">{automation}%</div>
        </div>
      </div>

      {/* Severity Distribution */}
      <div className="mb-4">
        <div className="text-gray-400 text-sm mb-2">Severity Distribution</div>
        <div className="flex gap-1 h-2 rounded-full overflow-hidden mb-2">
          <div className="bg-red-500" style={{ width: `${(critical / total) * 100}%` }}></div>
          <div className="bg-orange-500" style={{ width: `${(high / total) * 100}%` }}></div>
          <div className="bg-cyan-500" style={{ width: `${(medium / total) * 100}%` }}></div>
          <div className="bg-green-500" style={{ width: `${(low / total) * 100}%` }}></div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-gray-400">Critical: {critical}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-400">High: {high}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-gray-400">Medium: {medium}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-400">Low: {low}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <span>⏰</span>
          <span>Last sync: {lastSync}</span>
        </div>
        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1">
          <span>View Details</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ icon, title, value, change, trend, color }: any) {
  const colorClasses = {
    cyan: 'text-cyan-400',
    red: 'text-red-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
  };

  return (
    <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800">
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <div className={`flex items-center gap-1 text-sm ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
          <span>{trend === 'up' ? '↗' : '↘'}</span>
          <span>{change}</span>
        </div>
      </div>
      <div className="text-gray-400 text-sm mb-2">{title}</div>
      <div className={`text-3xl font-bold ${colorClasses[color as keyof typeof colorClasses]}`}>{value}</div>
    </div>
  );
}

// Analyst Dashboard
function AnalystDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <StatCard icon="📋" title="My Queue" value="8" change="+2 new" trend="up" color="cyan" />
        <StatCard icon="⏳" title="In Progress" value="3" change="Avg 2.5h" trend="up" color="orange" />
        <StatCard icon="✅" title="Resolved Today" value="12" change="+4 vs yesterday" trend="up" color="green" />
        <StatCard icon="⬆️" title="Escalated" value="2" change="Needs review" trend="up" color="red" />
      </div>

      <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">🚨 Incident Queue</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">Fetch Now</button>
            <button className="px-4 py-2 bg-[#0f1419] text-gray-300 rounded-lg border border-gray-700">Filter</button>
          </div>
        </div>
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
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <IntegrationCard name="XSIAM API" status="healthy" latency="45ms" />
        <IntegrationCard name="Threat Intel" status="healthy" latency="120ms" />
        <IntegrationCard name="Email Gateway" status="degraded" latency="890ms" />
      </div>
    </div>
  );
}

function IncidentRow({ id, title, severity, time, status }: any) {
  const severityColors = {
    critical: 'bg-red-500/20 text-red-400 border-red-500/50',
    high: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
    medium: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50',
    low: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  };

  return (
    <div className="bg-[#0f1419] rounded-lg p-4 border border-gray-800 hover:border-cyan-500/50 transition-all cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-400 text-sm font-mono">{id}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${severityColors[severity as keyof typeof severityColors]}`}>
              {severity.toUpperCase()}
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold border border-blue-500/50">
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
    <div className="bg-[#1a2332] rounded-xl p-4 border border-gray-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-semibold">{name}</span>
        <div className={`w-2 h-2 rounded-full ${status === 'healthy' ? 'bg-green-400' : 'bg-yellow-400'}`} />
      </div>
      <div className="text-gray-400 text-sm">Latency: {latency}</div>
    </div>
  );
}

// Incident Detail
function IncidentDetail() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">🚨 Incident Details</h2>
          <p className="text-gray-400">INC-2024-001 • Suspicious PowerShell Execution</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">
            🤖 Analyze with AI
          </button>
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold">
            📧 Send Report
          </button>
        </div>
      </div>

      <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-gray-400 text-sm mb-1">Severity</div>
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">CRITICAL</span>
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

      <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-4">🤖 AI-Powered Analysis</h3>
        <div className="space-y-4">
          <div>
            <div className="text-cyan-400 font-semibold mb-2">Executive Summary</div>
            <p className="text-gray-300 leading-relaxed">
              Detected malicious PowerShell execution attempting to download and execute a remote payload. The activity originated from a compromised user account and shows characteristics of a fileless malware attack.
            </p>
          </div>
          <div>
            <div className="text-cyan-400 font-semibold mb-2">Root Cause</div>
            <p className="text-gray-300 leading-relaxed">
              Initial access gained through phishing email with malicious attachment. User credentials harvested and used to execute PowerShell commands remotely.
            </p>
          </div>
          <div>
            <div className="text-cyan-400 font-semibold mb-2">Recommended Actions</div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Immediately isolate affected workstation</li>
              <li>Reset user credentials and enforce MFA</li>
              <li>Scan network for similar PowerShell patterns</li>
            </ul>
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
      <div className="grid grid-cols-4 gap-6">
        <StatCard icon="🛡️" title="Security Posture" value="87/100" change="+5 points" trend="up" color="green" />
        <StatCard icon="⚠️" title="Risk Exposure" value="Medium" change="Trending ↓" trend="down" color="orange" />
        <StatCard icon="💰" title="Automation ROI" value="$2.4M" change="+$400K saved" trend="up" color="cyan" />
        <StatCard icon="✓" title="Compliance" value="99.2%" change="All frameworks" trend="up" color="green" />
      </div>

      <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-4">📋 Executive Summary</h3>
        <div className="space-y-4 text-gray-300">
          <p className="leading-relaxed">
            <strong className="text-white">Overall Status:</strong> Security operations are performing well with 94% automation rate and improved response times. No critical breaches detected this quarter.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Key Achievements:</strong> Successfully mitigated 156 incidents with zero business impact. MTTR reduced by 28% through AI-powered analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
