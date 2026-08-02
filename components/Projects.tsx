import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#58A6FF] uppercase">
          Selected work
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          A selection of systems and applications I have worked on, focusing on
          frontend development, clean interfaces, responsive layouts, and API
          integration.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#30363D] bg-[#161B22] transition-colors hover:border-[#58A6FF]">
              <div className="relative border-b border-[#30363D] bg-linear-to-br from-[#172235] to-[#0D1117] p-5">
                <div className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-xl border border-[#30363D] bg-[#161B22] text-[#58A6FF] transition-colors group-hover:border-[#58A6FF]">
                  <ArrowUpRight className="size-5" />
                </div>

                <div className="mt-12 rounded-xl border border-[#30363D] bg-[#161B22] p-4">
                  <div className="mb-3 flex gap-2">
                    <span className="size-2 rounded-full bg-red-400" />
                    <span className="size-2 rounded-full bg-yellow-400" />
                    <span className="size-2 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 w-4/5 rounded-full bg-[#3A4558]" />
                    <div className="h-2 w-1/2 rounded-full bg-[#263145]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#30363D] bg-[#0D1117] px-3 py-1 text-xs font-medium text-[#58A6FF]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
