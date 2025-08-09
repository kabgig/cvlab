import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Your CV Processing?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
          Join 50+ agencies saving €194,000/year while protecting their ATS from
          AI manipulation. Start with 20 free CVs - no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-200 text-blue-600 hover:bg-blue-200 hover:text-blue-600"
          >
            <a href="#roi-calculator">Calculate Your ROI</a>
          </Button>
        </div>

        <p className="text-blue-200 mb-12">
          <CheckCircle className="inline h-4 w-4 mr-2" />
          No credit card required • 20 free CVs included
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">30 sec</div>
            <div className="text-blue-200">Per CV Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">€194K</div>
            <div className="text-blue-200">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-blue-200">AI Protection</div>
          </div>
        </div>
      </div>
    </section>
  );
}
