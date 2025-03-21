
// Pre-made website templates with associated keywords
export interface Template {
  id: string;
  name: string;
  keywords: string[];  // Changed from singular keyword to keywords array
  description: string;
  previewImage: string;
  demoUrl: string;
  referenceUrl?: string;
  isPremium?: boolean;
}

export const KEYWORDS = ["pdhome", "freyrs", "cwilighting"];

// Mapping between business types and keywords
export const BUSINESS_TYPE_KEYWORDS = {
  "HomeDecor": ["pdhome"],
  "Wearables": ["freyrs"],
  "Lighting": ["cwilighting"]
};

// Define recognizable URL patterns for each keyword
export const REFERENCE_URLS: Record<string, string[]> = {
  "pdhome": ["pdhome", "pd-home", "pdhome.com", "pdhome.wizcommerce"],
  "freyrs": ["freyrs", "freyrs.com", "freyr.com"],
  "cwilighting": ["cwilighting", "cwi-lighting", "https://cwilighting.wizcommerce.com/"],
};

export const TEMPLATES: Template[] = [
  // PDHome Templates
  {
    id: "pdhome-1",
    name: "PDHome Classic",
    keywords: ["pdhome", "pd-home","PD Home", "PDHome"],
    description: "A sleek, professional home decor website with elegant styling and intuitive navigation.",
    previewImage: "/lovable-uploads/pdhome_classic.png",
    demoUrl: "http://pdhomeclassic.wizcommerce.com/",
    referenceUrl: "pdhome.com"
  },
  {
    id: "pdhome-2",
    name: "PDHome Modern",
    keywords: ["pdhome", "pd-home","PD Home", "PDHome"],
    description: "A bright, contemporary home furnishings site with a focus on showcasing products beautifully.",
    previewImage: "/lovable-uploads/pdhome_modern.png",
    demoUrl: "https://pdhomemodern.wizcommerce.com/",
    referenceUrl: "pdhome.com"
  },
  {
    id: "pdhome-3",
    name: "PDHome Premium",
    keywords: ["pdhome", "pd-home","PD Home", "PDHome"],
    description: "A luxury premium template for established home decor businesses with advanced features.",
    previewImage: "/lovable-uploads/pdhome_premium.png",
    demoUrl: "https://pdhomepremium.wizcommerce.com/",
    isPremium: true,
    referenceUrl: "pdhome.com"
  },
  {
    id: "pdhome-4",
    name: "PDHome Vintage",
    keywords: ["pdhome", "pd-home","PD Home", "PDHome"],
    description: "A luxury premium template for established home decor businesses with advanced features.",
    previewImage: "/lovable-uploads/pdhome_vintage.png",
    demoUrl: "https://pdhomevintage.wizcommerce.com/",
    isPremium: true,
    referenceUrl: "pdhome.com"
  },
  {
    id: "pdhome-5",
    name: "PDHome Plus",
    keywords: ["pdhome", "pd-home","PD Home", "PDHome"],
    description: "A luxury premium template for established home decor businesses with advanced features.",
    previewImage: "/lovable-uploads/pdhome_plus.png",
    demoUrl: "https://pdhomeplus.wizcommerce.com/",
    isPremium: true,
    referenceUrl: "pdhome.com"
  },
  
  // Freyrs Templates
  {
    id: "freyrs-1",
    name: "Freyrs Classic",
    keywords: ["freyrs", "freyr","Freyrs"],
    description: "A stylish eyewear e-commerce site with elegant design and smooth shopping experience.",
    previewImage: "/lovable-uploads/freyrs_classic.png",
    demoUrl: "https://freyrsclassic.wizcommerce.com/",
    referenceUrl: "freyrs.com"
  },
  {
    id: "freyrs-2",
    name: "Freyrs Modern",
    keywords: ["freyrs", "freyr","Freyrs"],
    description: "A contemporary eyewear website with cutting-edge design and seamless mobile experience.",
    previewImage: "/lovable-uploads/freyrs_modern.png",
    demoUrl: "https://freyrsmodern.wizcommerce.com/",
    referenceUrl: "freyrs.com"
  },
  {
    id: "freyrs-3",
    name: "Freyrs Premium",
    keywords: ["freyrs", "freyr","Freyrs"],
    description: "A premium eyewear site template with advanced filtering and product showcase features.",
    previewImage: "/lovable-uploads/12867516-caee-4cb7-90b0-f1c721cc101c.png",
    demoUrl: "https://freyrs3.example.com",
    isPremium: true,
    referenceUrl: "freyrs.com"
  },
  {
    id: "freyrs-4",
    name: "Freyrs vintage",
    keywords: ["freyrs", "freyr","Freyrs"],
    description: "A premium eyewear site template with advanced filtering and product showcase features.",
    previewImage: "/lovable-uploads/freyrs_vintage.png",
    demoUrl: "https://freyrsvintage.wizcommerce.com/",
    isPremium: true,
    referenceUrl: "freyrs.com"
  },
  {
    id: "freyrs-5",
    name: "Freyrs plus",
    keywords: ["freyrs", "freyr","Freyrs"],
    description: "A premium eyewear site template with advanced filtering and product showcase features.",
    previewImage: "/lovable-uploads/freyrs_plus.png",
    demoUrl: "https://freyrsplus.wizcommerce.com/",
    isPremium: true,
    referenceUrl: "freyrs.com"
  },
  

  {
    id: "cwilighting-1",
    name: "CWI Lightning Classic",
    keywords: ["cwilighting", "CWI Lightning","CWI","cwi"],
    description: "A vintage-styled e-commerce site perfect for antique stores and collectors.",
    previewImage: "/lovable-uploads/cwi_classic.png",
    demoUrl: "https://cwilightingclassic.wizcommerce.com/",
    referenceUrl: "cwilighting.com"
  },
  {
    id: "cwilighting-2",
    name: "CWI Lightning Modern",
    keywords: ["cwilighting", "CWI Lightning","CWI","cwi"],
    description: "A contemporary template for antique businesses with a clean, professional appearance.",
    previewImage: "/lovable-uploads/cwi_modern.png",
    demoUrl: "https://cwilightingmodern.wizcommerce.com/",
    referenceUrl: "cwilighting.com"
  },
  {
    id: "cwilighting-3",
    name: "CWI Lightning Premium",
    keywords: ["cwilighting", "CWI Lightning","CWI","cwi"],
    description: "A luxury template for high-end antique dealers with advanced catalog features.",
    previewImage: "/lovable-uploads/cwi_premium.png",
    demoUrl: "https://cwilightingpremium.wizcommerce.com/",
    isPremium: true,
    referenceUrl: "cwilighting.com"
  },
  {
    id: "cwilighting-4",
    name: "CWI Lightning Vintage",
    keywords: ["cwilighting", "CWI Lightning","CWI","cwi"],
    description: "A luxury template for high-end antique dealers with advanced catalog features.",
    previewImage: "/lovable-uploads/cwi_vintage.png",
    demoUrl: "https://cwilightingvintage.wizcommerce.com/",
    isPremium: true,
    referenceUrl: "cwilighting.com"
  },
  {
    id: "cwilighting-5",
    name: "CWI Lightning Plus",
    keywords: ["cwilighting", "CWI Lightning","CWI","cwi"],
    description: "A luxury template for high-end antique dealers with advanced catalog features.",
    previewImage: "/lovable-uploads/cwi_plus.png",
    demoUrl: "https://cwilightingplus.wizcommerce.com/",
    isPremium: true,
    referenceUrl: "cwilighting.com"
  },
  
  
];

