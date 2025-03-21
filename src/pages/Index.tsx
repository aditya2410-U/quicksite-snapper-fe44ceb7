
import React from "react";
import StepIndicator from "@/components/StepIndicator";
import WebsiteForm from "@/components/WebsiteForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>
      
      <div className="flex-grow py-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Website Builder</h1>
            <p className="text-lg text-gray-600">
              Create stunning websites for businesses like PDHome, Freyrs, 
              Cwilighting, and more in minutes!
            </p>
          </div>
          <WebsiteForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
