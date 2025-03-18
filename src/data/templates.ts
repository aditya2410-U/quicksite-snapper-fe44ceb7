
// Pre-made website templates with associated keywords
export interface Template {
  id: string;
  name: string;
  keyword: string;
  description: string;
  previewImage: string;
  demoUrl: string;
  isPremium?: boolean;
}

export const KEYWORDS = ["pdhome", "agency", "restaurant", "ecommerce", "portfolio", "consulting", "tech", "startup"];

export const TEMPLATES: Template[] = [
  {
    id: "pdhome-1",
    name: "PDHome Classic",
    keyword: "pdhome",
    description: "A sleek, professional digital marketing agency template with elegant dark theme.",
    previewImage: "/lovable-uploads/710f9ddd-04c0-4483-95c8-934d1ba592bc.png",
    demoUrl: "https://example.com/pdhome-1"
  },
  {
    id: "pdhome-2",
    name: "PDHome Modern",
    keyword: "pdhome",
    description: "A bright, vibrant digital agency template with a focus on conversion.",
    previewImage: "/lovable-uploads/9f092316-1ff8-404e-bb95-61c4641d06af.png",
    demoUrl: "https://example.com/pdhome-2"
  },
  {
    id: "pdhome-3",
    name: "PDHome Premium",
    keyword: "pdhome",
    description: "A luxury premium template for established digital marketing businesses.",
    previewImage: "/lovable-uploads/710f9ddd-04c0-4483-95c8-934d1ba592bc.png",
    demoUrl: "https://example.com/pdhome-3",
    isPremium: true
  },
  {
    id: "pdhome-4",
    name: "PDHome Enterprise",
    keyword: "pdhome",
    description: "A comprehensive enterprise solution for digital marketing agencies.",
    previewImage: "/lovable-uploads/9f092316-1ff8-404e-bb95-61c4641d06af.png",
    demoUrl: "https://example.com/pdhome-4"
  },
  {
    id: "agency-1",
    name: "Agency Basic",
    keyword: "agency",
    description: "A simple yet effective template for small agencies.",
    previewImage: "/lovable-uploads/710f9ddd-04c0-4483-95c8-934d1ba592bc.png",
    demoUrl: "https://example.com/agency-1"
  },
  {
    id: "agency-2",
    name: "Agency Pro",
    keyword: "agency",
    description: "A professional template for established agencies.",
    previewImage: "/lovable-uploads/9f092316-1ff8-404e-bb95-61c4641d06af.png",
    demoUrl: "https://example.com/agency-2",
    isPremium: true
  },
  // Add more templates for other keywords as needed
];

// Function to find templates by keyword
export function findTemplatesByKeyword(keyword: string): Template[] {
  return TEMPLATES.filter(template => 
    template.keyword.toLowerCase() === keyword.toLowerCase()
  );
}

// Function to find a template by ID
export function findTemplateById(id: string): Template | undefined {
  return TEMPLATES.find(template => template.id === id);
}

// Function to detect keywords in a text
export function detectKeywords(text: string): string | null {
  const lowerText = text.toLowerCase();
  for (const keyword of KEYWORDS) {
    if (lowerText.includes(keyword.toLowerCase())) {
      return keyword;
    }
  }
  return null;
}
