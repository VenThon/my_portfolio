import { educations } from "@/data/education";

export default function Education() {
  return (
    <section id="educations" className="mx-auto max-w-6xl px-6 py-10">
      <div className="container">
        <div className="mb-10 mt-7">
          <h2 className="text-3xl font-bold">Education & Certifications</h2>
          <p className="text-muted-foreground mt-2">
            My academic background and international learning experiences.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-6">
          {educations.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border p-6 transition  hover:border-[#58A6FF]"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="text-muted-foreground">
                    {item.institution}
                    {item.location && ` • ${item.location}`}
                  </p>
                </div>

                <span className="text-muted-foreground text-sm">
                  {item.period}
                </span>
              </div>

              <p className="text-muted-foreground mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
