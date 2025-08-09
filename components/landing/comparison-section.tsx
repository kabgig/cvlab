import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="bg-blue-600 text-white text-center py-6">
            <h2 className="text-3xl font-bold">See the CVLab Difference</h2>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-red-50">
              <div className="flex items-center mb-6">
                <XCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-600">
                  Without CVLab
                </h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center text-red-600">
                  <XCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>40-60 minutes manual formatting per CV</span>
                </li>
                <li className="flex items-center text-red-600">
                  <XCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Competitor logos manually removed</span>
                </li>
                <li className="flex items-center text-red-600">
                  <XCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Inconsistent formatting across team</span>
                </li>
                <li className="flex items-center text-red-600">
                  <XCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Hidden AI prompts slip through</span>
                </li>
                <li className="flex items-center text-red-600">
                  <XCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>€25,000/month wasted on formatting</span>
                </li>
                <li className="flex items-center text-red-600">
                  <XCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>ATS vulnerable to manipulation</span>
                </li>
                <li className="flex items-center text-red-600">
                  <XCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Lost placements to faster agencies</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-green-50">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-600">With CVLab</h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>60 seconds automated processing</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Your branding automatically applied</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Perfect consistency every time</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>AI threats detected and removed</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Save €24,500/month on labor</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>ATS protected from manipulation</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Submit candidates 10x faster</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
