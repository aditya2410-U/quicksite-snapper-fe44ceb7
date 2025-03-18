
import React from "react";
import StepIndicator from "@/components/StepIndicator";
import WebsiteForm from "@/components/WebsiteForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>
      
      <div className="flex-grow py-12 px-4 sm:px-6 flex items-center justify-center">
        <WebsiteForm />
      </div>
    </div>
  );
};

export default Index;
