import { PageHero, Filter, ProductsList } from "../components";
import { useProductsContext } from "../context/productsContext";
import { Sort } from "../components";

const ProductsPage = () => {
  const { products } = useProductsContext();

  return (
    <>
      <PageHero title="products" />
      <section className="w-full min-h-screen p-5">
        <div className="flex flex-col md:flex-row gap-10 max-w-[1600px] mx-auto">
          <div className="w-full  md:w-[250px]">
            <div className="sticky md:pt-10 top-0">
              <Filter />
            </div>
          </div>
          <div className="w-full">
            <Sort />
            <ProductsList products={products} />
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsPage;
