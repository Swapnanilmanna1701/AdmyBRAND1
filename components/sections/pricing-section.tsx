"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Crown, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 23,
      description: "Perfect for small businesses and startups",
      icon: Rocket,
      gradient: "from-blue-500 to-indigo-600",
      features: [
        "Up to 5,000 contacts",
        "Basic AI insights",
        "Email automation",
        "Social media scheduling",
        "Basic analytics",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      monthlyPrice: 79,
      annualPrice: 63,
      description: "Ideal for growing marketing teams",
      icon: Crown,
      gradient: "from-purple-500 to-pink-600",
      features: [
        "Up to 25,000 contacts",
        "Advanced AI insights",
        "Multi-channel automation",
        "A/B testing",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
      annualPrice: 159,
      description: "For large organizations and agencies",
      icon: Sparkles,
      gradient: "from-amber-500 to-orange-600",
      features: [
        "Unlimited contacts",
        "Full AI suite",
        "Custom workflows",
        "White-label options",
        "Advanced security",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  const calculateSavings = (monthly: number, annual: number) => {
    const monthlyCost = monthly * 12;
    const annualCost = annual * 12;
    const savings = monthlyCost - annualCost;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { savings, percentage };
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Simple,</span>
            <span className="gradient-text"> Transparent Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our
            core AI features with no hidden fees.
          </p>

          {/* Pricing Calculator Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="glass rounded-2xl p-0.2 flex items-center space-x-4">
              <div className="flex items-center"></div>

              <div className="flex items-center bg-white/20 dark:bg-gray-800/20 rounded-xl p-1">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    !isAnnual
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                    isAnnual
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  Annual
                </button>
              </div>
            </div>
          </div>

          {/* Savings Calculator Display */}
          {isAnnual && (
            <div className="glass rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <h3 className="text-lg font-semibold mb-4 gradient-text">
                Annual Savings Calculator
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {plans.map((plan) => {
                  const { savings, percentage } = calculateSavings(
                    plan.monthlyPrice,
                    plan.annualPrice
                  );
                  return (
                    <div key={plan.name} className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {plan.name}
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        ${savings}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        saved per year ({percentage}% off)
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const currentPrice = isAnnual
              ? plan.annualPrice
              : plan.monthlyPrice;
            const originalPrice = isAnnual ? plan.monthlyPrice : null;
            const { savings, percentage } = calculateSavings(
              plan.monthlyPrice,
              plan.annualPrice
            );

            return (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 glass dark-card-bg ${
                  plan.popular
                    ? "ring-2 ring-purple-600 ring-opacity-50 scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {isAnnual && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-green-500 text-white px-3 py-1">
                      Save ${savings}/year
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold gradient-text">
                      ${currentPrice}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                      /month
                    </span>
                  </div>

                  {/* Original Price and Savings */}
                  {isAnnual && (
                    <div className="text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        Was ${originalPrice}/month
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        {percentage}% off • Billed annually ($
                        {currentPrice * 12}/year)
                      </div>
                    </div>
                  )}

                  {!isAnnual && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Billed monthly • ${currentPrice * 12}/year
                    </div>
                  )}
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-xl hover:shadow-2xl"
                        : "glass-button hover:shadow-lg"
                    } transition-all duration-300 transform hover:scale-105`}
                    size="lg"
                  >
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                  </Button>

                  {/* Price Breakdown */}
                  <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
                    {isAnnual ? (
                      <div>
                        <div>Total: ${currentPrice * 12}/year</div>
                        <div>You save: ${savings} vs monthly billing</div>
                      </div>
                    ) : (
                      <div>Switch to annual and save ${savings}/year</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pricing Calculator Summary */}
        <div className="mt-16 glass rounded-3xl p-8 max-w-4xl mx-auto group hover:shadow-[0_10px_20px_rgba(130,129,134,0.3)] transition-all duration-300 transform hover:-translate-y-2 border-0 glass dark-card-bg shadow-[0_5px_15px_rgba(130,129,134,0.3)] border-gray-600">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold gradient-text dark:gradient-text mb-2">
              Pricing Calculator Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Compare your savings with our {isAnnual ? "annual" : "monthly"}{" "}
              billing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {isAnnual ? "Annual Billing" : "Monthly Billing"}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                {isAnnual ? "Pay once per year" : "Pay every month"}
              </div>
              <div className="space-y-2">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {plan.name}:
                    </span>
                    <span className="font-semibold">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}/month
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {isAnnual ? "Your Savings" : "Potential Savings"}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                {isAnnual ? "With annual billing" : "Switch to annual billing"}
              </div>
              <div className="space-y-2">
                {plans.map((plan) => {
                  const { savings, percentage } = calculateSavings(
                    plan.monthlyPrice,
                    plan.annualPrice
                  );
                  return (
                    <div
                      key={plan.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {plan.name}:
                      </span>
                      <span className="font-semibold text-green-600">
                        ${savings}/year ({percentage}% off)
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
            Cancel anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ Free migration support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
