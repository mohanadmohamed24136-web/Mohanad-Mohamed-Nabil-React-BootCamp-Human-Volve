import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";

const students = [
  {
    Name: "Ahmed",
    Age: 18,
    City: "Cairo",
  },
  {
    Name: "Mohanad",
    Age: 16,
    City: "Gharbia",
  },
  {
    Name: "Omar",
    Age: 17,
    City: "Alexandria",
  },
];

export default function Home() {
  const handlePrimaryClick = () => {
    alert("Primary button clicked!");
  };

  const handleSecondaryClick = () => {
    alert("Secondary button clicked!");
  };

  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            React Assignments
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Reusable Components & Scalable Structure
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            A React application demonstrating clean project
            organization, reusable components, and modern
            data fetching with React Query.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              text="Primary Button"
              variant="primary"
              onClick={handlePrimaryClick}
              className="bg-blue-600 hover:bg-blue-700"
            />

            <Button
              text="Secondary Button"
              variant="secondary"
              onClick={handleSecondaryClick}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold">
          Reusable Cards
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="React"
            description="Build modern user interfaces with reusable components."
          >
            <Button
              text="Learn More"
              variant="primary"
              onClick={() => alert("React")}
            />
          </Card>

          <Card
            title="TypeScript"
            description="Write safer and more maintainable React applications."
            image="https://dummyjson.com/image/600x300"
          >
            <p className="text-sm text-slate-500">
              This content is passed using the children prop.
            </p>
          </Card>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Reusable Table
          </h2>

          <Link
            to="/products"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            View Products →
          </Link>
        </div>

        <Table
          columns={["Name", "Age", "City"]}
          data={students}
          striped
        />
      </section>
    </div>
  );
}