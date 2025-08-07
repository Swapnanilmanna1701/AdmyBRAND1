"use client";

import { Badge } from "@/components/ui/badge";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Emma Johnson",
    title: "Project Manager",
    company: "Tech Innovators",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The AI Scheduling Assistant has revolutionized the way I manage my time. Meetings are now seamlessly organized without any effort on my part.",
  },
  {
    name: "Michael Smith",
    title: "Sales Executive",
    company: "Global Enterprises",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings.",
  },
  {
    name: "Jane Doe",
    title: "Marketing Director",
    company: "Creative Solutions",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The AI Scheduling Assistant revolutionized my workflow. It's like having a personal assistant who works around the clock!",
  },
  {
    name: "Sophia Lee",
    title: "HR Director",
    company: "People First Corp",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "This app has made scheduling a breeze for our entire department. The AI is incredibly smart and adapts to our needs perfectly.",
  },
  {
    name: "David Kim",
    title: "Operations Manager",
    company: "Logistics Pro",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Efficiency is key in operations, and this AI assistant delivers. It's a valuable resource. The AI helps me optimize my schedule and tasks.",
  },
  {
    name: "Olivia Brown",
    title: "Product Lead",
    company: "Innovate Labs",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "As a product lead, my schedule is chaotic. This AI assistant brings order to the chaos, ensuring I'm always on top of my commitments.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-purple-600 text-white border border-purple-400 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            What Our <span className="text-purple-400">Users</span> are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Hear from satisfied users of the AI Scheduling Assistant
          </p>
        </motion.div>

        {/* Infinite Moving Cards */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="max-w-full"
        />
        <InfiniteMovingCards
          items={testimonials.reverse()} // Reverse for second row to move in opposite direction
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="max-w-full mt-8"
        />
      </div>
    </section>
  );
}
