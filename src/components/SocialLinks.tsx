import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  const links = [
    { label: "GitHub profile", href: profile.github, Icon: Github },
    { label: "LinkedIn profile", href: profile.linkedin, Icon: Linkedin },
    { label: "Send an email", href: `mailto:${profile.email}`, Icon: Mail },
  ];

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={label}
            className="glass inline-flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-glow"
          >
            <Icon className="size-4.5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}