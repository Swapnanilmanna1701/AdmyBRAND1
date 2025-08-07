"use client";

import { Menu, Monitor, Moon, Play, Sparkles, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["features", "pricing", "testimonials", "faq"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features", id: "features" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ];

  const themeOptions = [
    { name: "Light", value: "light", icon: Sun },
    { name: "Dark", value: "dark", icon: Moon },
    { name: "System", value: "system", icon: Monitor },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div
          className={`
          px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-xl border
          ${
            isScrolled
              ? "glass-nav shadow-2xl border-white/30 dark:border-gray-700/30"
              : "glass-nav border-white/20 dark:border-gray-800/20 shadow-xl"
          }
        `}
        >
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <span className="font-bold text-lg gradient-text">ADmyBRAND</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group
                    ${
                      activeSection === item.id
                        ? "text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {/* Gradient hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                  {/* Glass effect for active state with gradient */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-full border border-blue-500/30 dark:border-purple-500/30 shadow-lg -z-10"></div>
                  )}

                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Theme Toggle */}

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:text-white">
                {/* Gradient hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex items-center">
                  <Play className="h-4 w-4 mr-2" />
                  Demo
                </div>
              </button>

              <button className="relative px-6 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-3 rounded-full glass-nav shadow-xl transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:text-white"
        >
          {/* Gradient hover background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed top-20 right-6 z-40 lg:hidden">
          <div className="glass-nav rounded-3xl p-6 w-64 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 group relative
                    ${
                      activeSection === item.id
                        ? "text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:text-white"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {/* Gradient hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Glass effect for active state with gradient */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm rounded-2xl border border-blue-500/30 dark:border-purple-500/30 shadow-lg"></div>
                  )}

                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}

              <div className="border-t border-gray-200/20 dark:border-gray-700/20 pt-4 mt-6">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4">
                    Theme
                  </p>
                  {themeOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className={`
                          w-full px-4 py-3 text-left text-sm flex items-center space-x-3 rounded-2xl transition-all duration-300 group relative
                          ${
                            theme === option.value
                              ? "text-white shadow-lg"
                              : "text-gray-700 dark:text-gray-300 hover:text-white"
                          }
                        `}
                      >
                        {/* Gradient hover background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Glass effect for active state with gradient */}
                        {theme === option.value && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm rounded-2xl border border-blue-500/30 dark:border-purple-500/30 shadow-lg"></div>
                        )}

                        <div className="relative z-10 flex items-center space-x-3">
                          <IconComponent className="h-4 w-4" />
                          <span>{option.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-gray-200/20 dark:border-gray-700/20 pt-4 space-y-3">
                <button className="relative w-full px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:text-white">
                  {/* Gradient hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    Demo
                  </div>
                </button>

                <button className="w-full px-4 py-3 text-sm font-medium rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get Started
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
