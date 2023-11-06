import { GridView, ListView } from "../components";
import { useFilterContext } from "../context/filterContext";

// eslint-disable-next-line react/prop-types
const ProductsList = () => {
  const { filteredProducts: products, gridView } = useFilterContext();

  return (
    <>
      <section className="flex-2 grid grid-cols-12 gap-6 ">
        {gridView ? (
          <GridView products={products} />
        ) : (
          <ListView products={products} />
        )}
      </section>
    </>
  );
};

export default ProductsList;
