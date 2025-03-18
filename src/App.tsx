
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BuilderProvider } from "./context/BuilderContext";

import Index from "./pages/Index";
import DescribePage from "./pages/DescribePage";
import TemplatePage from "./pages/TemplatePage";
import GeneratingPage from "./pages/GeneratingPage";
import ResultPage from "./pages/ResultPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BuilderProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/describe" element={<DescribePage />} />
            <Route path="/templates" element={<TemplatePage />} />
            <Route path="/generating" element={<GeneratingPage />} />
            <Route path="/result" element={<ResultPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </BuilderProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
