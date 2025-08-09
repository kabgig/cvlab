import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-gray-900">CVLab</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#login" className="text-gray-600 hover:text-gray-900">
            Login
          </a>
        </nav>

        <Button className="bg-blue-600 hover:bg-blue-700">
          <a href="/waiting-list">Start Free Trial</a>
        </Button>
      </div>
    </header>
  );
}
