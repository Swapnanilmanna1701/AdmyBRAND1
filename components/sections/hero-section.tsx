"use client";

import { AuroraText } from "@/components/ui/aurora-text";
import { AnimatedGradientTextDemo } from "@/components/ui/banner-button";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  speed: number;
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden"
    >
      {/* Animated Background with Grid */}
      <div className="absolute inset-0">
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white-50 dark:from-gray-900 dark:via-black-900/20 dark:to-"></div>

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>

        {/* Secondary Grid Layer for Depth */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
            animation: "gridMove 30s linear infinite reverse",
          }}
        ></div>

        {/* Animated Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Additional Animated Elements */}
        <div
          className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Subtle Animated Rays */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-300/50 to-transparent transform -translate-x-1/2"
            style={{ animation: "fadeInOut 8s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent transform -translate-y-1/2"
            style={{
              animation: "fadeInOut 10s ease-in-out infinite",
              animationDelay: "2s",
            }}
          ></div>
        </div>

        {/* Mouse-responsive Grid Distortion */}
        <div
          className="absolute inset-0 opacity-15 dark:opacity-8 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(59, 130, 246, 0.4) 0%, 
                rgba(59, 130, 246, 0.2) 30%, 
                transparent 70%)
            `,
            transition: "background-image 0.3s ease",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className=" z-10 max-w-1xl text-center">
        {/* Futuristic Badge */}
        <div className="mb-5">
          <AnimatedGradientTextDemo />
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Transform
            </span>
          </span>
          <span className="block mb-4 text-gray-900 dark:text-white">
            Your Marketing with
          </span>
          <span className="block">
            <AuroraText>AdMyBrand</AuroraText>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Harness the power of artificial intelligence to automate campaigns,
          analyze performance, and scale your brand
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-700 bg-clip-text text-transparent font-semibold">
            {" "}
            10x faster
          </span>
          than traditional methods.
        </p>

        {/* Interactive Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              value: "300%",
              label: "ROI Increase",
              icon: TrendingUp,
              color: "from-cyan-500 to-blue-600",
            },
            {
              value: "50K+",
              label: "Active Users",
              icon: Users,
              color: "from-purple-500 to-pink-600 ",
            },
            {
              value: "24/7",
              label: "AI Automation",
              icon: Zap,
              color: "from-green-500 to-emerald-600",
            },
            {
              value: "99.9%",
              label: "Uptime",
              icon: Target,
              color: "from-red-500 to-orange-600",
            },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="glass rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 dark:border-gray-700/20">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            size="lg"
            className="group relative px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <Sparkles className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Start Free Trial
            <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <Button
            size="lg"
            className="group px-8 py-4 text-lg font-semibold rounded-2xl glass border-2 border-blue-500/30 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-xl"
          >
            <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo
          </Button>
        </div>

        {/* Trust Indicators */}

        {/* Scroll Indicator */}
      </div>
    </section>
  );
}
