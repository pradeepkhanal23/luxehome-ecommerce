import { useProductsContext } from "../context/productsContext";
import { Product, FeaturedSkeletonLoader } from "../components";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  console.log(loading);

  if (error) {
    return (
      <>
        <h1>Error....</h1>
      </>
    );
  }

  if (loading) {
    return (
      // <section className="bg-white p-5 pb-10">
      //   <div className="max-w-[1500px] mx-auto flex flex-col">
      //     <div className="pt-5">
      //       <h2 className="md:text-xl text-base text-center mb-5 text-logoPurple relative font-bold">
      //         Featured Products
      //         <div className="h-1 w-24 md:w-48 bg-sweetOrange mx-auto"></div>
      //       </h2>
      //     </div>
      //     <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      //       {[...Array(6)].map((_, index) => (
      //         <FeaturedSkeletonLoader key={index} />
      //       ))}
      //     </div>
      //     <Link
      //       to="products"
      //       className="btn w-30 mx-auto self-center mt-5 hover:scale-110 transition-all ease-in-out"
      //     >
      //       See All Products
      //     </Link>
      //   </div>
      // </section>
      <section className="bg-white p-5 pb-10">
        <div className="max-w-[1500px] mx-auto flex flex-col">
          <div className="pt-5">
            <h2 className="md:text-xl text-base text-center mb-5 text-logoPurple relative font-bold">
              {/* Loading Skeleton for the title */}
              <div className="animate-pulse bg-gray-300 h-6 w-1/2 mx-auto mb-3"></div>
              <div className="h-1 w-24 md:w-48 bg-sweetOrange mx-auto"></div>
            </h2>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {/* Loading Skeleton for product cards */}
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={`loading-skeleton-${index}`}
                className="animate-pulse bg-gray-300 rounded-lg"
              >
                <div className="h-60 md:h-72 w-full"></div>
                <div className="h-16 w-full"></div>
                <div className="h-8 w-3/4 mx-auto mt-3"></div>
                <div className="h-8 w-1/4 mx-auto mt-2"></div>
              </div>
            ))}
          </div>
          <div className="btn w-30 mx-auto self-center mt-5 hover:scale-110 transition-all ease-in-out">
            {/* Loading Skeleton for the "See All Products" button */}
            <div className="animate-pulse bg-gray-300 h-12 w-40 rounded-full"></div>
          </div>
        </div>
      </section>
    );
  }

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
          {featured.map((product) => (
            <Product key={product.id} {...product} />
          ))}
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
