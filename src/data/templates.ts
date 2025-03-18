
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

export const KEYWORDS = ["pdhome", "antique curiosties", "tufanrugs", "freyrs", "mycasualspace"];

export const TEMPLATES: Template[] = [
  // PDHome Templates
  {
    id: "pdhome-1",
    name: "PDHome Classic",
    keyword: "pdhome",
    description: "A sleek, professional home decor website with elegant styling and intuitive navigation.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://pdhome1.example.com"
  },
  {
    id: "pdhome-2",
    name: "PDHome Modern",
    keyword: "pdhome",
    description: "A bright, contemporary home furnishings site with a focus on showcasing products beautifully.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://pdhome2.example.com"
  },
  {
    id: "pdhome-3",
    name: "PDHome Premium",
    keyword: "pdhome",
    description: "A luxury premium template for established home decor businesses with advanced features.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://pdhome3.example.com",
    isPremium: true
  },
  
  // Freyrs Templates
  {
    id: "freyrs-1",
    name: "Freyrs Classic",
    keyword: "freyrs",
    description: "A stylish eyewear e-commerce site with elegant design and smooth shopping experience.",
    previewImage: "/lovable-uploads/12867516-caee-4cb7-90b0-f1c721cc101c.png",
    demoUrl: "https://freyrs1.example.com"
  },
  {
    id: "freyrs-2",
    name: "Freyrs Modern",
    keyword: "freyrs",
    description: "A contemporary eyewear website with cutting-edge design and seamless mobile experience.",
    previewImage: "/lovable-uploads/12867516-caee-4cb7-90b0-f1c721cc101c.png",
    demoUrl: "https://freyrs2.example.com"
  },
  {
    id: "freyrs-3",
    name: "Freyrs Premium",
    keyword: "freyrs",
    description: "A premium eyewear site template with advanced filtering and product showcase features.",
    previewImage: "/lovable-uploads/12867516-caee-4cb7-90b0-f1c721cc101c.png",
    demoUrl: "https://freyrs3.example.com",
    isPremium: true
  },
  
  // Antique Curiosities Templates
  {
    id: "antique-1",
    name: "Antique Curiosities Classic",
    keyword: "antique curiosties",
    description: "A vintage-styled e-commerce site perfect for antique stores and collectors.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://antiquecuriosities1.example.com"
  },
  {
    id: "antique-2",
    name: "Antique Curiosities Modern",
    keyword: "antique curiosties",
    description: "A contemporary template for antique businesses with a clean, professional appearance.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://antiquecuriosities2.example.com"
  },
  {
    id: "antique-3",
    name: "Antique Curiosities Premium",
    keyword: "antique curiosties",
    description: "A luxury template for high-end antique dealers with advanced catalog features.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://antiquecuriosities3.example.com",
    isPremium: true
  },
  
  // Tufan Rugs Templates
  {
    id: "tufanrugs-1",
    name: "Tufan Rugs Classic",
    keyword: "tufanrugs",
    description: "An elegant template for rug retailers with beautiful product showcasing.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://tufanrugs1.example.com"
  },
  {
    id: "tufanrugs-2",
    name: "Tufan Rugs Modern",
    keyword: "tufanrugs",
    description: "A modern, responsive design for rug e-commerce with advanced filtering.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://tufanrugs2.example.com"
  },
  {
    id: "tufanrugs-3",
    name: "Tufan Rugs Premium",
    keyword: "tufanrugs",
    description: "A premium template for high-end rug retailers with 3D viewing capabilities.",
    previewImage: "/lovable-uploads/d4549dc3-4c11-4ef4-89b3-46b263848296.png",
    demoUrl: "https://tufanrugs3.example.com",
    isPremium: true
  },
  
  // My Casual Space Templates
  {
    id: "mycasualspace-1",
    name: "My Casual Space Classic",
    keyword: "mycasualspace",
    description: "A clean, minimalist furniture site template with intuitive navigation.",
    previewImage: "/lovable-uploads/12867516-caee-4cb7-90b0-f1c721cc101c.png",
    demoUrl: "https://mycasualspace1.example.com"
  },
  {
    id: "mycasualspace-2",
    name: "My Casual Space Modern",
    keyword: "mycasualspace",
    description: "A contemporary furniture and lifestyle site with advanced product showcasing.",
    previewImage: "/lovable-uploads/12867516-caee-4cb7-90b0-f1c721cc101c.png",
    demoUrl: "https://mycasualspace2.example.com"
  },
  {
    id: "mycasualspace-3",
    name: "My Casual Space Premium",
    keyword: "mycasualspace",
    description: "A premium home decor and furniture template with interior design visualization tools.",
    previewImage: "/lovable-uploads/12867516-caee-4cb7-90b0-f1c721cc101c.png",
    demoUrl: "https://mycasualspace3.example.com",
    isPremium: true
  }
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
