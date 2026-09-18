import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Star } from "lucide-react";

import { getProducts, searchProducts } from "../api/products.api";
import { useDebounce } from "../hooks/useDebounce";
import LoadingSkeleton from "../components/skeleton/LoadingSkeleton";
import EmptyState from "../components/common/EmptyState";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/CardStyle";

const PRODUCTS_PER_PAGE = 10;

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Math.max(
    Number(searchParams.get("page")) || 1,
    1,
  );

  const searchValue = searchParams.get("search") || "";

  const debouncedSearch = useDebounce(searchValue, 500);

  const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", debouncedSearch, currentPage],

    queryFn: () => {
      if (debouncedSearch.trim()) {
        return searchProducts(
          debouncedSearch.trim(),
          PRODUCTS_PER_PAGE,
          skip,
        );
      }

      return getProducts(PRODUCTS_PER_PAGE, skip);
    },

    placeholderData: (previousData) => previousData,
  });

  const totalPages = data
    ? Math.ceil(data.total / PRODUCTS_PER_PAGE)
    : 0;

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;

    const params = new URLSearchParams();

    if (value.trim()) {
      params.set("search", value);
    }

    params.set("page", "1");

    setSearchParams(params);
  };

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(page));

    setSearchParams(params);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Products
        </h1>

        <p className="mt-2 text-gray-500">
          Browse products and view their details.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl">
        <label
          htmlFor="product-search"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Search products
        </label>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="product-search"
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search by product name..."
            className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Loading */}
      {isPending && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="rounded-md border border-red-200 bg-red-50 p-6">
          <h2 className="font-semibold text-red-700">
            Could not load products
          </h2>

          <p className="mt-1 text-sm text-red-600">
            {error instanceof Error
              ? error.message
              : "Something went wrong while loading products."}
          </p>
        </div>
      )}

      {/* Empty */}
      {!isPending &&
        !isError &&
        data &&
        data.products.length === 0 && (
          <EmptyState
            title="No products found"
            description={
              searchValue
                ? `No products matched "${searchValue}".`
                : "There are no products to display."
            }
          />
        )}

      {/* Products */}
      {!isError &&
        data &&
        data.products.length > 0 && (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data.products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden border-gray-200"
                >
                  {/* Product Image */}
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-52 w-full object-cover"
                  />

                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-1 text-base">
                      {product.title}
                    </CardTitle>

                    <p className="text-sm capitalize text-gray-500">
                      {product.category}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">
                        ${product.price}
                      </span>

                      <span className="flex items-center gap-1 text-sm text-gray-600">
                        <Star
                          size={15}
                          className="text-yellow-500"
                          fill="currentColor"
                        />

                        {product.rating}
                      </span>
                    </div>

                    <Link
                      to={`/products/${product.id}`}
                      className="block rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
                    >
                      View Details
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => changePage(currentPage - 1)}
                  className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => changePage(page)}
                    className={`h-9 min-w-9 rounded-md border px-3 text-sm font-medium ${
                      currentPage === page
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                  className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
    </section>
  );
}
