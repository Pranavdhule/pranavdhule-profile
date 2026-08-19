import resumeAsset from "@/assets/resume.docx.asset.json";

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

/** TODO: replace placeholders with your actual certifications. */
export const certifications = [
  { name: "Certification name (placeholder)", issuer: "Issuing organization", date: "Month Year", link: "" },
  { name: "Certification name (placeholder)", issuer: "Issuing organization", date: "Month Year", link: "" },
  { name: "Certification name (placeholder)", issuer: "Issuing organization", date: "Month Year", link: "" },
];

/** TODO: replace placeholders with your actual activities. */
export const achievements = [
  { title: "Hackathon participation (placeholder)", detail: "Add event name, year and your contribution." },
  { title: "Technical competition (placeholder)", detail: "Add competition name and outcome." },
  { title: "Academic project work", detail: "Add details of academic project work and your role." },
  { title: "Technical activities (placeholder)", detail: "Add workshops, clubs or seminars you took part in." },
];