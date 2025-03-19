import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "@/context/BuilderContext";
import StepIndicator from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { detectKeywords, findTemplatesByBusinessType, findTemplatesByKeyword, findTemplatesByReferenceUrl } from "@/data/templates";

const ScrapePage: React.FC = () => {
  const navigate = useNavigate();
  const {
    websiteName,
    scrapeUrl,
    setScrapeUrl,
    referenceUrl,
    setReferenceUrl,
    setCurrentStep,
    setIsLoading,
    setGeneratedWebsites,
    businessType,
    setMatchedKeyword,
    description,
  } = useBuilder();

  const [isGenerating, setIsGenerating] = useState(false);

  const handleBack = () => {
    navigate("/describe");
  };

  const handleGenerateTemplates = () => {
    setIsGenerating(true);
    setIsLoading(true);

    setTimeout(() => {
      const keywords = detectKeywords(description);

      let templates = [];

      if (keywords.length > 0) {
        for (const keyword of keywords) {
          const keywordTemplates = findTemplatesByKeyword(keyword);
          templates = [...templates, ...keywordTemplates];
        }
        localStorage.setItem("matchedKeyword", keywords[0]);
        setMatchedKeyword(keywords[0]);
        console.log(keywords[0]);
      }

      if (referenceUrl && templates.length === 0) {
        const referenceTemplates = findTemplatesByReferenceUrl(referenceUrl);
        if (referenceTemplates.length > 0) {
          templates = [...templates, ...referenceTemplates];
        }
      }

      if (templates.length === 0 && businessType) {
        const businessTemplates = findTemplatesByBusinessType(businessType);
        templates = [...templates, ...businessTemplates];
      }

      const uniqueTemplates = Array.from(new Set(templates.map(t => t.id)))
        .map(id => templates.find(t => t.id === id))
        .filter(Boolean) as typeof templates;

      setGeneratedWebsites(uniqueTemplates);
      localStorage.setItem("generatedWebsites", JSON.stringify(uniqueTemplates));
      setCurrentStep(3);
      setIsLoading(false);
      navigate("/templates");
    }, 1500);
  };

  // Validation checks for the "scrapeUrl" and "referenceUrl" fields
  const isScrapeUrlValid = scrapeUrl.trim() !== "";
  const isReferenceUrlValid = referenceUrl.trim() !== "";

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
                onChange={(e) => {
                  localStorage.setItem('scrapeUrl', e.target.value);
                  setScrapeUrl(e.target.value);
                }}
                className="w-full"
              />
              <p className="text-xs text-gray-500">
                Enter the URL of an existing website you'd like to extract content from
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reference-url" className="text-sm font-medium">
                Reference design:
                <span className="text-red-500">*</span> {/* Visual cue for mandatory field */}
              </Label>
              <Input
                id="reference-url"
                placeholder="pdhome.com, freyrs.com, etc."
                value={referenceUrl}
                onChange={(e) => {
                  localStorage.setItem('referenceUrl', e.target.value);
                  setReferenceUrl(e.target.value)
                }}
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
              onClick={handleBack}
              className="flex items-center gap-1"
              disabled={isGenerating}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <Button
              onClick={handleGenerateTemplates}
              disabled={isGenerating || !isReferenceUrlValid} // Disable if any field is empty
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
