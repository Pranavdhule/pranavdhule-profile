import { SocialLinks } from "@/components/SocialLinks";
import { navLinks, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <a href="#home" className="font-display text-base font-semibold">
          Pranav<span className="text-gradient"> Dhule</span>
        </a>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <SocialLinks />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React, TanStack Start and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
