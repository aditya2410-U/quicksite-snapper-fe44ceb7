
import React from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

interface NotFoundProps {
  onBack: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Page not found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={onBack} 
          className="bg-primary hover:bg-primary/90"
        >
          <Home className="mr-2 h-4 w-4" />
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
