"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Mail, Search, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface PerformanceMetric {
  label: string;
  current: string | number;
  optimized: string | number;
  change?: string;
  changeColor?: string;
}

interface ChannelData {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  metrics: {
    "Click-Through Rate": PerformanceMetric;
    "Cost Per Click": PerformanceMetric;
    "Return On Ad Spend": PerformanceMetric;
  };
}

const channels: ChannelData[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    description: "Search & Display Campaigns",
    icon: Search,
    metrics: {
      "Click-Through Rate": {
        label: "Click-Through Rate",
        current: "0.9%",
        optimized: "2.1%",
        change: "+133%",
        changeColor: "text-green-500",
      },
      "Cost Per Click": {
        label: "Cost Per Click",
        current: "$5.20",
        optimized: "$3.15",
        change: "-39%",
        changeColor: "text-green-500",
      },
      "Return On Ad Spend": {
        label: "Return On Ad Spend",
        current: "2.1x",
        optimized: "4.7x",
        change: "+124%",
        changeColor: "text-green-500",
      },
    },
  },
  {
    id: "facebook-ads",
    name: "Facebook Ads",
    description: "Social Media Advertising",
    icon: Users,
    metrics: {
      "Click-Through Rate": {
        label: "Click-Through Rate",
        current: "1.2%",
        optimized: "3.5%",
        change: "+192%",
        changeColor: "text-green-500",
      },
      "Cost Per Click": {
        label: "Cost Per Click",
        current: "$3.80",
        optimized: "$2.10",
        change: "-45%",
        changeColor: "text-green-500",
      },
      "Return On Ad Spend": {
        label: "Return On Ad Spend",
        current: "1.8x",
        optimized: "5.2x",
        change: "+189%",
        changeColor: "text-green-500",
      },
    },
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    description: "Automated Email Campaigns",
    icon: Mail,
    metrics: {
      "Click-Through Rate": {
        label: "Click-Through Rate",
        current: "15%",
        optimized: "28%",
        change: "+87%",
        changeColor: "text-green-500",
      },
      "Cost Per Click": {
        label: "Cost Per Click",
        current: "$0.50",
        optimized: "$0.25",
        change: "-50%",
        changeColor: "text-green-500",
      },
      "Return On Ad Spend": {
        label: "Return On Ad Spend",
        current: "3.0x",
        optimized: "6.5x",
        change: "+117%",
        changeColor: "text-green-500",
      },
    },
  },
  {
    id: "linkedin-ads",
    name: "LinkedIn Ads",
    description: "B2B Professional Network",
    icon: Briefcase,
    metrics: {
      "Click-Through Rate": {
        label: "Click-Through Rate",
        current: "0.7%",
        optimized: "1.8%",
        change: "+157%",
        changeColor: "text-green-500",
      },
      "Cost Per Click": {
        label: "Cost Per Click",
        current: "$7.50",
        optimized: "$4.20",
        change: "-44%",
        changeColor: "text-green-500",
      },
      "Return On Ad Spend": {
        label: "Return On Ad Spend",
        current: "1.5x",
        optimized: "3.8x",
        change: "+153%",
        changeColor: "text-green-500",
      },
    },
  },
];

export function PerformanceOptimizationSection() {
  const [selectedChannelId, setSelectedChannelId] = useState(channels[0].id);
  const [currentMetrics, setCurrentMetrics] = useState(channels[0].metrics);
  const [optimizedMetrics, setOptimizedMetrics] = useState(channels[0].metrics);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    const channel = channels.find((c) => c.id === selectedChannelId);
    if (channel) {
      setCurrentMetrics(channel.metrics);
      setOptimizedMetrics(channel.metrics); // Reset optimized to current when channel changes
    }
  }, [selectedChannelId]);

  const handleRunOptimization = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      const channel = channels.find((c) => c.id === selectedChannelId);
      if (channel) {
        setOptimizedMetrics(channel.metrics);
      }
      setIsOptimizing(false);
    }, 1500); // Simulate AI optimization time
  };

  const selectedChannel = channels.find((c) => c.id === selectedChannelId);

  return (
    <section id="performance" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Watch AI Transform Your{" "}
            <span className="text-blue-600">Marketing Performance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Select your marketing channel below and see how our AI optimization
            delivers measurable improvements in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-card rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-left">
            Choose Your Marketing Channel
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {channels.map((channel) => (
              <Card
                key={channel.id}
                className={cn(
                  "cursor-pointer transition-all duration-200",
                  selectedChannelId === channel.id
                    ? "border-2 border-blue-600 shadow-md dark:border-blue-500"
                    : "border border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-600"
                )}
                onClick={() => setSelectedChannelId(channel.id)}
                hover={false} // Disable default card hover
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <channel.icon className="w-8 h-8 text-gray-600 mb-3 dark:text-gray-300" />
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {channel.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {channel.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Current Performance */}
            <div className="bg-white dark:bg-background rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="mr-2 text-red-500"
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
                Current Performance
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Manual optimization results
              </p>
              <div className="space-y-4">
                {Object.values(currentMetrics).map((metric) => (
                  <div
                    key={metric.label}
                    className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <span className="text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {metric.current}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Optimized Performance */}
            <div className="bg-white dark:bg-background rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                AI Optimized
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Automated performance results
              </p>
              <div className="space-y-4">
                {Object.values(optimizedMetrics).map((metric) => (
                  <div
                    key={metric.label}
                    className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <span className="text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={metric.optimized} // Key change to trigger animation on value update
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "font-semibold",
                          metric.changeColor || "text-gray-900 dark:text-white"
                        )}
                      >
                        {metric.optimized}
                        {metric.change && (
                          <span
                            className={cn("ml-2 text-sm", metric.changeColor)}
                          >
                            {metric.change}
                          </span>
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleRunOptimization}
                disabled={isOptimizing}
                className="w-full mt-8 py-3 rounded-lg font-semibold text-lg bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isOptimizing ? "Optimizing..." : "Run AI Optimization"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
