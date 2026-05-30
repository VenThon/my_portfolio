import { Laptop, LinkIcon, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
      >
        <Laptop size={20} />
      </a>

      <a
        href="https://linkedin.com/in/your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
      >
        <LinkIcon size={20} />
      </a>

      <a
        href="mailto:your-email@example.com"
        className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
