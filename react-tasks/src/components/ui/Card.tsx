import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  image,
  children,
}: CardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-gray-200 bg-white">
      {" "}
      {image && (
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      )}
      <div className="p-5">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>

        <p className="mt-2 text-slate-600">{description}</p>

        {children && <div className="mt-4">{children}</div>}
      </div>
    </article>
  );
}
