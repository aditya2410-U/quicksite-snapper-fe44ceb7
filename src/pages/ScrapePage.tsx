import React, { useState } from "react";
import { useBuilder } from "@/context/BuilderContext";
import StepIndicator from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

interface ScrapePageProps {
  onBack: () => void;
  onNext: () => void;
}

const ScrapePage: React.FC<ScrapePageProps> = ({ onBack, onNext }) => {
  const { 
    websiteName,
    scrapeUrl,
    setScrapeUrl,
    referenceUrl,
    setReferenceUrl,
    setCurrentStep,
    setIsLoading,
    setGeneratedWebsites,
    businessType
  } = useBuilder();
  
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateTemplates = () => {
    setIsGenerating(true);
    
    // Simulate template generation with a longer delay (5-8 seconds)
    setTimeout(() => {
      setCurrentStep(4);
      setIsLoading(true); // This will trigger the loading state in the templates page
      onNext();
    }, 5000); // 5 seconds delay
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>
      
      <div className="flex-grow py-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">
            Configure sources for <span className="text-primary">{websiteName}</span>
          </h1>
          
          <p className="text-gray-600 mb-6">
            Provide external sites to scrape content from or use as design reference.
          </p>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="scrape-url" className="text-sm font-medium">
                Site to scrape data from:
              </Label>
              <Input
                id="scrape-url"
                placeholder="https://example.com"
                value={scrapeUrl}
                onChange={(e) => setScrapeUrl(e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-gray-500">
                Enter the URL of an existing website you'd like to extract content from
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reference-url" className="text-sm font-medium">
                Reference design:
              </Label>
              <Input
                id="reference-url"
                placeholder="pdhome.com, freyrs.com, etc."
                value={referenceUrl}
                onChange={(e) => setReferenceUrl(e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-gray-500">
                Enter a website that has a design style you like
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between">
            <Button 
              variant="outline"
              onClick={onBack}
              className="flex items-center gap-1"
              disabled={isGenerating}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            
            <Button 
              onClick={handleGenerateTemplates}
              disabled={isGenerating}
              className="flex items-center gap-1 bg-primary hover:bg-primary/90"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating templates...
                </>
              ) : (
                <>
                  Generate Templates
                  <ArrowRight className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapePage;
