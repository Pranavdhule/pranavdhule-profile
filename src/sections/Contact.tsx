import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { ActionButton } from "@/components/ActionButton";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const field =
    "mt-2 w-full rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

  function validate() {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Please write at least 10 characters.";
    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Contact"
          title="Let's work together"
          description="I'm actively looking for entry-level AI/ML, data science and Python development roles. Feel free to reach out."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-semibold">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span className="text-muted-foreground">{profile.location}</span>
              </li>
            </ul>
            <div className="mt-7">
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="glass rounded-3xl p-7">
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={field}
                  placeholder="Your full name"
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={field}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={field}
                  placeholder="Tell me about the role or project…"
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <ActionButton type="submit">
                  <Send className="size-4" aria-hidden="true" />
                  Send message
                </ActionButton>
                <p aria-live="polite" className="text-xs text-muted-foreground">
                  {sent ? "Your email client should now be open with the message ready to send." : ""}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
