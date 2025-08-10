"use client";

import { HoverBorderGradientDemo } from "@/components/ui/animated-button";
import Icon from "@/components/ui/appicon";
import { motion } from "framer-motion";
import React, { useState } from "react";

// Define types for the feature data structure
interface Metric {
  label: string;
  value: string;
  unit: string;
}

interface DemoData {
  title: string;
  metrics: Metric[];
}

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  outcomes: string[];
  demoData: DemoData;
  gradient: string;
}

const FeaturesSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const features: Feature[] = [
    {
      id: "automation",
      icon: "Brain",
      title: "Campaign Automation",
      gradient: "from-blue-500 to-indigo-600",
      description:
        "AI automatically creates, launches, and optimizes campaigns across all channels while you focus on strategy.",
      outcomes: [
        "95% reduction in setup time",
        "24/7 automated optimization",
        "Cross-channel synchronization",
      ],
      demoData: {
        title: "Automated Campaign Creation",
        metrics: [
          { label: "Campaigns Created", value: "47", unit: "this month" },
          { label: "Time Saved", value: "156", unit: "hours" },
          { label: "Performance Lift", value: "+234%", unit: "vs manual" },
        ],
      },
    },
    {
      id: "optimization",
      icon: "Target",
      title: "Cross-Channel Optimization",
      gradient: "from-green-500 to-emerald-600",
      description:
        "Unified AI orchestrates your entire marketing ecosystem for maximum impact and consistent messaging.",
      outcomes: [
        "Unified customer journey mapping",
        "Real-time budget reallocation",
        "Consistent brand messaging",
      ],
      demoData: {
        title: "Multi-Channel Performance",
        metrics: [
          { label: "Channels Optimized", value: "8", unit: "platforms" },
          { label: "Budget Efficiency", value: "+67%", unit: "improvement" },
          { label: "Message Consistency", value: "98%", unit: "score" },
        ],
      },
    },
    {
      id: "analytics",
      icon: "BarChart3",
      title: "Predictive Analytics",
      gradient: "from-purple-500 to-violet-600",
      description:
        "Advanced AI forecasts campaign performance and identifies opportunities before your competitors.",
      outcomes: [
        "Predict ROI with 94% accuracy",
        "Identify trends 2 weeks early",
        "Prevent budget waste automatically",
      ],
      demoData: {
        title: "Performance Predictions",
        metrics: [
          { label: "Forecast Accuracy", value: "94%", unit: "precision" },
          { label: "Early Trend Detection", value: "14", unit: "days ahead" },
          {
            label: "Budget Waste Prevented",
            value: "$47K",
            unit: "this quarter",
          },
        ],
      },
    },
    {
      id: "tracking",
      icon: "TrendingUp",
      title: "ROI Tracking",
      gradient: "from-orange-500 to-amber-600",
      description:
        "Complete visibility into every marketing dollar with attribution modeling that shows true campaign impact.",
      outcomes: [
        "Full customer journey tracking",
        "Multi-touch attribution modeling",
        "Real-time ROI calculations",
      ],
      demoData: {
        title: "ROI Attribution Analysis",
        metrics: [
          { label: "Attribution Accuracy", value: "97%", unit: "confidence" },
          { label: "Customer Journey", value: "12.3", unit: "avg touchpoints" },
          { label: "ROI Visibility", value: "100%", unit: "campaigns tracked" },
        ],
      },
    },
    {
      id: "competitor",
      icon: "Eye",
      title: "Competitor Analysis",
      gradient: "from-rose-500 to-pink-600",
      description:
        "AI monitors competitor strategies and automatically adjusts your campaigns to maintain competitive advantage.",
      outcomes: [
        "Real-time competitor monitoring",
        "Automated strategy adjustments",
        "Market opportunity identification",
      ],
      demoData: {
        title: "Competitive Intelligence",
        metrics: [
          { label: "Competitors Tracked", value: "23", unit: "brands" },
          { label: "Strategy Updates", value: "156", unit: "this month" },
          {
            label: "Market Share Gain",
            value: "+12%",
            unit: "vs last quarter",
          },
        ],
      },
    },
    {
      id: "reporting",
      icon: "FileText",
      title: "Performance Reporting",
      gradient: "from-cyan-500 to-sky-600",
      description:
        "Automated reports with actionable insights delivered to stakeholders exactly when they need them.",
      outcomes: [
        "Automated report generation",
        "Customizable stakeholder views",
        "Actionable recommendations",
      ],
      demoData: {
        title: "Automated Reporting System",
        metrics: [
          { label: "Reports Generated", value: "89", unit: "this month" },
          { label: "Time Saved", value: "34", unit: "hours weekly" },
          { label: "Stakeholder Satisfaction", value: "96%", unit: "rating" },
        ],
      },
    },
  ];

  return (
    <section id="features" className="py-0 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <HoverBorderGradientDemo />
          <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Six Core Features That
            <span className="block text-accent">Transform Marketing ROI</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each feature is designed to eliminate manual work while delivering
            measurable results. Hover over any feature to see real performance
            data.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
              className="group glass rounded-3xl p-8 group hover:shadow-[0_10px_15px_rgba(130,129,134,0.7)] transition-all duration-300 transform hover:-translate-y-2 border-0 glass dark-card-bg shadow-[0_5px_15px_rgba(130,129,134,0.3)] border-gray-600"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-success/5 opacity-0"
                animate={{
                  opacity: hoveredFeature === feature.id ? 1 : 0,
                  scale: hoveredFeature === feature.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Particles Effect */}
              {hoveredFeature === feature.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent/30 rounded-full"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: "100%",
                        opacity: 0,
                      }}
                      animate={{
                        y: "-20%",
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Feature Icon */}
              <motion.div
                className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300 relative overflow-hidden"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{
                    scale: hoveredFeature === feature.id ? 1.2 : 1,
                    rotate: hoveredFeature === feature.id ? 10 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    name={feature.icon}
                    size={32}
                    color="var(--color-accent)"
                  />
                </motion.div>

                {/* Ripple Effect */}
                {hoveredFeature === feature.id && (
                  <motion.div
                    className="absolute inset-0 border-2 border-accent/30 rounded-2xl"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Feature Content */}
              <motion.div
                className={`transition-all duration-500 ${
                  hoveredFeature === feature.id
                    ? "opacity-0 absolute pointer-events-none"
                    : "opacity-100"
                }`}
                animate={{
                  x: hoveredFeature === feature.id ? -20 : 0,
                  opacity: hoveredFeature === feature.id ? 0 : 1,
                }}
              >
                <motion.h3
                  className="font-inter font-bold text-xl text-foreground mb-4"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.outcomes.map((outcome, outcomeIndex) => (
                    <motion.li
                      key={outcomeIndex}
                      className="flex items-center space-x-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: outcomeIndex * 0.1 }}
                    >
                      <Icon
                        name="Check"
                        size={16}
                        color="var(--color-success)"
                      />
                      <span className="text-muted-foreground">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Hover Demo Content */}
              <motion.div
                className={`transition-all duration-500 ${
                  hoveredFeature === feature.id
                    ? "opacity-100"
                    : "opacity-0 absolute pointer-events-none"
                }`}
                animate={{
                  x: hoveredFeature === feature.id ? 0 : 20,
                  opacity: hoveredFeature === feature.id ? 1 : 0,
                }}
              >
                <div className="h-full flex flex-col justify-center">
                  <motion.h4
                    className="font-inter font-bold text-lg text-foreground mb-6 text-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: hoveredFeature === feature.id ? 1 : 0.9 }}
                  >
                    {feature.demoData.title}
                  </motion.h4>
                  <div className="space-y-4">
                    {feature.demoData.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        className="bg-accent/5 rounded-lg p-4 shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border-none "
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredFeature === feature.id ? 1 : 0,
                          y: hoveredFeature === feature.id ? 0 : 10,
                        }}
                        transition={{ delay: metricIndex * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className="flex items-center justify-between ">
                          <span className="text-sm font-inter font-medium text-muted-foreground">
                            {metric.label}
                          </span>
                          <div className="text-right">
                            <motion.div
                              className="font-inter font-bold text-lg text-accent"
                              initial={{ scale: 1 }}
                              animate={{
                                scale:
                                  hoveredFeature === feature.id
                                    ? [1, 1.1, 1]
                                    : 1,
                              }}
                              transition={{
                                duration: 0.5,
                                delay: metricIndex * 0.1,
                              }}
                            >
                              {metric.value}
                            </motion.div>
                            <div className="text-xs text-muted-foreground">
                              {metric.unit}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredFeature === feature.id ? 1 : 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="inline-flex items-center space-x-1 text-sm text-accent">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Icon name="MousePointer" size={14} />
                      </motion.div>
                      <span>Live demo data</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Hover Indicator */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  opacity: hoveredFeature === feature.id ? 1 : 0,
                  scale: hoveredFeature === feature.id ? 1 : 0.8,
                  rotate: hoveredFeature === feature.id ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon
                    name="MousePointer"
                    size={16}
                    color="var(--color-accent)"
                  />
                </div>
              </motion.div>

              {/* Border Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow:
                    hoveredFeature === feature.id
                      ? "0 0 30px rgba(var(--color-accent-rgb), 0.3)"
                      : "0 0 0px rgba(var(--color-accent-rgb), 0)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          className="mt-16 bg-card rounded-2xl p-8 shadow-[0_5px_10px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="font-inter font-bold text-2xl text-foreground mb-4">
              Complete Marketing Automation Suite
            </h3>
            <p className="text-muted-foreground">
              All features work together seamlessly to create your AI-powered
              marketing engine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-error/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="X" size={24} color="var(--color-error)" />
              </div>
              <h4 className="font-inter font-bold text-lg text-foreground mb-2">
                Traditional Marketing
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Manual campaign setup</li>
                <li>Siloed channel management</li>
                <li>Reactive optimization</li>
                <li>Limited performance visibility</li>
                <li>Time-consuming reporting</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="AlertTriangle"
                  size={24}
                  color="var(--color-warning)"
                />
              </div>
              <h4 className="font-inter font-bold text-lg text-foreground mb-2">
                Basic Automation Tools
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Single-channel automation</li>
                <li>Rule-based optimization</li>
                <li>Basic reporting features</li>
                <li>Limited integration options</li>
                <li>Manual strategy adjustments</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={24} color="var(--color-success)" />
              </div>
              <h4 className="font-inter font-bold text-lg text-foreground mb-2">
                ADmyBRAND AI Suite
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Fully automated campaign lifecycle</li>
                <li>Cross-channel AI optimization</li>
                <li>Predictive performance analytics</li>
                <li>Complete ROI attribution</li>
                <li>Intelligent competitor monitoring</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
