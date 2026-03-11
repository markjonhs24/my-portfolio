// Portfolio Data Model - Centralized content for maintainability

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "cloud"
  | "mobile"
  | "database"
  | "tools"
  | "methodology";

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  highlights: string[];
  technologies: string[];
  type: "mobile" | "web" | "pos";
  status: "production" | "development";
  image?: string;
  links?: {
    playStore?: string;
    appStore?: string;
    website?: string;
  };
}

export interface ContactChannel {
  type: "email" | "telegram" | "viber" | "whatsapp";
  label: string;
  value: string;
  href: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    summary: string;
  };
  skills: Skill[];
  projects: Project[];
  contacts: ContactChannel[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mark John Pecson",
    role: "Full Stack & Mobile Developer",
    tagline: "Building scalable applications from concept to production",
    summary:
      "Passionate software engineer with expertise in mobile and web development. Specialized in building end-to-end solutions using modern technologies like Flutter, React, Next.js, and cloud services. Experienced in delivering production-ready applications with clean architecture and best practices.",
  },

  skills: [
    // Languages
    { name: "Java", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "PHP", category: "languages" },
    { name: "SQL", category: "languages" },

    // Frontend
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },

    // Backend
    { name: "Node.js", category: "backend" },
    { name: "REST API", category: "backend" },
    { name: "WordPress", category: "backend" },

    // Cloud & Infrastructure
    { name: "AWS Lambda", category: "cloud" },
    { name: "AWS S3", category: "cloud" },
    { name: "AWS RDS", category: "cloud" },
    { name: "AWS EC2", category: "cloud" },
    { name: "Firebase", category: "cloud" },
    { name: "MQTT", category: "cloud" },
    { name: "Push Notifications", category: "cloud" },

    // Mobile
    { name: "Flutter", category: "mobile" },
    { name: "BLoC", category: "mobile" },
    { name: "Provider", category: "mobile" },

    // Database
    { name: "MySQL", category: "database" },
    { name: "PostgreSQL", category: "database" },

    // Tools
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "GitLab", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Swagger", category: "tools" },
    { name: "Jira", category: "tools" },
    { name: "Trello", category: "tools" },

    // Methodology & Architecture
    { name: "Clean Architecture", category: "methodology" },
    { name: "MVVM", category: "methodology" },
    { name: "MVC", category: "methodology" },
    { name: "Agile", category: "methodology" },
    { name: "Scrum", category: "methodology" },
    { name: "Kanban", category: "methodology" },
  ],

  projects: [
    {
      id: "ezman-admin",
      title: "EZman Admin Module",
      description:
        "Comprehensive admin dashboard for managing the EZman ecosystem, connected to Customer, Rider, and Merchant mobile applications.",
      role: "Full Stack Web Developer",
      highlights: [
        "Role-Based Access Control (RBAC) with granular permissions",
        "Sales reports and analytics dashboard",
        "Restaurant, Rider, and Menu management systems",
        "System settings, audit logs, and operational monitoring",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      type: "web",
      status: "production",
      image: "/projects/ezman-admin.svg",
    },
    {
      id: "ezman-customer",
      title: "EZman Food & Deliveries",
      description:
        "Super app featuring food delivery from restaurants, groceries/mart/medicine ordering, and EZ delivery for item pickup and dropoff services.",
      role: "Full Stack Mobile Developer",
      highlights: [
        "Multi-service platform with food, grocery, and delivery modules",
        "Real-time order tracking and status updates",
        "Integrated payment systems and user authentication",
        "Location-based restaurant and store discovery",
      ],
      technologies: ["Flutter", "BLoC", "Firebase", "REST API", "Google Maps"],
      type: "mobile",
      status: "production",
      image: "/projects/ezman-customer.svg",
    },
    {
      id: "ezman-rider",
      title: "EZman Rider",
      description:
        "Partner rider application for receiving real-time bookings and deliveries with comprehensive income tracking and navigation.",
      role: "Mobile Developer",
      highlights: [
        "Real-time booking notifications via MQTT",
        "Income statement and earnings dashboard",
        "Integrated maps for navigation and routing",
        "Order lifecycle management",
      ],
      technologies: ["Flutter", "Provider", "MQTT", "Google Maps", "Firebase"],
      type: "mobile",
      status: "production",
      image: "/projects/ezman-rider.svg",
    },
    {
      id: "ezman-merchant",
      title: "EZman Merchant",
      description:
        "POS device and application for merchants with menu management, store operations, and real-time order processing.",
      role: "Mobile Developer",
      highlights: [
        "Point of Sale system with menu management",
        "Store and inventory management",
        "Real-time order receiving and processing",
        "Complete transaction history and analytics",
      ],
      technologies: ["Flutter", "BLoC", "Firebase", "REST API"],
      type: "pos",
      status: "production",
      image: "/projects/ezman-merchant.svg",
    },
    {
      id: "smileph",
      title: "SmilePH",
      description:
        "Insurance application providing group health insurance and individual life insurance services.",
      role: "Mobile Developer",
      highlights: [
        "Group health insurance management",
        "Individual life insurance enrollment",
        "Policy management and claims tracking",
        "Integrated teleconsultation booking",
      ],
      technologies: ["Flutter", "REST API", "Firebase", "Push Notifications"],
      type: "mobile",
      status: "production",
      image: "/projects/smileph.svg",
    },
    {
      id: "doctors-app",
      title: "Doctors App",
      description:
        "Healthcare provider application connected to SmilePH for online consultations and prescription management.",
      role: "Mobile Developer",
      highlights: [
        "Calendar-based appointment management",
        "Teleconsultation video calls",
        "Digital prescription system",
        "Patient health records integration",
      ],
      technologies: ["Flutter", "REST API", "Firebase", "WebRTC"],
      type: "mobile",
      status: "production",
      image: "/projects/doctors-app.svg",
    },
    {
      id: "pickappsph-web",
      title: "pickappsph.com",
      description:
        "E-commerce website built on WordPress with WooCommerce for online shopping.",
      role: "Web Developer",
      highlights: [
        "Full e-commerce functionality",
        "Product catalog and inventory",
        "Payment gateway integration",
        "Order management system",
      ],
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      type: "web",
      status: "production",
      image: "/projects/pickappsph.svg",
      links: {
        website: "https://pickappsph.com",
      },
    },
    {
      id: "pickapps-mobile",
      title: "PickApps",
      description:
        "E-commerce mobile application that integrates with WooCommerce API for seamless shopping experience.",
      role: "Mobile Developer",
      highlights: [
        "WooCommerce API integration",
        "Native mobile shopping experience",
        "Cart and checkout functionality",
        "Push notification for orders",
      ],
      technologies: ["Flutter", "WooCommerce API", "REST API", "Firebase"],
      type: "mobile",
      status: "production",
      image: "/projects/pickapps.svg",
    },
  ],

  contacts: [
    {
      type: "email",
      label: "Email",
      value: "markjohnpecson22@gmail.com",
      href: "mailto:markjohnpecson22@gmail.com",
    },
    {
      type: "telegram",
      label: "Telegram",
      value: "+63 976 015 8498",
      href: "https://t.me/+639760158498",
    },
    {
      type: "viber",
      label: "Viber",
      value: "+63 948 861 8165",
      href: "viber://chat?number=+639488618165",
    },
    {
      type: "whatsapp",
      label: "WhatsApp",
      value: "+63 976 015 8498",
      href: "https://wa.me/639760158498",
    },
  ],
};

// Utility functions for data access
export const getSkillsByCategory = (
  skills: Skill[]
): Record<SkillCategory, Skill[]> => {
  return skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<SkillCategory, Skill[]>
  );
};

export const skillCategoryLabels: Record<SkillCategory, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud & Infrastructure",
  mobile: "Mobile",
  database: "Database",
  tools: "Tools",
  methodology: "Methodology & Architecture",
};
