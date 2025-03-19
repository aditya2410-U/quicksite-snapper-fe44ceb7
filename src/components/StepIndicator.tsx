
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { BusinessType, useBuilder } from "@/context/BuilderContext";

interface Step {
  name: string;
  number: number;
  path: string;
}

const steps: Step[] = [
  { name: "Let's Start", number: 1, path: "/" },
  { name: "Describe", number: 2, path: "/describe" },
  { name: "Sources", number: 3, path: "/scrape" },
  { name: "Templates", number: 4, path: "/templates" },
  { name: "Result", number: 5, path: "/result" },
];

const StepIndicator: React.FC = () => {
  const navigate = useNavigate();
  const loacation = useLocation();
  const { currentStep, setCurrentStep, setWebsiteName, setBusinessType, setLanguage, setDescription, setMatchedKeyword, setGeneratedWebsites, setScrapeUrl, setReferenceUrl,setSelectedTemplates } = useBuilder();
  useEffect(() => {
    const currentPath = location.pathname;
    const currentStep = steps.find((step) => step.path === currentPath);
    currentStep && setCurrentStep(currentStep ? currentStep.number : 1);
    if(currentStep?.number < 4) {
      setSelectedTemplates([]);
    }
    let count = 0;
    if (localStorage.getItem("websiteName") || localStorage.getItem("businessType") || localStorage.getItem("language")) count++;

    if (localStorage.getItem("description")) count++;

    if (localStorage.getItem("scrapeUrl") || localStorage.getItem("referenceUrl")) count++;

    if (localStorage.getItem("selectedTemplates")) count++;

    if (localStorage.getItem("generatedWebsites")) count++;

    if (count + 1 < currentStep?.number) {
      navigate(steps[count].path);
      setCurrentStep(count);
    }
    setWebsiteName(localStorage.getItem("websiteName") || "");
    setBusinessType(localStorage.getItem("businessType") as BusinessType || "");
    setLanguage(localStorage.getItem("language") || "");
    setDescription(localStorage.getItem("description") || "");
    setScrapeUrl(localStorage.getItem("scrapeUrl") || "");
    setReferenceUrl(localStorage.getItem("referenceUrl") || "");
    setMatchedKeyword(localStorage.getItem("matchedKeyword") || "");
    setGeneratedWebsites(JSON.parse(localStorage.getItem("generatedWebsites") || "[]"));
  }, []);

  useEffect(() => {
    console.log('current step changed to: ', currentStep);
  }, [currentStep]);

  const handleStepClick = (step: Step) => {
    // Only allow navigation to steps that have been completed or are next
    if (step.number <= currentStep) {
      setCurrentStep(step.number);
      navigate(step.path);
    }
  };

  return (
    <div className="py-4 px-6 bg-white flex items-center justify-center w-full border-b border-gray-100">
      <div className="flex items-center space-x-2 md:space-x-4 max-w-3xl w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleStepClick(step)}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  currentStep > step.number
                    ? "bg-primary text-white"
                    : currentStep === step.number
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                )}
              >
                {currentStep > step.number ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-sm font-medium">{step.number}</span>
                )}
              </div>
              <span
                className={cn(
                  "text-xs mt-1 hidden md:block transition-colors duration-300",
                  currentStep >= step.number ? "text-primary font-medium" : "text-gray-500"
                )}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-[1px] flex-1 transition-colors duration-300",
                  currentStep > index + 1 ? "bg-primary" : "bg-gray-200"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
