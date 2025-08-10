"use client";
import Icon from "@/components/ui/appicon";
import Select, { SelectOption } from "@/components/ui/select";
import { icons } from "lucide-react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../ui/button1";
import Input from "../ui/input1";

// Define types for the component's state and props
interface FormDataState {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  companySize: string;
  monthlySpend: string;
  phone: string;
  message: string;
  marketingGoals: string[];
}

type FormErrors = {
  [K in keyof FormDataState]?: string;
};

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    companySize: "",
    monthlySpend: "",
    phone: "",
    message: "",
    marketingGoals: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<CountdownState | null>(null);

  const [betaSpots] = useState<number>(47);

  const companySizeOptions: SelectOption[] = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-1000", label: "201-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  const monthlySpendOptions: SelectOption[] = [
    { value: "under-5k", label: "Under $5,000" },
    { value: "5k-25k", label: "$5,000 - $25,000" },
    { value: "25k-100k", label: "$25,000 - $100,000" },
    { value: "100k-500k", label: "$100,000 - $500,000" },
    { value: "500k+", label: "$500,000+" },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.companySize)
      newErrors.companySize = "Please select company size";
    if (!formData.monthlySpend)
      newErrors.monthlySpend = "Please select monthly ad spend";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof FormDataState,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    if (field === "email" && typeof value === "string" && value.includes("@")) {
      const domain = value.split("@")[1];
      if (domain === "microsoft.com") {
        setFormData((prev) => ({
          ...prev,
          company: "Microsoft",
          companySize: "1000+",
        }));
      } else if (domain === "salesforce.com") {
        setFormData((prev) => ({
          ...prev,
          company: "Salesforce",
          companySize: "1000+",
        }));
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  useEffect(() => {
    const endTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown(null);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (showSuccess) {
    return (
      <section
        id="contact"
        className="py-20 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 border border-gray-100 dark:border-gray-800 shadow-[0_20px_70px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-all duration-300">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-green-500" />
            </div>
            <h2 className="font-inter font-bold text-3xl text-foreground mb-4">
              Welcome to ADmyBRAND AI Suite!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your free trial is being set up. Our AI is already analyzing your
              marketing setup to provide personalized recommendations.
            </p>

            <div className="bg-gray-50/50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="font-inter font-semibold text-foreground">
                  AI Analysis in Progress
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full animate-pulse"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Analyzing your industry, company size, and marketing goals...
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Icon
                  name="Mail"
                  size={24}
                  className="text-accent mx-auto mb-2"
                />
                <h4 className="font-inter font-semibold text-foreground mb-1">
                  Check Your Email
                </h4>
                <p className="text-sm text-muted-foreground">
                  Login credentials sent to {formData.email}
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Calendar"
                  size={24}
                  className="text-green-500 mx-auto mb-2"
                />
                <h4 className="font-inter font-semibold text-foreground mb-1">
                  Onboarding Call
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our team will contact you within 24 hours
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Zap"
                  size={24}
                  className="text-orange-500 mx-auto mb-2"
                />
                <h4 className="font-inter font-semibold text-foreground mb-1">
                  AI Setup
                </h4>
                <p className="text-sm text-muted-foreground">
                  Your campaigns will be optimized automatically
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Questions? Contact our support team at support@admybrand.com or
              call (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {countdown && (
          <div className="bg-white dark:bg-gray-900/50 border border-blue-700 dark:border-blue-700 rounded-2xl p-6 mb-12 text-center shadow-[0_8px_30px_rgba(0,112,255,0.5)] hover:shadow-[0_12px_40px_rgba(118,59,238,0.75)] transition-all duration-300">
            <div className="flex items-center justify-center space-x-4 mb-3">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center">
                <Icon name="Clock" size={20} className="text-orange-600" />
              </div>
              <span className="font-inter font-bold text-lg text-gray-800 dark:text-gray-200">
                Limited Beta Access - Only {betaSpots} spots remaining!
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                Offer expires in:
              </span>
              <div className="flex space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-mono text-sm min-w-[3rem] text-center">
                  {countdown.days}d
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-mono text-sm min-w-[3rem] text-center">
                  {countdown.hours}h
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-mono text-sm min-w-[3rem] text-center">
                  {countdown.minutes}m
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-mono text-sm min-w-[3rem] text-center">
                  {countdown.seconds}s
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-full px-4 py-2 mb-6 shadow-[0_4px_20px_rgba(79,70,229,0.1)]">
                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Rocket" size={12} color="white" />
                </div>
                <span className="text-sm font-inter font-medium text-accent">
                  Start Your Free Trial
                </span>
              </div>
              <h2 className="font-inter font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6 leading-tight">
                Transform Your Marketing
                <span className="block text-accent">In 14 Days, Free</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Join 50,000+ marketers who've automated their way to 10x growth.
                No credit card required.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-[0_20px_70px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 ">
                  <Input
                    label="First Name"
                    className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border"
                    type="text"
                    value={formData.firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    error={errors.firstName}
                    required
                    placeholder="John"
                  />
                  <Input
                    label="Last Name"
                    className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border"
                    type="text"
                    value={formData.lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    error={errors.lastName}
                    required
                    placeholder="Smith"
                  />
                </div>

                <Input
                  label="Work Email"
                  className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border"
                  type="email"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("email", e.target.value)
                  }
                  error={errors.email}
                  required
                  placeholder="john@company.com"
                  description="We'll send your login credentials here"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Company Name"
                    className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border"
                    type="text"
                    value={formData.company}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("company", e.target.value)
                    }
                    error={errors.company}
                    required
                    placeholder="Acme Corp"
                  />
                  <Input
                    label="Job Title"
                    className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border"
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
                    error={errors.jobTitle}
                    required
                    placeholder="Marketing Manager"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Company Size"
                    className="glass"
                    options={companySizeOptions}
                    value={formData.companySize}
                    onChange={(value) =>
                      handleInputChange("companySize", value)
                    }
                    error={errors.companySize}
                    required
                    placeholder="Select company size"
                  />
                  <Select
                    label="Monthly Ad Spend"
                    className="glass"
                    options={monthlySpendOptions}
                    value={formData.monthlySpend}
                    onChange={(value) =>
                      handleInputChange("monthlySpend", value)
                    }
                    error={errors.monthlySpend}
                    required
                    placeholder="Select ad spend range"
                  />
                </div>

                <Input
                  label="Phone Number (Optional)"
                  className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border"
                  type="tel"
                  value={formData.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("phone", e.target.value)
                  }
                  placeholder="+1 (555) 123-4567"
                  description="For priority onboarding support"
                />

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/50 shadow-[0_8px_30px_rgba(59,130,246,0.1)]">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 dark:text-gray-100 mb-3 text-lg">
                        What happens next?
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        {[
                          "Instant access to your AI dashboard",
                          "Personalized onboarding call within 24 hours",
                          "AI begins optimizing your campaigns immediately",
                          "See results within 7-14 days",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="xl"
                  fullWidth
                  loading={isSubmitting}
                  className="bg-gradient-to-r from-accent to-blue-600 hover:from-accent/90 hover:to-blue-700 text-white font-inter font-bold text-lg py-4 shadow-[0_8px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_12px_40px_rgba(79,70,229,0.4)] transform hover:-translate-y-0.5 transition-all duration-300"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {isSubmitting
                    ? "Setting Up Your Trial..."
                    : "Start Free 14-Day Trial"}
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                  By starting your trial, you agree to our Terms of Service and
                  Privacy Policy.
                  <br />
                  No credit card required. Cancel anytime.
                </p>
              </form>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-[0_20px_70px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-all duration-300 mb-8">
              <h3 className="font-inter font-bold text-2xl text-gray-900 dark:text-white mb-8">
                Your 14-Day Free Trial Includes:
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: "Zap",
                    title: "Full AI Automation",
                    description: "Complete access to all optimization features",
                  },
                  {
                    icon: "BarChart3",
                    title: "Advanced Analytics",
                    description: "Real-time performance tracking and insights",
                  },
                  {
                    icon: "Users",
                    title: "Dedicated Support",
                    description:
                      "Personal onboarding and optimization guidance",
                  },
                  {
                    icon: "Shield",
                    title: "Enterprise Security",
                    description: "SOC2 certified data protection",
                  },
                ].map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_8px_25px_rgba(34,197,94,0.2)] transition-all duration-300">
                      <Icon
                        name={benefit.icon as keyof typeof icons}
                        size={20}
                        className="text-green-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 dark:text-gray-100 mb-2 text-lg">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-gradient-to-br from-accent/20 to-blue-200 dark:from-accent/30 dark:to-blue-900/40 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center shadow-[0_4px_15px_rgba(79,70,229,0.2)]"
                    >
                      <Icon name="User" size={18} className="text-accent" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-inter font-bold text-lg text-gray-900 dark:text-gray-100">
                    Join 50,000+ marketers
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Already growing with AI automation
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800/50 shadow-[0_8px_30px_rgba(34,197,94,0.1)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.15)] transition-all duration-300">
                  <div className="font-inter font-bold text-3xl text-green-600 dark:text-green-400 mb-2">
                    4.9/5
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Customer Rating
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50 shadow-[0_8px_30px_rgba(79,70,229,0.1)] hover:shadow-[0_12px_40px_rgba(79,70,229,0.15)] transition-all duration-300">
                  <div className="font-inter font-bold text-3xl text-accent mb-2">
                    340%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Avg ROI Increase
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-green-500" />
                  <span className="font-medium">SOC2 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Lock" size={16} className="text-green-500" />
                  <span className="font-medium">GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
