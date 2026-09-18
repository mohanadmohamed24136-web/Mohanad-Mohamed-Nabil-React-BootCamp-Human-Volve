import Card from "../components/ui/Card";

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React Router",
  "TanStack Query",
  "REST APIs",
];

const goals = [
  {
    title: "Reusable Components",
    description:
      "Build components that can be reused across different pages instead of repeating the same UI code.",
  },
  {
    title: "Clean Architecture",
    description:
      "Keep pages, components, API functions, hooks and types separated so the project stays easy to maintain.",
  },
  {
    title: "Real API Integration",
    description:
      "Work with real API requests, loading states, errors, search and pagination using DummyJSON.",
  },
];

export default function About() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          About This Project
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          A simple React project built with real-world practices.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          This project was built to practice how a modern React application
          should be structured, styled and connected to an external API.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-md border border-gray-200 bg-white p-5">
          <p className="text-2xl font-bold text-gray-900">React</p>
          <p className="mt-1 text-sm text-gray-500">Frontend library</p>
        </div>

        <div className="rounded-md border border-gray-200 bg-white p-5">
          <p className="text-2xl font-bold text-gray-900">TypeScript</p>
          <p className="mt-1 text-sm text-gray-500">Type-safe development</p>
        </div>

        <div className="rounded-md border border-gray-200 bg-white p-5">
          <p className="text-2xl font-bold text-gray-900">Tailwind</p>
          <p className="mt-1 text-sm text-gray-500">UI styling</p>
        </div>

        <div className="rounded-md border border-gray-200 bg-white p-5">
          <p className="text-2xl font-bold text-gray-900">REST API</p>
          <p className="mt-1 text-sm text-gray-500">Data integration</p>
        </div>
      </section>

      {/* About */}
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            What I focused on
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            More than just making the UI work
          </h2>

          <div className="mt-5 space-y-4 text-gray-600 leading-7">
            <p>
              The main goal of this project is to understand how different
              parts of a React application work together.
            </p>

            <p>
              Instead of putting everything inside one component, the project
              separates reusable UI components, API logic, hooks, pages and
              TypeScript types.
            </p>

            <p>
              The products section also uses TanStack Query to handle server
              data, caching, loading states, errors, search and pagination.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="rounded-md border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900">
            Technologies
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section>
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Project Goals
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            What this project demonstrates
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {goals.map((goal) => (
            <Card
              key={goal.title}
              title={goal.title}
              description={goal.description}
            />
          ))}
        </div>
      </section>

      {/* Final Section */}
      <section className="rounded-md border border-gray-200 bg-gray-900 px-6 py-10 text-white sm:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            The idea
          </p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Learn the fundamentals. Build something real. Improve it step by
            step.
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            This project is a practical step toward building larger React
            applications with cleaner code, reusable components and better
            frontend architecture.
          </p>
        </div>
      </section>
    </div>
  );
}