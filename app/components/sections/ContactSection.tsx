// Contact Section - Direct communication channels

import { Section, SectionHeader, Container } from "@/app/components/ui/Section";
import { ContactChannel } from "@/app/data/portfolio";
import { ReactNode } from "react";

interface ContactSectionProps {
  contacts: ContactChannel[];
}

const contactIcons: Record<ContactChannel["type"], ReactNode> = {
  email: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  telegram: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
  viber: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.182.518 6.792.39 10.019c-.13 3.227-.27 9.283 5.686 10.963h.004l-.003 2.51s-.04.997.63 1.204c.777.242 1.36-.502 2.18-1.388.45-.487.97-1.089 1.397-1.59 3.855.322 6.82-.418 7.16-.529.777-.254 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.357-11.548l.002-.001c-.602-.543-3.063-2.267-8.728-2.445 0 0-.392-.02-.855-.013zm.161 1.687c.397-.006.718.009.718.009 4.789.151 6.88 1.524 7.378 1.972v.002c1.636 1.408 2.474 4.703 1.839 9.832-.592 4.83-4.087 5.122-4.741 5.335-.282.092-2.837.727-6.088.548 0 0-2.412 2.909-3.166 3.663-.12.119-.26.166-.352.144-.128-.03-.164-.18-.163-.397l.025-3.97c-4.946-1.4-4.652-6.503-4.546-9.185.107-2.682.747-4.906 2.206-6.35 1.9-1.744 5.473-2.094 6.89-2.103zm-.132 2.79c-.166.003-.333.025-.333.025-2.046.193-3.27 1.044-3.27 1.044-.826.571-1.437 1.338-1.811 2.246-.624 1.518-.426 3.376.575 4.57.16.19.365.381.607.569.798.617 1.92 1.04 3.318 1.253.33.05.666.085 1.008.103.172.01.34.013.506.013 1.152 0 2.18-.168 3.016-.454a5.888 5.888 0 0 0 1.333-.673c.252-.175.474-.367.663-.575.99-1.106 1.17-2.853.57-4.27-.379-.894-.997-1.653-1.824-2.214 0 0-.87-.644-2.494-1.035 0 0-.562-.115-1.141-.126-.243-.004-.49.007-.723.024z"/>
    </svg>
  ),
  whatsapp: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

const contactColors: Record<ContactChannel["type"], string> = {
  email: "hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-800",
  telegram: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800",
  viber: "hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-200 dark:hover:border-purple-800",
  whatsapp: "hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 hover:border-green-200 dark:hover:border-green-800",
};

export function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <Section id="contact" className="bg-zinc-50 dark:bg-zinc-900/50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            title="Let's Connect"
            subtitle="Feel free to reach out for collaborations, opportunities, or just a friendly chat"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => (
              <a
                key={contact.type}
                href={contact.href}
                target={contact.type === "email" ? undefined : "_blank"}
                rel={contact.type === "email" ? undefined : "noopener noreferrer"}
                className={`group flex items-center gap-4 rounded-xl bg-white dark:bg-zinc-800/50 p-4 border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 transition-all ${contactColors[contact.type]}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-700 group-hover:bg-transparent transition-colors">
                  {contactIcons[contact.type]}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {contact.label}
                  </p>
                  <p className="text-sm">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
            I typically respond within 24-48 hours
          </p>
        </div>
      </Container>
    </Section>
  );
}
