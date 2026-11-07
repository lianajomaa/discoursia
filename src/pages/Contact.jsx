/**
 * CONTACT  —  /contact
 *
 * A mailto link rather than a form, deliberately: a form needs a server to
 * send the message, and there isn't one yet. A form that silently discarded
 * enquiries would be worse than no form.
 *
 * Swap in a real form once the backend exists.
 */

// lucide dropped brand icons, so LinkedIn uses the generic external-link mark
import { Mail, ExternalLink } from 'lucide-react'

const EMAIL = 'janamsaab15@gmail.com'

function Contact() {
  return (
    <section className="px-8 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-0.5 w-6 bg-navy" />
          <span className="text-xs tracking-[0.2em] text-navy">CONTACT</span>
        </div>

        <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy md:text-5xl">
          Get in touch
        </h1>

        <p className="mt-6 text-sm leading-relaxed text-navy/80 md:text-base">
          Questions about a course, enrolling, or a package for your university or
          organisation? Send us a message and we&apos;ll come back to you.
        </p>

        <div className="mt-10 space-y-4">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-navy/40"
          >
            <Mail size={20} className="flex-shrink-0 text-navy" aria-hidden="true" />
            <span>
              <span className="block text-sm font-medium text-navy">Email</span>
              <span className="block text-[13px] text-navy/70">{EMAIL}</span>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/jana-saab/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-navy/40"
          >
            <ExternalLink size={20} className="flex-shrink-0 text-navy" aria-hidden="true" />
            <span>
              <span className="block text-sm font-medium text-navy">LinkedIn</span>
              <span className="block text-[13px] text-navy/70">Connect with us</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
