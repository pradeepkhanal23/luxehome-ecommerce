import { useProductsContext } from "../context/productsContext";
import { Product } from "../components";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  if (loading) {
    return (
      <>
        <h1>Loading..</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>Error....</h1>
      </>
    );
  }
  return (
    <section className="bg-white p-5 pb-10">
      <div className="max-w-[1500px] mx-auto flex flex-col">
        <div className=" pt-5">
          <h2 className="md:text-xl text-base text-center mb-5 text-logoPurple relative font-bold">
            Featured Products
            <div className="h-1 w-24 md:w-48 bg-sweetOrange mx-auto"></div>
          </h2>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 ">
          {featured.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <Link
          to="products"
          className="btn w-30 mx-auto self-center mt-5 hover:scale-110 transition-all ease-in-out"
        >
          See All Products
        </Link>
      </div>
    </section>
  );
};
export default FeaturedProducts;
