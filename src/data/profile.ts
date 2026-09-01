import resumeAsset from "@/assets/resume.docx.asset.json";
import certGenAiMsft from "@/assets/cert-genai-microsoft-linkedin.pdf.asset.json";
import certChatGptWeb from "@/assets/cert-chatgpt-web-developers.pdf.asset.json";
import certIntroGenAi from "@/assets/cert-intro-generative-ai-simplilearn.pdf.asset.json";
import certTechsaksham from "@/assets/cert-techsaksham-ir4-foundation.pdf.asset.json";
import certOracleAgenticAi from "@/assets/cert-oracle-agentic-ai.pdf.asset.json";

/**
 * Edit this file to update your personal details.
 */
export const profile = {
  name: "Pranav Anil Dhule",
  shortName: "Pranav Dhule",
  role: "AI/ML Engineer | Python Developer | Data Analyst",
  location: "Maharashtra, India",
  intro:
    "Computer Engineering graduate passionate about Artificial Intelligence, Machine Learning, Python development, and data-driven solutions. I build practical applications that solve real-world problems using machine learning, deep learning, and modern software technologies.",
  email: "pranavdhule04@gmail.com",
  phone: "+91 70573 79056",
  github: "https://github.com/Pranavdhule",
  linkedin: "https://www.linkedin.com/in/pranav-dhule-4882b6254/",
  resumeUrl: resumeAsset.url,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { title: "B.Tech Computer Engineering", detail: "DBATU, Lonere" },
  { title: "Multiple AI/ML Projects", detail: "End-to-end, hands-on builds" },
  { title: "Machine Learning & Deep Learning", detail: "Scikit-learn, TensorFlow, Keras" },
  { title: "Python & Data Analytics", detail: "Pandas, NumPy, SQL, visualization" },
];

export const education = [
  {
    degree: "B.Tech – Computer Engineering",
    institution: "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere",
    detail: "2022 – 2026 · CGPA 7.50 / 10. Coursework across programming, data structures, databases, AI/ML and software engineering.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "S. B. Junior College of Science, Telhara",
    detail: "2021 – 2022 · Score: 83.00% (Science stream).",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "S. B. High School, Telhara",
    detail: "2019 – 2020 · Score: 93.40%.",
  },
];

export const certifications = [
  {
    name: "Oracle Certified Foundations Associate — Agentic AI",
    issuer: "Oracle University",
    date: "Aug 2026 · Credential ID 103524491AAI26OFA",
    link: certOracleAgenticAi.url,
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    date: "Aug 2026",
    link: certGenAiMsft.url,
  },
  {
    name: "ChatGPT for Web Developers",
    issuer: "LinkedIn Learning",
    date: "Aug 2026",
    link: certChatGptWeb.url,
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Simplilearn SkillUp · Powered by Google Cloud",
    date: "Sep 2025",
    link: certIntroGenAi.url,
  },
  {
    name: "IR4.0 Foundation — TechSaksham",
    issuer: "Microsoft & SAP, implemented by Edunet Foundation",
    date: "Certificate ID: TSPIN24_77587",
    link: certTechsaksham.url,
  },
];
