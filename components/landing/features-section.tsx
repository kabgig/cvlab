import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Zap,
  Upload,
  BarChart3,
  Palette,
  Download,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            One Platform. Two Problems Solved. Zero Compromise.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform chaotic CVs into professional formats in 60 seconds while
            protecting your ATS from AI manipulation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                60-Second Processing
              </h3>
              <p className="text-gray-600">
                Upload any CV format. Get back perfectly formatted,
                agency-branded documents instantly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI Security Shield
              </h3>
              <p className="text-gray-600">
                Detect and remove hidden prompts, white text, and injection
                attacks before they reach your ATS.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Upload className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Bulk Processing
              </h3>
              <p className="text-gray-600">
                Upload 50+ CVs at once. Process entire candidate batches with
                your branding applied automatically.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Agency Branding
              </h3>
              <p className="text-gray-600">
                Your logo, colors, and contact info on every CV. Look
                professional without the manual work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart Analytics
              </h3>
              <p className="text-gray-600">
                Track processing times, threat detection rates, and ROI metrics
                in real-time dashboards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Export Anywhere
              </h3>
              <p className="text-gray-600">
                Download as PDF, Word, or ATS-friendly text. Compatible with all
                major recruitment systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
