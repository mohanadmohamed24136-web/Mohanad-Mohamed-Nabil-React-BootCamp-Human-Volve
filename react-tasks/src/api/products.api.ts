import type { Product, ProductsResponse } from "../types/product.types";

const API_URL = "https://dummyjson.com";

export async function getProducts(
  limit = 10,
  skip = 0,
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function searchProducts(
  query: string,
  limit = 10,
  skip = 0,
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products/search?q=${encodeURIComponent(
      query,
    )}&limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  return response.json();
}

export async function getProduct(id: number): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}