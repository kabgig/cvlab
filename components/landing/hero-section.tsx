import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, CheckCircle, ArrowRight, Calculator } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="bg-green-100 text-green-800 mb-6">
            Pre-ATS CV formatting for Recruitment Agencies
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform CVs in <span className="text-blue-600">60 Seconds</span>
            <br />
            Shield Against <span className="text-red-600">AI Manipulation</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop wasting 40-60 minutes per CV on manual formatting. Protect your
            ATS from prompt injection attacks.{" "}
            <strong>One platform, two critical problems solved.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start 20 Free CVs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-200 hover:bg-blue-200 hover:text-blue-600"
            >
              Calculate Your ROI <Calculator className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-green-600 mr-2" />
              AI Security Shield
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 text-blue-600 mr-2" />
              60-Second Processing
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              GDPR Compliant
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-8 mt-16">
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
              <div className="text-xs text-gray-500 mb-2">TXT</div>
              <div className="text-sm">resume.txt</div>
              <div className="text-xs text-red-600 mt-1">AI</div>
              <div className="text-xs">cv.pdf</div>
              <div className="text-xs">cv.docx</div>
              <div className="text-xs text-purple-600 mt-1">MD</div>
              <div className="text-xs">about.md</div>
            </div>
            <div className="text-sm font-medium">MULTIPLE FORMATS</div>
          </div>

          <ArrowRight className="h-6 w-6 text-gray-400" />

          <div className="text-center">
            <div className="bg-blue-600 p-8 rounded-lg text-white mb-4">
              <div className="text-2xl font-bold mb-2">C</div>
              <div className="text-sm font-medium">CVLab</div>
              <div className="text-xs mt-2">Processing...</div>
            </div>
            <div className="text-sm font-medium">AI PROCESSING</div>
          </div>

          <ArrowRight className="h-6 w-6 text-gray-400" />

          <div className="text-center">
            <div className="bg-white border-2 border-green-500 p-6 rounded-lg mb-4">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-xs text-green-600">AI-Free</span>
              </div>
              <div className="text-lg">📄</div>
              <div className="text-sm font-medium mt-2">Professional.pdf</div>
              <div className="text-xs text-gray-600">Clean & Branded</div>
              <div className="flex items-center justify-center mt-2 space-x-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span className="text-xs">Formatted</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span className="text-xs">Secure</span>
              </div>
            </div>
            <div className="text-sm font-medium">SINGLE OUTPUT</div>
          </div>
        </div>
      </div>
    </section>
  );
}
