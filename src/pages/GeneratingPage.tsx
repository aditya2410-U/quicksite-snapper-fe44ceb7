
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "@/context/BuilderContext";
import StepIndicator from "@/components/StepIndicator";
import { Progress } from "@/components/ui/progress";

const GeneratingPage: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentStep } = useBuilder();
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(6);
      navigate("/result");
    }, 5000); // Navigate after 5 seconds of "generating"

    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate, setCurrentStep]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-3 border-4 border-t-transparent border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin animation-delay-150"></div>
              <div className="absolute inset-6 border-4 border-t-transparent border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin animation-delay-300"></div>
            </div>
            
            <h1 className="text-2xl font-bold mb-3">Generating Your Website</h1>
            <p className="text-gray-600 mb-6">Please wait while we build your perfect website...</p>
            
            <div className="space-y-3">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-gray-500">{progress}% complete</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 text-left">
              <h3 className="font-medium text-blue-800 mb-1">Optimizing for your business</h3>
              <p className="text-sm text-blue-700">Customizing elements to match your business needs...</p>
            </div>
            
            <div className={`bg-gray-50 rounded-lg p-4 text-left transition-opacity duration-700 ${progress > 40 ? 'opacity-100' : 'opacity-30'}`}>
              <h3 className="font-medium text-gray-800 mb-1">Building responsive layout</h3>
              <p className="text-sm text-gray-700">Making sure your site looks great on all devices...</p>
            </div>
            
            <div className={`bg-gray-50 rounded-lg p-4 text-left transition-opacity duration-700 ${progress > 70 ? 'opacity-100' : 'opacity-30'}`}>
              <h3 className="font-medium text-gray-800 mb-1">Finalizing your website</h3>
              <p className="text-sm text-gray-700">Adding finishing touches and optimizing performance...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratingPage;
