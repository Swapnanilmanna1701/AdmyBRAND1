import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Mail, Phone } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "How does the AI-powered marketing automation work?",
      answer:
        "Our AI analyzes your customer data, behavior patterns, and campaign performance to automatically optimize your marketing efforts. It creates personalized content, determines the best send times, and adjusts targeting parameters in real-time to maximize engagement and conversions.",
    },
    {
      question: "Can I integrate ADmyBRAND with my existing tools?",
      answer:
        "Yes! ADmyBRAND integrates with over 100+ popular marketing tools including CRM systems, email platforms, social media networks, and analytics tools. Our API also allows for custom integrations to fit your specific workflow needs.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support including 24/7 chat support, email assistance, phone support for enterprise customers, detailed documentation, video tutorials, and dedicated customer success managers for larger accounts.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial period without any charges.",
    },
    {
      question: "How secure is my data with ADmyBRAND?",
      answer:
        "We take security seriously with SOC 2 Type II compliance, end-to-end encryption, regular security audits, and GDPR compliance. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee.",
    },
    {
      question: "Can I customize the AI recommendations?",
      answer:
        "While our AI provides intelligent recommendations out of the box, you can customize parameters, set business rules, and train the AI based on your specific goals and preferences to align with your brand strategy.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Frequently Asked</span>
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about ADmyBRAND and how it can transform your marketing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass rounded-3xl p-8 mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0">
                <AccordionTrigger className="text-left hover:no-underline py-6 px-6 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Still have questions?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Our team is here to help you get started with ADmyBRAND.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass border-0 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Live Chat</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get instant answers from our support team</p>
              </CardContent>
            </Card>

            <Card className="glass border-0 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Email Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Detailed help via email within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="glass border-0 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Phone Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Direct phone support for enterprise customers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
