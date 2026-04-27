import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Zap, Home as HomeIcon, ShoppingBag, Sparkles, Heart, Plane } from "lucide-react";
import { useState } from "react";
import { AIChatBox } from "@/components/AIChatBox";

const categories = [
  {
    number: 1,
    name: "Real Estate",
    icon: Home,
    description: "Buy, sell, rent, lease houses and land",
    color: "from-purple-600 to-purple-900",
  },
  {
    number: 2,
    name: "Products & Assets",
    icon: ShoppingBag,
    description: "Clothes, home interiors, gadgets, tools",
    color: "from-violet-600 to-purple-900",
  },
  {
    number: 3,
    name: "Beauty",
    icon: Sparkles,
    description: "Products, services, expert beauticians",
    color: "from-pink-600 to-purple-900",
  },
  {
    number: 4,
    name: "Wellness",
    icon: Heart,
    description: "Mental health, stress relief, business support",
    color: "from-rose-600 to-purple-900",
  },
  {
    number: 5,
    name: "Travel",
    icon: Plane,
    description: "Trips, relocations, study abroad, job abroad",
    color: "from-blue-600 to-purple-900",
  },
];

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const { data: categoryList } = trpc.categories.list.useQuery();
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant' | 'system'; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-purple-900/30 bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-900 rounded-lg flex items-center justify-center font-bold text-lg">
              F
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              FlexHub
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-purple-400 transition">Home</a>
            <a href="#" className="hover:text-purple-400 transition">Categories</a>
            <a href="#" className="hover:text-purple-400 transition">AI Guide</a>
            <a href="#" className="hover:text-purple-400 transition">Partnerships</a>
            <a href="#" className="hover:text-purple-400 transition">Community</a>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/20">
                Dashboard
              </Button>
            ) : (
              <Button asChild className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950">
                <a href={getLoginUrl()}>Sign In</a>
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Your Entrepreneur's Life OS
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We Assist, Connect, Guide, Locate, Buy and Sell, and Find Various Solutions to Any of Your Business Struggles and Day-to-Day Ventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950 text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/20 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-3 gap-4 md:gap-8 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-purple-400">5</div>
          <p className="text-slate-400">Service Categories</p>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-purple-400">1000+</div>
          <p className="text-slate-400">Verified Providers</p>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-purple-400">24/7</div>
          <p className="text-slate-400">AI Support</p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Explore Our <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">5 Categories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon === HomeIcon ? HomeIcon : cat.icon;
            return (
              <Card
                key={cat.number}
                className="group cursor-pointer border-purple-900/50 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{cat.number}</div>
                  <CardTitle className="text-white">{cat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{cat.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 text-purple-400 hover:text-purple-300 w-full justify-start">
                    Explore →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* AI Flex Guide CTA */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-purple-500/50 bg-gradient-to-r from-purple-900/30 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent"></div>
          <CardHeader className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
              <CardTitle className="text-2xl text-white">Meet Your AI Flex Guide</CardTitle>
            </div>
            <CardDescription className="text-slate-300 text-lg">
              Describe any challenge once and get bundled recommendations, quotes, timelines, and AI-powered solutions tailored to your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <Button
              onClick={() => setShowChat(true)}
              className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950 text-lg"
            >
              Talk to Flex Guide
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Why Choose <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">FlexHub</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Solutions",
              description: "One problem, full solution. Our AI bundles services intelligently across all categories.",
            },
            {
              title: "Hyperlocal + Global",
              description: "Serving all states in Nigeria with seamless global extension for travel and relocation.",
            },
            {
              title: "Verified Providers",
              description: "Trust system with verified providers, detailed reviews, and dispute resolution.",
            },
            {
              title: "Real-Time Tracking",
              description: "Track bookings, deliveries, and services in real-time with instant notifications.",
            },
            {
              title: "Secure Payments",
              description: "Nigerian payment methods: bank transfer, OPay, PalmPay, cards, Flutterwave, Paystack.",
            },
            {
              title: "Entrepreneur Support",
              description: "Business health dashboard, wellness tracking, and community networking.",
            },
          ].map((feature, idx) => (
            <Card key={idx} className="border-purple-900/50 bg-gradient-to-br from-slate-800 to-slate-900">
              <CardHeader>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/30 bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-900 rounded-lg flex items-center justify-center font-bold">
                  F
                </div>
                <span className="font-bold text-purple-400">FlexHub</span>
              </div>
              <p className="text-slate-400 text-sm">Your Entrepreneur's Life OS</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400">Real Estate</a></li>
                <li><a href="#" className="hover:text-purple-400">Products</a></li>
                <li><a href="#" className="hover:text-purple-400">Beauty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400">About</a></li>
                <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-900/30 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 FlexHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Widget */}
      {showChat && (
        <div className="fixed bottom-4 right-4 z-50 w-96 h-96 bg-slate-800 rounded-lg shadow-2xl border border-purple-500/50 flex flex-col">
          <div className="bg-gradient-to-r from-purple-600 to-purple-900 p-4 rounded-t-lg flex items-center justify-between">
            <h3 className="font-bold text-white">Flex Guide AI</h3>
            <button onClick={() => setShowChat(false)} className="text-white hover:text-purple-200">Close</button>
          </div>
          <AIChatBox
            messages={chatMessages}
            onSendMessage={(content) => {
              setChatMessages([...chatMessages, { role: 'user', content }]);
              setIsLoading(true);
              setTimeout(() => {
                setChatMessages(prev => [...prev, { role: 'assistant', content: 'I am here to help! How can I assist you today?' }]);
                setIsLoading(false);
              }, 1000);
            }}
            isLoading={isLoading}
            placeholder="Describe your challenge..."
            height="100%"
            className="flex-1"
          />
        </div>
      )}
    </div>
  );
}
