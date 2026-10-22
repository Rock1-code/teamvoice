
import Link from "next/link";

const features = [
  {
    icon: "🏆",
    title: "Employee of the Month",
    description: "Vote for a teammate who deserves recognition.",
    href: "/vote",
  },
  {
    icon: "💡",
    title: "Suggestions & Feedback",
    description: "Share your ideas, concerns, or appreciation.",
    href: "/suggestions",
  },
  {
    icon: "📊",
    title: "Staff Polls",
    description: "Participate in workplace decisions.",
    href: "/polls",
  },
  {
    icon: "📢",
    title: "Announcements",
    description: "Stay updated with important team news.",
    href: "/announcements",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-extrabold text-blue-600">
              TeamVoice
            </h1>
            <p className="text-xs text-slate-500">
              Your Voice. Your Workplace.
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Prototype
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-600 px-8 py-14 text-white shadow-lg">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-100">
            Welcome to TeamVoice
          </p>

          <h2 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Make your voice count.
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-blue-100">
            Recognize your teammates, share your ideas,
            participate in workplace decisions, and help
            create a better workplace for everyone.
          </p>
        </div>

        <div className="mb-6 mt-12">
          <h3 className="text-2xl font-bold">
            What would you like to do?
          </h3>
          <p className="mt-2 text-slate-500">
            Choose an option below to get started.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-5 text-4xl">
                {feature.icon}
              </div>

              <h4 className="mb-3 text-xl font-bold">
                {feature.title}
              </h4>

              <p className="text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>

              <p className="mt-6 font-semibold text-blue-600 group-hover:text-blue-800">
                Explore →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-xl font-bold">
            Employee Portal
          </h3>

          <p className="mt-3 text-slate-500">
            Secure employee accounts, personalized dashboards,
            and workplace engagement tools are coming soon.
          </p>

          <span className="mt-6 inline-block rounded-lg bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-600">
            Employee Login — Coming Soon
          </span>
        </div>
      </section>

      
<footer className="border-t border-slate-200 bg-white px-6 py-6 text-center text-sm text-slate-500">
  © 2026 TeamVoice. Your Voice. Your Workplace.
</footer>

    </main>
  );
}
