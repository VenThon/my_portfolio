// import { skills } from "@/data/skills";

// export default function Skills() {
//   return (
//     <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
//       <div className="container mx-auto ">
//         <div className="mb-10 mt-7">
//           <h2 className="text-3xl font-bold"> Technical Skills</h2>
//           <p className="text-muted-foreground mt-2">
//             Technologies and tools I use to build modern web applications.
//           </p>
//         </div>

//         <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
//           {skills.map((skill) => (
//             <div
//               key={skill.title}
//               className="rounded-2xl border p-6 shadow-sm  transition-colors hover:border-[#58A6FF]"
//             >
//               <h3 className="mb-4 text-xl font-semibold">{skill.title}</h3>

//               <div className="flex flex-wrap gap-2">
//                 {skill.items.map((item) => (
//                   <span
//                     key={item}
//                     className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Code2 } from "lucide-react";

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-[0.16em] text-[#58A6FF] uppercase">
          My Toolkit
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Technical Skills
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Technologies and tools I use to build responsive, maintainable, and
          user-friendly web applications.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className="group flex min-h-64 flex-col overflow-hidden rounded-3xl border border-[#30363D] bg-[#161B22] transition-colors hover:border-[#58A6FF]"
          >
            {/* Card preview */}
            <div className="relative border-b border-[#30363D] bg-linear-to-br from-[#172235] to-[#0D1117] p-5">
              <div className="flex h-24 items-center justify-center">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-[#30363D] bg-[#161B22] text-[#58A6FF] transition-colors group-hover:border-[#58A6FF]">
                  <Code2 className="size-6" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-white">
                {skill.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
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
        ))}
      </div>
    </section>
  );
}
