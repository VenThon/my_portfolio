import Image from "next/image";

import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16 lg:gap-16">
      <div className="order-2 md:order-1">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#30363D] bg-[#161B22] px-3 py-1.5 text-sm text-[#58A6FF]">
          <span className="size-2 rounded-full bg-green-400" />
          Available for collaboration
        </div>

        <p className="text-lg font-medium text-[#58A6FF]">Hello, I&apos;m</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Thon Ven
        </h1>

        <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-200 sm:text-3xl">
          Frontend Developer
        </h2>

        <p className="mt-3 text-sm font-medium text-gray-400 sm:text-base">
          Digital Transformation Working Group · MPTC
        </p>

        <p className="mt-5 max-w-xl text-base leading-8 text-gray-400">
          I build modern, responsive, and user-friendly web applications.
          Currently, I contribute to digital transformation initiatives at MPTC
          as a Frontend Developer and a member of the Digital Transformation
          Working Group.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-[#58A6FF] px-5 py-3 text-sm font-semibold text-[#0D1117] transition hover:-translate-y-0.5 hover:bg-[#79B8FF]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-[#30363D] bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#58A6FF] hover:bg-[#161B22]"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <div className="relative">
          <div className="absolute inset-4 rounded-full bg-[#58A6FF]/20 blur-3xl" />

          <div className="relative size-60 overflow-hidden rounded-full border-4 border-[#30363D] bg-[#161B22] shadow-2xl shadow-black/40 sm:size-72 lg:size-80">
            <Image
              src="/history/profile.jpg"
              alt="Portrait of Thon Ven"
              fill
              priority
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
              className="object-cover"
            />
          </div>

          <div className="absolute right-1 bottom-5 rounded-xl border border-[#30363D] bg-[#161B22] px-4 py-2 shadow-lg">
            <p className="text-xs text-gray-400">Focused on</p>
            <p className="text-sm font-semibold text-white">React & Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
