import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      image: "/professional-woman-headshot.png",
      content:
        "ADmyBRAND transformed our marketing strategy completely. We've seen a 300% increase in qualified leads and our ROI has never been better. The AI insights are incredibly accurate.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Growth Manager",
      company: "StartupXYZ",
      image: "/professional-man-headshot.png",
      content:
        "The automation capabilities are game-changing. What used to take our team hours now happens automatically. We've scaled our campaigns 10x without increasing our team size.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Manager",
      company: "E-commerce Plus",
      image: "/professional-woman-headshot.png",
      content:
        "The real-time analytics and AI-powered recommendations have helped us optimize our campaigns like never before. Our conversion rates improved by 150% in just 3 months.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">What Our</span>
            <span className="gradient-text"> Customers Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of marketing professionals who have transformed their results with ADmyBRAND.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 glass dark-card-bg"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mr-1"
                    >
                      <Star className="h-3 w-3 text-white fill-current" />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 glass rounded-3xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">300%</div>
              <div className="text-gray-600 dark:text-gray-400">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">AI-Powered Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
