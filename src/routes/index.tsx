import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { About } from "@/sections/About";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Resume } from "@/sections/Resume";
import { Skills } from "@/sections/Skills";

const title = "Pranav Anil Dhule — AI/ML Engineer & Python Developer";
const description =
  "Portfolio of Pranav Anil Dhule, B.Tech Computer Engineering graduate building AI/ML, data science and Python applications. Projects, skills, resume and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pranav Anil Dhule",
          jobTitle: "AI/ML Engineer, Python Developer",
          alumniOf: "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere",
          address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
          knowsAbout: ["Machine Learning", "Deep Learning", "Python", "Data Analysis", "SQL"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}
