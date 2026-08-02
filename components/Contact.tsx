import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-[#30363D] bg-[#0D1117]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#58A6FF] uppercase">
              Get in touch
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Let&apos;s build something meaningful
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              I&apos;m open to collaboration, frontend development
              opportunities, and discussions about practical digital products.
            </p>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <Link
              href="mailto:venthon71@gmail.com"
              aria-label="Send email"
              className="flex size-11 items-center justify-center rounded-xl border border-[#30363D] bg-[#161B22] text-gray-300 transition-all hover:-translate-y-1 hover:border-[#58A6FF] hover:text-[#58A6FF]"
            >
              <Mail className="size-5" />
            </Link>

            <Link
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex size-11 items-center justify-center rounded-xl border border-[#30363D] bg-[#161B22] text-gray-300 transition-all hover:-translate-y-1 hover:border-[#58A6FF] hover:text-[#58A6FF]"
            >
              <FaLinkedin className="size-5" />
            </Link>

            <Link
              href="https://github.com/VenThon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex size-11 items-center justify-center rounded-xl border border-[#30363D] bg-[#161B22] text-gray-300 transition-all hover:-translate-y-1 hover:border-[#58A6FF] hover:text-[#58A6FF]"
            >
              <FaGithub className="size-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#30363D] pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ven Thon. All rights reserved.</p>

          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
