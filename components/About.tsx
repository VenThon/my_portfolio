import { Code2, Landmark, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-[0.16em] text-[#58A6FF] uppercase">
          Get to Know Me
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          About Me
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          A brief introduction to my background, professional interests, and
          approach to building useful digital products.
        </p>
      </div>

      <article className="overflow-hidden rounded-3xl border border-[#30363D] bg-[#161B22] transition-colors hover:border-[#58A6FF]">
        <div className="border-b border-[#30363D] bg-linear-to-br from-[#172235] to-[#0D1117] p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#30363D] bg-[#161B22] text-[#58A6FF]">
              <Code2 className="size-6" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Frontend Developer
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Digital Transformation Working Group · MPTC
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            <p>
              Hello, I&apos;m Ven Thon, a Frontend Developer passionate about
              creating clean, efficient, and accessible digital experiences. I
              enjoy turning ideas into practical solutions using modern web
              technologies while continuously improving my software engineering
              skills.
            </p>

            <p>
              As a member of the Digital Transformation Working Group at MPTC, I
              contribute to projects that support government digital
              transformation and public service innovation. My interests include
              web development, system design, and exploring technologies that
              create meaningful real-world impact.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-[#30363D] bg-[#0D1117] p-4">
              <Sparkles className="size-5 text-[#58A6FF]" />

              <p className="mt-3 text-sm font-semibold text-white">
                Clean Experiences
              </p>

              <p className="mt-1 text-xs leading-6 text-gray-400">
                Responsive and user-friendly interfaces.
              </p>
            </div>

            <div className="rounded-2xl border border-[#30363D] bg-[#0D1117] p-4">
              <Landmark className="size-5 text-[#58A6FF]" />

              <p className="mt-3 text-sm font-semibold text-white">
                Digital Government
              </p>

              <p className="mt-1 text-xs leading-6 text-gray-400">
                Practical systems that improve public services.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
