import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/VenThon"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
      >
        <FaGithub className="h-5 w-5" />
      </a>

      <a
        href="https://linkedin.com/in/your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
      >
        <FaLinkedin className="h-5 w-5" />
      </a>

      <a
        href="mailto:venthon71@gmai.com"
        className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
