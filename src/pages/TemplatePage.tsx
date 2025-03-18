
import React from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "@/context/BuilderContext";
import StepIndicator from "@/components/StepIndicator";
import TemplateCard from "@/components/TemplateCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";

const TemplatePage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    websiteName,
    selectedTemplates,
    generatedWebsites,
    matchedKeyword,
    setCurrentStep
  } = useBuilder();

  const handleBack = () => {
    navigate("/describe");
  };

  const handleGenerate = () => {
    setCurrentStep(4);
    navigate("/generating");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>
      
      <div className="flex-grow py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Choose the Design</h1>
            <p className="text-gray-600">
              We've generated these designs based on your description of "{websiteName}".
              Select one or more to continue.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10"
                placeholder={`${matchedKeyword || "agency"}, consultant, saas`}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {generatedWebsites.map((template) => (
              <TemplateCard 
                key={template.id}
                template={template}
              />
            ))}
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
              onClick={handleGenerate}
              disabled={selectedTemplates.length === 0}
              className="px-8"
            >
              Generate {selectedTemplates.length > 1 ? `(${selectedTemplates.length})` : ''}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
