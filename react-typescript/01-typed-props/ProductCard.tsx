type ProductCardProps = {
  name: string;
  price: number;
  category: "clothing" | "electronics" | "food";
  inStock: boolean;
  discount?: number;
};

function ProductCard({
  name,
  price,
  category,
  inStock,
  discount,
}: ProductCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: ৳{price}</p>
      {discount !== undefined && <p>Discount: {discount}%</p>}
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductCard;
