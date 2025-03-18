
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Template {
  id: string;
  name: string;
  keyword: string;
  previewImage: string;
  demoUrl: string;
  isPremium?: boolean;
}

interface BuilderContextType {
  websiteName: string;
  setWebsiteName: (name: string) => void;
  businessType: string;
  setBusinessType: (type: string) => void;
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
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [websiteName, setWebsiteName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [language, setLanguage] = useState("English");
  const [description, setDescription] = useState("");
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [matchedKeyword, setMatchedKeyword] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [generatedWebsites, setGeneratedWebsites] = useState<Template[]>([]);

  const toggleTemplateSelection = (templateId: string) => {
    setSelectedTemplates(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId) 
        : [...prev, templateId]
    );
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
