import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-3xl font-bold">Frontend Skills</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-[#30363D] bg-[#161B22] p-5 text-center hover:border-[#58A6FF]"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
