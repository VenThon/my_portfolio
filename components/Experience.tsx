import Image from "next/image";

import { history } from "@/data/history";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-16"
    >
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-[0.16em] text-[#58A6FF] uppercase">
          Professional Journey
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Work Experience
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          My professional experience building digital systems, user-friendly
          interfaces, and practical software solutions for government and
          technology organizations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {history.map((item) => (
          <article
            key={`${item.role}-${item.organisation}-${item.startDate}`}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#30363D] bg-[#161B22] transition-colors hover:border-[#58A6FF]"
          >
            {/* Card header */}
            <div className="border-b border-[#30363D] bg-linear-to-br from-[#172235] to-[#0D1117] p-5">
              <div className="flex items-start gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-[#30363D] bg-[#161B22]">
                  <Image
                    src={item.imageSrc}
                    alt={`${item.organisation} logo`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    {item.organisation}
                  </p>

                  <span className="mt-3 inline-flex w-fit rounded-full border border-[#30363D] bg-[#161B22] px-3 py-1 text-xs font-medium text-[#58A6FF]">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Card content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <ul className="space-y-3 text-sm leading-6 text-gray-300">
                {item.experiences.map((experience) => (
                  <li key={experience} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#58A6FF]" />
                    <span>{experience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
