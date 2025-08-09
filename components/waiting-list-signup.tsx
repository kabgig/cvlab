"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WaitingListSignup() {
  useEffect(() => {
    // Load Beehiiv script
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/embed.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Join the CVLab Waiting List
          </CardTitle>
          <p className="text-gray-600">
            Be the first to transform your CV processing workflow.
            <br />
            Get notified on service launch.
            <br />
            👇👇👇
          </p>
        </CardHeader>

        <CardContent className="p-6 text-center">
          <iframe
            src="https://subscribe-forms.beehiiv.com/df80bb6e-5870-4834-b0b4-ca9a2ace759d"
            className="beehiiv-embed mx-auto"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{
              width: "660px",
              height: "415px",
              margin: 0,
              borderRadius: "0px",
              backgroundColor: "transparent",
              boxShadow: "0 0 #0000",
              maxWidth: "100%",
            }}
          />

          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="w-full mt-6"
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
