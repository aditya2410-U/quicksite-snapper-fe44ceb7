
import React from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "@/context/BuilderContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BUSINESS_TYPES, BusinessType } from "@/context/BuilderContext";

const WebsiteForm: React.FC = () => {
  const navigate = useNavigate();
  const { 
    websiteName, 
    setWebsiteName, 
    businessType, 
    setBusinessType, 
    language, 
    setLanguage,
    scrapeUrl,
    setScrapeUrl,
    referenceUrl,
    setReferenceUrl,
    setCurrentStep
  } = useBuilder();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteName || !businessType) {
      return;
    }
    
    setCurrentStep(2);
    navigate("/describe");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Let's build your website!</h1>
      <p className="text-gray-600 mb-8 text-center">
        Please share some basic details of the website to get started.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="website-name" className="text-sm font-medium">
            Name of the website: <span className="text-red-500">*</span>
          </Label>
          <Input
            id="website-name"
            placeholder="Enter name or title of the website"
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="business-type" className="text-sm font-medium">
            This website is for: <span className="text-red-500">*</span>
          </Label>
          <Select
            value={businessType}
            onValueChange={(value) => setBusinessType(value as BusinessType)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              {BUSINESS_TYPES.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="language" className="text-sm font-medium">
            This website will be in:
          </Label>
          <Select 
            value={language} 
            onValueChange={setLanguage}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
              <SelectItem value="French">French</SelectItem>
              <SelectItem value="German">German</SelectItem>
              <SelectItem value="Chinese">Chinese</SelectItem>
              <SelectItem value="Japanese">Japanese</SelectItem>
              <SelectItem value="Korean">Korean</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="scrape-url" className="text-sm font-medium">
            Site to scrape data from:
          </Label>
          <Input
            id="scrape-url"
            placeholder="https://example.com"
            value={scrapeUrl}
            onChange={(e) => setScrapeUrl(e.target.value)}
            className="w-full"
          />
          <p className="text-xs text-gray-500">Enter the URL of an existing website you'd like to extract content from</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reference-url" className="text-sm font-medium">
            Reference design:
          </Label>
          <Input
            id="reference-url"
            placeholder="pdhome.com, freyrs.com, etc."
            value={referenceUrl}
            onChange={(e) => setReferenceUrl(e.target.value)}
            className="w-full"
          />
          <p className="text-xs text-gray-500">Enter a website that has a design style you like</p>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={!websiteName || !businessType}
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default WebsiteForm;
