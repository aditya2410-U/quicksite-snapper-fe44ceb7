
import React from "react";
import { cn } from "@/lib/utils";
import { useBuilder } from "@/context/BuilderContext";
import { Template } from "@/data/templates";
import { Check, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const { selectedTemplates, toggleTemplateSelection } = useBuilder();
  const isSelected = selectedTemplates.includes(template.id);

  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden border transition-all duration-300 group",
        isSelected 
          ? "border-blue-500 shadow-md shadow-blue-100" 
          : "border-gray-200 hover:border-gray-300"
      )}
    >
      {template.isPremium && (
        <Badge 
          variant="default" 
          className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 z-10"
        >
          PREMIUM
        </Badge>
      )}
      
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img 
          src={template.previewImage} 
          alt={template.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div 
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity",
            isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        >
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-white text-gray-900 hover:bg-gray-50 border-transparent"
              onClick={() => window.open(template.demoUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Preview
            </Button>
            
            <Button 
              size="sm" 
              variant={isSelected ? "default" : "outline"}
              className={isSelected ? "bg-blue-500 text-white" : "bg-white text-gray-900 hover:bg-gray-50"}
              onClick={() => toggleTemplateSelection(template.id)}
            >
              {isSelected && <Check className="w-4 h-4 mr-2" />}
              {isSelected ? "Selected" : "Select"}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{template.name}</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info className="h-4 w-4 text-gray-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{template.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-sm text-blue-500 p-0 h-auto hover:bg-transparent hover:text-blue-600 hover:underline"
            onClick={() => window.open(template.demoUrl, '_blank')}
          >
            View Live Demo
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
          
          {isSelected && (
            <div 
              className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white"
              onClick={() => toggleTemplateSelection(template.id)}
            >
              <Check className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
