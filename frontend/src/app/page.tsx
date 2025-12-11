import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🛡️ XSIAM SOC MSSP Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            World-Class Security Operations Center powered by Palo Alto Cortex XSIAM APIs
            with AI-driven incident analysis and automated investigation workflows
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/dashboard/analyst"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Get Started
            </Link>
            <Link
              href="/auth/login"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="🏢"
            title="Multi-Tenant MSSP"
            description="Isolated customer data with global analytics and role-based access control"
          />
          <FeatureCard
            icon="🤖"
            title="AI-Powered Analysis"
            description="Automated incident investigation with root cause analysis and recommendations"
          />
          <FeatureCard
            icon="📊"
            title="Premium Dashboards"
            description="Stunning visualizations for Analysts, Managers, CISOs, and MSSP admins"
          />
          <FeatureCard
            icon="🔍"
            title="Threat Hunting"
            description="IOC search, YARA rules, and advanced threat intelligence integration"
          />
          <FeatureCard
            icon="📧"
            title="Automated Reporting"
            description="Generate and email professional incident reports to customers"
          />
          <FeatureCard
            icon="🎨"
            title="Modern UI/UX"
            description="Glassmorphic design with smooth animations and interactive graphs"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Platform Capabilities</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard number="100+" label="Customers Supported" />
            <StatCard number="24/7" label="Real-Time Monitoring" />
            <StatCard number="< 5min" label="Incident Detection" />
            <StatCard number="95%" label="Automation Rate" />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Built With Modern Technology</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <TechBadge name="Next.js 14" />
            <TechBadge name="TypeScript" />
            <TechBadge name="Node.js" />
            <TechBadge name="PostgreSQL" />
            <TechBadge name="Redis" />
            <TechBadge name="Docker" />
            <TechBadge name="OpenAI" />
            <TechBadge name="Tailwind CSS" />
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
      {name}
    </span>
  );
}
