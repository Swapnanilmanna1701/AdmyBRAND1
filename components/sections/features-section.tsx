import { Card, CardContent } from "@/components/ui/card"
import { Brain, Workflow, BarChart3, Target, MessageSquare, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Advanced machine learning algorithms analyze your data to provide actionable insights and predictions.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Set up complex marketing workflows that run automatically, saving time and increasing efficiency.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor your campaigns in real-time with comprehensive analytics and performance metrics.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach the right audience with AI-driven targeting and personalization capabilities.",
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Messaging",
      description: "Deliver consistent messaging across all channels with intelligent content optimization.",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and advanced data protection measures.",
      gradient: "from-amber-500 to-orange-600",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-gray-900 dark:text-white">Built for Growth</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform your marketing strategy and achieve unprecedented growth with AI-powered
            automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 glass dark-card-bg"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Transform Your Marketing?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of marketing teams who have already revolutionized their growth strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your Free Trial
              </button>
              <button className="px-8 py-3 glass-button rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
