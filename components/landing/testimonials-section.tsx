import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Forward-Thinking Agencies
          </h2>
          <p className="text-xl text-gray-600">
            Join 50+ recruitment agencies who've eliminated manual formatting
            and secured their ATS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-blue-50">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6">
                "We process 800+ CVs monthly. CVLab saves us 533 hours - that's
                3 full-time positions we can redeploy to revenue generation. The
                AI security feature caught 12 manipulation attempts in our first
                week!"
              </blockquote>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">JH</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    James Harrison
                  </div>
                  <div className="text-sm text-gray-600">
                    Agency Director, London
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6">
                "Lost a €15K placement to formatting delays. Never again. CVLab
                transformed our workflow - now we're first to submit every time.
                Plus, knowing our ATS is protected from manipulation?
                Priceless."
              </blockquote>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">SC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">
                    Senior Recruiter, Tech
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6">
                "My recruiters actually smile now. No more soul-crushing
                formatting work. They focus on relationships and placements.
                Revenue up 30% since we started using CVLab 3 months ago."
              </blockquote>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">MP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Michael Park
                  </div>
                  <div className="text-sm text-gray-600">
                    CEO, Park Recruitment
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
