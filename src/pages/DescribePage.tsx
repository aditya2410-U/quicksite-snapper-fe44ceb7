
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "@/context/BuilderContext";
import { detectKeywords, findTemplatesByKeyword } from "@/data/templates";
import StepIndicator from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";

const DescribePage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    websiteName, 
    description, 
    setDescription, 
    setMatchedKeyword,
    setGeneratedWebsites,
    setCurrentStep
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
    // Detect keywords in the description
    const keyword = detectKeywords(description);
    setMatchedKeyword(keyword);
    
    // Find templates matching the keyword
    if (keyword) {
      const templates = findTemplatesByKeyword(keyword);
      setGeneratedWebsites(templates);
    }
    
    setCurrentStep(3);
    navigate("/templates");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>
      
      <div className="flex-grow py-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">
            Please describe <span className="text-blue-600">{websiteName}</span> in a few words.
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
            />
            
            <div className="flex justify-end mt-2">
              <span className="text-sm text-gray-500">
                Characters: {characterCount} / {MAX_CHARS}
              </span>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline"
              onClick={handleBack}
              className="flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            
            <Button 
              onClick={handleNext}
              disabled={!description.trim()}
              className="flex items-center gap-1"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescribePage;
