
import React, { createContext, useContext, useState, ReactNode } from "react";

export type BusinessType = "HomeDecor" | "Wearables" | "Lighting";

export const BUSINESS_TYPES: BusinessType[] = ["HomeDecor", "Wearables", "Lighting"];

interface Template {
  id: string;
  name: string;
  keyword: string;
  description: string;
  previewImage: string;
  demoUrl: string;
  isPremium?: boolean;
}

interface BuilderContextType {
  websiteName: string;
  setWebsiteName: (name: string) => void;
  businessType: BusinessType | "";
  setBusinessType: (type: BusinessType | "") => void;
  language: string;
  setLanguage: (lang: string) => void;
  description: string;
  setDescription: (desc: string) => void;
  selectedTemplates: string[];
  setSelectedTemplates: (templates: string[]) => void;
  toggleTemplateSelection: (templateId: string) => void;
  matchedKeyword: string | null;
  setMatchedKeyword: (keyword: string | null) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  generatedWebsites: Template[];
  setGeneratedWebsites: (websites: Template[]) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  scrapeUrl: string;
  setScrapeUrl: (url: string) => void;
  referenceUrl: string;
  setReferenceUrl: (url: string) => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [websiteName, setWebsiteName] = useState("");
  const [businessType, setBusinessType] = useState<BusinessType | "">("");
  const [language, setLanguage] = useState("English");
  const [description, setDescription] = useState("");
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [matchedKeyword, setMatchedKeyword] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [generatedWebsites, setGeneratedWebsites] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scrapeUrl, setScrapeUrl] = useState("");
  const [referenceUrl, setReferenceUrl] = useState("");

  const toggleTemplateSelection = (templateId: string) => {
    setSelectedTemplates(prev => {
      const updatedSelection = prev.includes(templateId)
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
      localStorage.setItem('selectedTemplates', JSON.stringify(updatedSelection));
      return updatedSelection;
    });
  };

  return (
    <BuilderContext.Provider value={{
      websiteName,
      setWebsiteName,
      businessType,
      setBusinessType,
      language,
      setLanguage,
      description,
      setDescription,
      selectedTemplates,
      setSelectedTemplates,
      toggleTemplateSelection,
      matchedKeyword,
      setMatchedKeyword,
      currentStep,
      setCurrentStep,
      generatedWebsites,
      setGeneratedWebsites,
      isLoading,
      setIsLoading,
      scrapeUrl,
      setScrapeUrl,
      referenceUrl,
      setReferenceUrl,
    }}>
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = (): BuilderContextType => {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error("useBuilder must be used within a BuilderProvider");
  }
  return context;
};
