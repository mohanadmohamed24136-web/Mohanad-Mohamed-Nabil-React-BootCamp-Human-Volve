export interface ProductSchema {
  title: string;
  price: number;
  category: string;
}

export function isValidProduct(
  product: ProductSchema,
): boolean {
  return (
    typeof product.title === "string" &&
    typeof product.price === "number" &&
    typeof product.category === "string"
  );
}