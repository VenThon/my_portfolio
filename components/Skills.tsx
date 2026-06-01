import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-muted-foreground mt-2">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border p-6 shadow-sm  transition-colors hover:border-[#58A6FF]"
            >
              <h3 className="mb-4 text-xl font-semibold">{skill.title}</h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
