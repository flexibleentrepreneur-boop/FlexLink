import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import AIRecommendations from "./pages/AIRecommendations";
import ProviderDashboard from "./pages/ProviderDashboard";
import Partnerships from "./pages/Partnerships";
import AdminAnalytics from "./pages/AdminAnalytics";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/categories"} component={Categories} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/payment"} component={Payment} />
      <Route path={"/ai-recommendations"} component={AIRecommendations} />
      <Route path={"/provider-dashboard"} component={ProviderDashboard} />
      <Route path={"/partnerships"} component={Partnerships} />
      <Route path={"/admin-analytics"} component={AdminAnalytics} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
