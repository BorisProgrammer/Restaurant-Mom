import type { SocialLink } from "@/types";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const icons = {
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth={1.6} />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth={1.6} />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  ),
  tiktok: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.5 3c.3 1.7 1.4 3.1 3.1 3.6.4.1.9.2 1.4.2v3.2c-1.6 0-3.1-.5-4.4-1.4v6.6c0 3.1-2.5 5.6-5.6 5.6S5.4 18.3 5.4 15.2c0-3 2.3-5.4 5.2-5.6v3.3c-1.2.2-2.1 1.2-2.1 2.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V3h2.9Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-4 ${className}`.trim()}>
      {links.map((link) =>
        link.url ? (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/40 text-charcoal shadow-sm backdrop-blur-md backdrop-saturate-150 transition-colors hover:border-brand-red/40 hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              {icons[link.platform]}
            </a>
          </li>
        ) : (
          <li key={link.platform}>
            <span
              role="img"
              aria-label={`${link.label} — próximamente`}
              title={`${link.label} — próximamente`}
              className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-charcoal/10 text-charcoal/30"
            >
              {icons[link.platform]}
            </span>
          </li>
        ),
      )}
    </ul>
  );
}
