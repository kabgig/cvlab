import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              How CVLab Shields Your ATS
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Detection</h3>
                <p className="text-gray-300">
                  Advanced AI scans for hidden text, Unicode tricks, and prompt
                  injections
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Sanitization
                </h3>
                <p className="text-gray-300">
                  Removes all malicious content while preserving legitimate
                  information
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Verification
                </h3>
                <p className="text-gray-300">
                  Clean CVs certified safe for your ATS to process confidently
                </p>
              </div>
            </div>

            <div className="bg-green-900 border border-green-600 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                <span className="font-semibold text-green-400">Result:</span>
              </div>
              <p className="text-green-100">
                Your AI makes decisions based on real qualifications, not hidden
                manipulations
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
