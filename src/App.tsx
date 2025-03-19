
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BuilderProvider } from "./context/BuilderContext";
import { useState, useEffect } from "react";

import IntroductionPage from "./components/IntroductionPage";
import Index from "./pages/Index";
import DescribePage from "./pages/DescribePage";
import ScrapePage from "./pages/ScrapePage";
import TemplatePage from "./pages/TemplatePage";
import GeneratingPage from "./pages/GeneratingPage";
import ResultPage from "./pages/ResultPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // This will control which page is displayed
  const [currentView, setCurrentView] = useState("intro");

  // Handle back/forward browser navigation
  useEffect(() => {
    const handlePopState = () => {
      // We'll just reset to intro if they use browser navigation
      setCurrentView("intro");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Render the appropriate view based on currentView state
  const renderView = () => {
    switch (currentView) {
      case "intro":
        return <IntroductionPage onGetStarted={() => setCurrentView("index")} />;
      case "index":
        return <Index onNext={() => setCurrentView("describe")} />;
      case "describe":
        return (
          <DescribePage 
            onBack={() => setCurrentView("index")} 
            onNext={() => setCurrentView("scrape")}
          />
        );
      case "scrape":
        return (
          <ScrapePage 
            onBack={() => setCurrentView("describe")} 
            onNext={() => setCurrentView("templates")}
          />
        );
      case "templates":
        return (
          <TemplatePage 
            onBack={() => setCurrentView("scrape")} 
            onNext={() => setCurrentView("generating")}
          />
        );
      case "generating":
        return <GeneratingPage onComplete={() => setCurrentView("result")} />;
      case "result":
        return <ResultPage onReset={() => setCurrentView("intro")} />;
      default:
        return <NotFound onBack={() => setCurrentView("intro")} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BuilderProvider>
          <Toaster />
          <Sonner />
          {renderView()}
        </BuilderProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
