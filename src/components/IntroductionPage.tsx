
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface IntroductionPageProps {
  onGetStarted: () => void;
}

const IntroductionPage: React.FC<IntroductionPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <div className="flex-grow py-12 px-4 sm:px-6 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Build Your Website <span className="text-primary">Effortlessly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create stunning websites for businesses like PDHome, Freyrs, 
              Tufan Rugs, and more in minutes using our AI-powered builder!
            </p>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Describe Your Business</h3>
                  <p className="text-sm text-gray-500">Tell us about your business, products, and goals</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Choose Templates</h3>
                  <p className="text-sm text-gray-500">Select from AI-recommended designs for your industry</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Generate & Launch</h3>
                  <p className="text-sm text-gray-500">Get your professional website in minutes</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={onGetStarted}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
