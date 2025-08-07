"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";

export function RoiCalculatorSection() {
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [teamSize, setTeamSize] = useState(5);
  const [manualHours, setManualHours] = useState(25);

  const [timeSavings, setTimeSavings] = useState(0);
  const [performanceGain, setPerformanceGain] = useState(0);
  const [totalAnnualRoi, setTotalAnnualRoi] = useState(0);

  useEffect(() => {
    // Constants for calculation (can be adjusted based on real data)
    const avgHourlyRate = 50; // Assuming an average hourly rate for manual tasks
    const timeReductionPercentage = 0.8; // 80% reduction in manual tasks
    const performanceGainPercentage = 2.4; // 240% average performance gain

    // Calculate Time Savings
    const annualManualHours = manualHours * teamSize * 52; // 52 weeks in a year
    const annualTimeSavings =
      annualManualHours * timeReductionPercentage * avgHourlyRate;
    setTimeSavings(annualTimeSavings);

    // Calculate Performance Gain
    const annualPerformanceGain = monthlySpend * 12 * performanceGainPercentage;
    setPerformanceGain(annualPerformanceGain);

    // Calculate Total Annual ROI
    const totalSavings = annualTimeSavings + annualPerformanceGain;
    const totalInvestment = monthlySpend * 12; // Assuming monthly spend is the investment
    const roi = ((totalSavings - totalInvestment) / totalInvestment) * 100;
    setTotalAnnualRoi(roi);
  }, [monthlySpend, teamSize, manualHours]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Calculate Your ROI
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See how much you could save with AI automation based on your
              current marketing spend and team size
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="p-6 dark:bg-gray-900/50 group hover:shadow-[0_10px_20px_rgba(130,129,134,0.3)] transition-all duration-300 transform hover:-translate-y-2 border-0 glass dark-card-bg shadow-[0_5px_15px_rgba(130,129,134,0.3)] border-gray-600">
            <CardHeader>
              <CardTitle>Input Your Data</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="monthly-spend">Monthly Marketing Spend</Label>
                <div className="relative border-none rounded-lg">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></span>
                  <Input
                    id="monthly-spend"
                    type="number"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border-none rounded-lg"
                  />
                </div>
              </div>
              <div className="grid gap-2 ">
                <Label htmlFor="team-size">Marketing Team Size</Label>
                <Input
                  id="team-size"
                  type="number"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border-none rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="manual-hours">
                  Hours Spent on Manual Tasks (per person/week)
                </Label>
                <Input
                  id="manual-hours"
                  className="shadow-[0_5px_5px_rgba(130,129,134,0.7)] hover:shadow-[0_5px_15px_rgba(130,129,134,0.7)] border-none rounded-lg"
                  type="number"
                  value={manualHours}
                  onChange={(e) => setManualHours(Number(e.target.value))}
                />
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 dark:bg-gray-900/50 group hover:shadow-[0_10px_20px_rgba(130,129,134,0.3)] transition-all duration-300 transform hover:-translate-y-2 border-0 glass dark-card-bg shadow-[0_5px_15px_rgba(130,129,134,0.3)]">
            <CardHeader>
              <CardTitle>Your Projected Annual Savings</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Time Savings (80% reduction)
                </span>
                <span className="font-medium text-green-500">
                  ${timeSavings.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Performance Gain (240% avg)
                </span>
                <span className="font-medium text-green-500">
                  ${performanceGain.toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-4 mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">Total Annual ROI</span>
                <span
                  className={`text-lg font-bold ${
                    totalAnnualRoi >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {totalAnnualRoi.toFixed(0)}%
                </span>
              </div>
              <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Based on average customer results
              </div>
              <Button className="w-full mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Start Saving Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
