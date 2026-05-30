import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-3xl font-bold">Featured Projects</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-[#30363D] bg-[#161B22] p-6 hover:border-[#58A6FF]"
          >
            <div className="mb-5 h-40 rounded-2xl bg-[#0D1117]" />

            <h3 className="text-xl font-bold">{project.title}</h3>

            <p className="mt-3 text-sm text-gray-400">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#0D1117] px-3 py-1 text-xs text-[#58A6FF]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
