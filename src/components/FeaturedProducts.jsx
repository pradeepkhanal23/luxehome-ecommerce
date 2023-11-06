import { useProductsContext } from "../context/productsContext";
import { FeaturedSkeletonLoader, Product } from "../components";
import { Link } from "react-router-dom";
import { PlaceholderImage } from "../assets/images";

const FeaturedProducts = () => {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  return (
    <section className="bg-white p-5 pb-10">
      <div className="max-w-[1500px] mx-auto flex flex-col">
        <div className="pt-5">
          <h2 className="md:text-xl text-base text-center mb-5 text-logoPurple relative font-bold">
            Featured Products
            <div className="h-1 w-24 md:w-48 bg-sweetOrange mx-auto"></div>
          </h2>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {error ? (
            <>
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index + "error"}
                  className="flex  gap-5 bg-gray-100 items-center justify-center shadow-sm border-gray-300 border-2 m-2 h-64 w-full"
                >
                  <img
                    src={PlaceholderImage}
                    alt="featured-products"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </>
          ) : loading ? (
            <>
              {Array.from({ length: 6 }, (_, index) => (
                <FeaturedSkeletonLoader key={index + "skeleton"} />
              ))}
            </>
          ) : (
            <>
              {featured.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </>
          )}
        </div>
        <Link
          to="products"
          className="btn w-30 mx-auto self-center mt-5 hover:scale-110 transition-all ease-in"
        >
          See All Products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
