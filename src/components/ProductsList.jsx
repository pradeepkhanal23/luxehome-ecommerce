import { GridView, ListView } from "../components";
import { useFilterContext } from "../context/filterContext";

// eslint-disable-next-line react/prop-types
const ProductsList = () => {
  const { filteredProducts: products, gridView } = useFilterContext();

  if (products.length < 1) {
    return <h5>Sorry No products found</h5>;
  }

  if (!gridView) {
    return (
      <section className="flex-2 grid grid-cols-12 gap-6 ">
        <ListView products={products} />;
      </section>
    );
  }
  return (
    <section className="flex-2 grid grid-cols-12 gap-6 ">
      <GridView products={products} />
    </section>
  );
};

export default ProductsList;
