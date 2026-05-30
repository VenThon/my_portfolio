import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
      <div>
        {/* <p className="mb-4 text-sm font-medium text-[#58A6FF]">
          Frontend Developer
        </p> */}
        <h1 className="text-5xl font-bold tracking-tight">
          Frontend Developer
        </h1>

        <h2 className="text-2xl font-bold leading-tight md:text-4xl">
          Building modern and responsive web interfaces.
        </h2>

        <p className="mt-6 max-w-xl text-gray-400">
          Hi, I’m Thon. I build clean frontend applications using Next.js,
          React, TypeScript, and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-[#58A6FF] px-5 py-3 font-medium text-white hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-[#30363D] px-5 py-3 font-medium hover:bg-[#161B22]"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>

      <div className="rounded-3xl border border-[#30363D] bg-[#161B22] p-6">
        <div className="rounded-2xl bg-[#0D1117] p-6">
          <p className="text-gray-400">Current Focus</p>
          <h3 className="mt-3 text-2xl font-bold">Frontend Engineering</h3>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✅ Responsive UI</li>
            <li>✅ Component Design</li>
            <li>✅ Dashboard Layout</li>
            <li>✅ Form Validation</li>
            <li>✅ Clean Code Structure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
