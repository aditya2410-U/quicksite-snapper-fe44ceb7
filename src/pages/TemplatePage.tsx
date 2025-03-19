
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "@/context/BuilderContext";
import StepIndicator from "@/components/StepIndicator";
import TemplateCard from "@/components/TemplateCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Loader2, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import GeneratingPage from "./GeneratingPage";

const TemplatePage: React.FC = () => {
  const navigate = useNavigate();
  const {
    websiteName,
    selectedTemplates,
    generatedWebsites,
    matchedKeyword,
    setCurrentStep,
    currentStep,
    isLoading,
    setIsLoading
  } = useBuilder();

  const [searchTerm, setSearchTerm] = useState("");
  const [displayTemplates, setDisplayTemplates] = useState(false);
  const [renderFakeLoading, setRenderFakeLoading] = useState(false);

  useEffect(() => {
    // Simulate loading templates
    if (!displayTemplates) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setDisplayTemplates(true);
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [generatedWebsites, displayTemplates]);

  const filteredTemplates = searchTerm.trim()
    ? generatedWebsites.filter(template =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : generatedWebsites;

  const handleBack = () => {
    navigate("/describe");
  };

  const handleGenerate = () => {
    setRenderFakeLoading(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>

      {renderFakeLoading ? (
        <GeneratingPage />
      ) : (
        <>
          <div className="flex-grow py-8 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Choose the Design</h1>
                <p className="text-gray-600">
                  We've generated these designs based on your description of "{websiteName}".
                  Select one or more to continue.
                </p>
              </div >

              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    className="pl-10"
                    placeholder={`${matchedKeyword || "pdhome"}, freyrs, tufanrugs`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {
                isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {Array(6).fill(0).map((_, index) => (
                      <div key={index} className="border rounded-xl overflow-hidden">
                        <Skeleton className="aspect-[4/3] w-full" />
                        <div className="p-4">
                          <Skeleton className="h-6 w-2/3 mb-2" />
                          <Skeleton className="h-4 w-full" />
                          <div className="flex justify-between mt-4">
                            <Skeleton className="h-8 w-24" />
                            <Skeleton className="h-8 w-24" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {filteredTemplates.map((template) => (
                      <TemplateCard
                        key={template.id}
                        template={template}
                      />
                    ))}
                  </div>
                )
              }

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
                  onClick={handleGenerate}
                  disabled={selectedTemplates.length === 0 || isLoading}
                  className="px-8 bg-primary hover:bg-primary/90"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      Generate {selectedTemplates.length > 1 ? `(${selectedTemplates.length})` : ''}
                    </>
                  )}
                </Button>
              </div>
            </div >
          </div >
        </>
      )}
    </div >
  );
};

export default TemplatePage;
