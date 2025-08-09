"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function ROICalculatorSection() {
  const [cvCount, setCvCount] = useState([500]);
  const [timePerCv, setTimePerCv] = useState([40]);
  const [hourlyRate, setHourlyRate] = useState([28]);

  const currentCost = Math.round(
    (cvCount[0] * timePerCv[0] * hourlyRate[0]) / 60
  );
  const cvlabCost = 500;
  const monthlySavings = currentCost - cvlabCost;
  const annualSavings = monthlySavings * 12;

  return (
    <section id="roi-calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-gray-600">
            See exactly how much time and money CVLab saves your agency every
            month
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Your Current Situation
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVs Processed Monthly: {cvCount[0]}
                      </label>
                      <Slider
                        value={cvCount}
                        onValueChange={setCvCount}
                        max={2000}
                        min={100}
                        step={50}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Minutes Per CV (Manual): {timePerCv[0]}
                      </label>
                      <Slider
                        value={timePerCv}
                        onValueChange={setTimePerCv}
                        max={90}
                        min={20}
                        step={5}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hourly Rate (€): €{hourlyRate[0]}
                      </label>
                      <Slider
                        value={hourlyRate}
                        onValueChange={setHourlyRate}
                        max={100}
                        min={15}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Your Potential Savings
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Current Cost/Month:</span>
                      <span className="font-bold text-xl">
                        €{currentCost.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-700">CVLab Cost:</span>
                      <span className="font-bold text-xl">€{cvlabCost}</span>
                    </div>

                    <hr />

                    <div className="flex justify-between">
                      <span className="text-gray-700">Monthly Savings:</span>
                      <span className="font-bold text-2xl text-green-600">
                        €{monthlySavings.toLocaleString()}
                      </span>
                    </div>

                    <p className="text-green-600 font-semibold">
                      That's {Math.round((monthlySavings / currentCost) * 100)}%
                      cost reduction
                    </p>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          €{annualSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-700">
                          Annual Savings
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Start Saving Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
