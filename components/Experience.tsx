import { history } from "@/data/history";
import Image from "next/image";
export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="mt-7 text-3xl font-bold text-white">Work Experience</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-2">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-2xl border border-[#30363D] bg-[#161B22] p-5 transition-colors hover:border-[#58A6FF]"
          >
            <div className="shrink-0">
              <Image
                src={item.imageSrc}
                alt={item.organisation}
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{item.role}</h2>
                  <h3 className="text-sm text-gray-400">{item.organisation}</h3>
                </div>

                <div className="text-sm text-gray-400">
                  {item.startDate} — {item.endDate}
                </div>
              </div>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
                {item.experiences.map((experience, expIndex) => (
                  <li key={expIndex}>{experience}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
