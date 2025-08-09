import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start free. Scale as you grow. Security included in every plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Free Trial
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">25 CVs</span>
                <span className="text-gray-600 ml-2">free</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm">Test with real CVs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm">AI security included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm">No credit card required</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full">
                <a href="/waiting-list">Start Free</a>
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                No credit card required
              </p>
            </CardContent>
          </Card>

          <Card className="relative border-blue-600 border-2">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-orange-600 text-white">MOST POPULAR</Badge>
            </div>
            <CardContent className="p-8 bg-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">€500</span>
                <span className="text-blue-200 ml-2">/month</span>
              </div>
              <p className="text-blue-200 mb-6">Perfect for growing agencies</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-200 mr-3" />
                  <span className="text-sm">500 CVs included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-200 mr-3" />
                  <span className="text-sm">AI threat protection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-200 mr-3" />
                  <span className="text-sm">Agency branding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-200 mr-3" />
                  <span className="text-sm">Bulk processing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-200 mr-3" />
                  <span className="text-sm">Export to Word/PDF/TXT</span>
                </li>
              </ul>

              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                <a href="/waiting-list">Get Started</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-gray-600 mb-6">For large teams</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm">Volume discounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm">Advanced security</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm">White-label options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 text-sm text-gray-600">
          💡 Additional CVs at €1 each • 🇪🇺 VAT added for EU customers • 💳
          Cancel anytime
        </div>

        <div className="text-center mt-4">
          <Badge className="bg-green-100 text-green-800">
            AI Security Shield included in all plans
          </Badge>
        </div>
      </div>
    </section>
  );
}
