
import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useBuilder } from "@/context/BuilderContext";

interface Step {
  name: string;
  number: number;
}

const steps: Step[] = [
  { name: "Let's Start", number: 1 },
  { name: "Describe", number: 2 },
  { name: "Templates", number: 3 },
  { name: "Generate", number: 4 },
  { name: "Result", number: 5 },
];

const StepIndicator: React.FC = () => {
  const { currentStep } = useBuilder();

  return (
    <div className="py-4 px-6 bg-white flex items-center justify-center w-full border-b border-gray-100">
      <div className="flex items-center space-x-2 md:space-x-4 max-w-3xl w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  currentStep > step.number 
                    ? "bg-blue-500 text-white" 
                    : currentStep === step.number 
                      ? "bg-blue-500 text-white"
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
                  currentStep >= step.number ? "text-blue-500 font-medium" : "text-gray-500"
                )}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "h-[1px] flex-1 transition-colors duration-300",
                  currentStep > index + 1 ? "bg-blue-500" : "bg-gray-200"
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
