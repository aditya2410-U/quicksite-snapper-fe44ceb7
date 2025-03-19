import React from "react";
import { useBuilder } from "@/context/BuilderContext";
import { findTemplateById } from "@/data/templates";
import StepIndicator from "@/components/StepIndicator";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Download, Share2, Home } from "lucide-react";
import { toast } from "sonner";

interface ResultPageProps {
  onReset: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onReset }) => {
  const { selectedTemplates, websiteName } = useBuilder();
  
  // Get template information for selected templates
  const generatedSites = selectedTemplates.map(id => findTemplateById(id)).filter(Boolean);
  
  const handleCopyLink = () => {
    // In a real app, this would be a link to the generated site
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };
  
  const handleDownload = () => {
    toast.success("Download started!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-10">
        <StepIndicator />
      </div>
      
      <div className="flex-grow py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Your website is ready!</h1>
                <p className="text-gray-600">
                  Congratulations! Your new {websiteName} website has been generated successfully.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-medium mb-4">Website Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Website Name</span>
                    <span className="font-medium">{websiteName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Generated On</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Templates Used</span>
                    <span className="font-medium">{selectedTemplates.length}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium mb-4">Actions</h2>
                <div className="space-y-3">
                  <Button 
                    className="w-full flex items-center justify-between" 
                    onClick={() => window.open(generatedSites[0]?.demoUrl || '#', '_blank')}
                  >
                    <span>View Your Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-between"
                    onClick={handleCopyLink}
                  >
                    <span>Copy Link</span>
                    <Share2 className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-between"
                    onClick={handleDownload}
                  >
                    <span>Download Source Files</span>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Your Generated Websites</h2>
            
            {generatedSites.map((site) => (
              <div key={site?.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative aspect-video w-full">
                  <img 
                    src={site?.previewImage} 
                    alt={site?.name}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{site?.name}</h3>
                      <p className="text-white/80 mb-4">{site?.description}</p>
                      <Button 
                        className="bg-white text-gray-900 hover:bg-gray-50"
                        onClick={() => window.open(site?.demoUrl || '#', '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Website
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button 
          onClick={onReset}
          className="bg-primary hover:bg-primary/90"
        >
          <Home className="mr-2 h-4 w-4" />
          Create Another Website
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
