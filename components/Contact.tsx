import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Contact() {
  return (
    <footer id="contact" className="py-10 ">
      <div className="mx-auto max-w-6xl px-6 ">
        <Separator className="mb-8 h-0.5 bg-white" />
      </div>
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
        <h2 className="text-2xl font-bold">Contact Me</h2>

        <p className="text-muted-foreground max-w-md">
          Feel free to reach out for collaboration, project discussions, or just
          to say hello.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:venthon71@gmail.com"
            className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 " />
          </Link>

          <Link
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5 " />
          </Link>

          <Link
            href="https://github.com/VenThon"
            target="_blank"
            className="rounded-xl border border-[#30363D] p-3 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5 " />
          </Link>
        </div>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ven Thon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