// Function to find templates by keyword
export function findTemplatesByKeyword(keyword: string): Template[] {
  return TEMPLATES.filter(template => 
    template.keywords.some(k => k.toLowerCase() === keyword.toLowerCase())
  );
}

// Improved function to find templates by reference URL
export function findTemplatesByReferenceUrl(referenceUrl: string): Template[] {
  // First clean the URL
  const cleanUrl = referenceUrl.toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '');

  // Try to find matching keywords in the URL
  const matchedTemplates: Template[] = [];
  
  // Check each keyword group for matches in the URL
  for (const [keywordGroup, urlPatterns] of Object.entries(REFERENCE_URLS)) {
    for (const pattern of urlPatterns) {
      if (cleanUrl.includes(pattern.toLowerCase())) {
        // Found a match, add templates with this keyword
        const templates = findTemplatesByKeyword(keywordGroup);
        matchedTemplates.push(...templates);
        break; // Exit the pattern loop once we find a match
      }
    }
  }
  
  return matchedTemplates;
}

// Function to find templates by business type
export function findTemplatesByBusinessType(businessType: string): Template[] {
  const keywords = BUSINESS_TYPE_KEYWORDS[businessType as keyof typeof BUSINESS_TYPE_KEYWORDS] || [];
  
  if (keywords.length > 0) {
    const templates: Template[] = [];
    
    for (const keyword of keywords) {
      const keywordTemplates = findTemplatesByKeyword(keyword);
      templates.push(...keywordTemplates);
    }
    
    // Remove duplicates
    return Array.from(new Set(templates.map(t => t.id)))
      .map(id => templates.find(t => t.id === id))
      .filter(Boolean) as Template[];
  }
  
  return [];
}

// Function to find a template by ID
export function findTemplateById(id: string): Template | undefined {
  return TEMPLATES.find(template => template.id === id);
}

// Function to detect keywords in a text
export function detectKeywords(text: string): string[] {
  const lowerText = text.toLowerCase();
  const foundKeywords = [];
  
  for (const keyword of KEYWORDS) {
    if (lowerText.includes(keyword.toLowerCase())) {
      foundKeywords.push(keyword);
    }
  }
  
  return foundKeywords;
}
