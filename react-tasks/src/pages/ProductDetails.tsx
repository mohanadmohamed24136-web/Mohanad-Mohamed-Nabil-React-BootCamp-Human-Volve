import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

import { getProduct } from "../api/products.api";
import LoadingSkeleton from "../components/skeleton/LoadingSkeleton";

export default function ProductDetails() {
  const { id } = useParams();

  const productId = Number(id);

  const {
    data: product,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
    enabled: Number.isInteger(productId) && productId > 0,
  });

  if (isPending) {
    return (
      <div className="mx-auto max-w-5xl">
        <LoadingSkeleton />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
        <h1 className="text-2xl font-bold text-red-700">
          Product not found
        </h1>

        <Link
          to="/products"
          className="mt-4 inline-block font-semibold text-blue-600"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Link
        to="/products"
        className="mb-8 inline-flex items-center gap-2 font-medium text-slate-600 hover:text-slate-900"
      >
        <ArrowLeft size={18} />
        Back to Products
      </Link>

      <div className="grid gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-[400px] w-full rounded-xl object-cover"
          />

          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images
              .slice(0, 4)
              .map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={product.title}
                  className="h-20 w-full rounded-lg object-cover"
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            {product.title}
          </h1>

          <p className="mt-5 leading-7 text-slate-600">
            {product.description}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold">
              ${product.price}
            </span>

            <span className="flex items-center gap-1 text-amber-600">
              <Star
                size={18}
                fill="currentColor"
              />
              {product.rating}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Stock
              </p>
              <p className="mt-1 font-bold">
                {product.stock}
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Brand
              </p>
              <p className="mt-1 font-bold">
                {product.brand || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}