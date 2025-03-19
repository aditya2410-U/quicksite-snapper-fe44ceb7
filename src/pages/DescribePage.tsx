
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "@/context/BuilderContext";
import { detectKeywords, findTemplatesByKeyword, findTemplatesByReferenceUrl, findTemplatesByBusinessType } from "@/data/templates";
import StepIndicator from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";
import chatgpt_api from "@/utils/api_request";

const DescribePage: React.FC = () => {
  const navigate = useNavigate();
  const {
    websiteName,
    description,
    setDescription,
    setMatchedKeyword,
    setGeneratedWebsites,
    setCurrentStep,
    isLoading,
    setIsLoading,
    businessType,
    referenceUrl
  } = useBuilder();

  const [characterCount, setCharacterCount] = useState(0);
  const MAX_CHARS = 1000;

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      localStorage.setItem("description", value);
      setDescription(value);
      setCharacterCount(value.length);
    }
  };

  const handleNext = () => {
    setIsLoading(true);

    // Simulate loading
    setTimeout(() => {
      // Detect keywords in the description
      const keywords = detectKeywords(description);

      // Find templates based on different sources of information
      let templates = [];

      // 1. Check if keywords were found in description
      if (keywords.length > 0) {
        for (const keyword of keywords) {
          const keywordTemplates = findTemplatesByKeyword(keyword);
          templates = [...templates, ...keywordTemplates];
        }
        localStorage.setItem("matchedKeyword", keywords[0]);
        setMatchedKeyword(keywords[0]);
      }

      // 2. Check if a reference URL was provided
      if (referenceUrl && templates.length === 0) {
        const referenceTemplates = findTemplatesByReferenceUrl(referenceUrl);
        if (referenceTemplates.length > 0) {
          templates = [...templates, ...referenceTemplates];
        }
      }

      // 3. Fallback to business type if no templates found
      if (templates.length === 0 && businessType) {
        const businessTemplates = findTemplatesByBusinessType(businessType);
        templates = [...templates, ...businessTemplates];
      }

      // Set the unique templates (avoiding duplicates)
      const uniqueTemplates = Array.from(new Set(templates.map(t => t.id)))
        .map(id => templates.find(t => t.id === id))
        .filter(Boolean) as typeof templates;

      setGeneratedWebsites(uniqueTemplates);
      localStorage.setItem("generatedWebsites", JSON.stringify(uniqueTemplates));
      setCurrentStep(3);
      setIsLoading(false);
      navigate("/scrape");
    }, 1500);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleImproveWithAI = async () => {
    setIsLoading(true);

    try {
      const improvedDescription = await chatgpt_api.improveDescription(description);
      localStorage.setItem("description", improvedDescription);
      setDescription(improvedDescription);
      setCharacterCount(improvedDescription.length);  
    } catch (error) {
      console.error("Error improving description:", error);
    } finally {
      setIsLoading(false);  
    }
  };




  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>

      <div className="flex-grow py-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">
            Please describe <span className="text-primary">{websiteName}</span> in a few words.
          </h1>

          <p className="text-gray-600 mb-6">
            Please be as descriptive as you can. Share details such services, products, goal, etc.
          </p>

          <div className="mb-6">
            <Textarea
              placeholder="Describe your business in detail..."
              value={description}
              onChange={handleDescriptionChange}
              className="min-h-[150px] resize-none"
              disabled={isLoading}
            />

            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">
                Characters: {characterCount} / {MAX_CHARS}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={handleImproveWithAI}
                className="text-primary border-primary hover:bg-primary/10"
                disabled={isLoading}
              >
                <Sparkle className="h-4 w-4 mr-2" />
                Improve with Kai
              </Button>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center gap-1"
              disabled={isLoading}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!description.trim() || isLoading}
              className="flex items-center gap-1 bg-primary hover:bg-primary/90"
            >
              {isLoading ? "Processing..." : "Next"}
              {!isLoading && <ArrowRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescribePage;
