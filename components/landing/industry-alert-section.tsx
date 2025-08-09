import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export function IndustryAlertSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-red-600 text-white mb-4">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Industry Alert
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Your ATS is a Sitting Duck for AI Attacks
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Every major ATS platform is vulnerable. CVLab is your digital
            bouncer, checking every resume for hidden threats.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gray-800 border-red-600">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Workday</h3>
                <Badge className="bg-red-600 text-white">HIGH RISK</Badge>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                800B+ transactions annually
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-red-400">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  NLP vulnerable
                </li>
                <li className="flex items-center text-red-400">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  Class-action lawsuits
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-red-600">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Bullhorn</h3>
                <Badge className="bg-red-600 text-white">HIGH RISK</Badge>
              </div>
              <p className="text-gray-300 text-sm mb-4">Amplify AI system</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-orange-400">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  49% match claims
                </li>
                <li className="flex items-center text-orange-400">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Multi-vector attacks
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-orange-600">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">iCIMS</h3>
                <Badge className="bg-orange-600 text-white">MEDIUM</Badge>
              </div>
              <p className="text-gray-300 text-sm mb-4">New Copilot AI</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-yellow-400">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Conversational AI
                </li>
                <li className="flex items-center text-yellow-400">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Prompt injectable
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-green-600">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Greenhouse</h3>
                <Badge className="bg-green-600 text-white">LOW RISK</Badge>
              </div>
              <p className="text-gray-300 text-sm mb-4">Limited AI usage</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Cautious approach
                </li>
                <li className="flex items-center text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Less vulnerable
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
