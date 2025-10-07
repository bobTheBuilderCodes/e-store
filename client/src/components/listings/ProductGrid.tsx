import { products } from "../../data/sampleProducts";
import ProductCard from "../ProductCard";

const ProductGrid = () => {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-4">🛒 Products You May Like</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
