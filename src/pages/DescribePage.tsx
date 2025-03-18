
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "@/context/BuilderContext";
import { detectKeywords, findTemplatesByKeyword, findTemplatesByReferenceUrl, findTemplatesByBusinessType } from "@/data/templates";
import StepIndicator from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";

const DescribePage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    websiteName, 
    description, 
    setDescription, 
    setMatchedKeyword,
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
      setDescription(value);
      setCharacterCount(value.length);
    }
  };

  const handleNext = () => {
    setCurrentStep(3);
    navigate("/scrape");
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleImproveWithAI = () => {
    // Simulate AI improving description
    setIsLoading(true);
    setTimeout(() => {
      const improved = description.trim() 
        ? `${description}\n\nOur website will feature a modern, responsive design with intuitive navigation and seamless user experience. We'll incorporate branded elements and ensure accessibility across all devices.`
        : "Our website will feature a modern, responsive design with intuitive navigation and seamless user experience. We'll incorporate branded elements and ensure accessibility across all devices.";
      
      setDescription(improved);
      setCharacterCount(improved.length);
      setIsLoading(false);
    }, 1500);
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
