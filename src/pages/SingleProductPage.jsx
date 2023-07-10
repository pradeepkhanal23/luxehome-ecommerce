import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageHero, Stars } from "../components";
import { useProductsContext } from "../context/productsContext";
import { single_product_url as url } from "../utils/constants";
import defaultImage1 from "../assets/hero1.jpg";
import defaultImage2 from "../assets/hero2.jpg";
import defaultImage3 from "../assets/hero3.jpg";
import defaultImage4 from "../assets/hero4.jpg";
import defaultImage5 from "../assets/hero5.jpg";

const SingleProductPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(product);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>This was an Error..</h1>;
  }

  return (
    <>
      <PageHero />
      <section className="p-3 my-10">
        <div className="wrapper max-w-6xl mx-auto  text-[1.2rem] flex-col flex gap-10">
          <div>
            <Link
              to="products"
              className="btn ml-3 w-48 mx-auto text-md  mt-5 hover:scale-110 transition-all ease-in-out"
            >
              Back To Products
            </Link>
          </div>

          <article className=" grid gap-x-4 grid-cols-1 md:grid-cols-2">
            <div className="p-3 flex flex-col gap-5">
              <img
                className="h-96 w-full object-cover "
                src={defaultImage2}
                alt="hero-image"
              ></img>
              <div className="grid grid-cols-5 items-center gap-5 border border-green">
                <img
                  src={defaultImage1}
                  alt="hero-image"
                  className="h-14 w-full object-cover"
                />
                <img
                  src={defaultImage2}
                  alt="hero-image"
                  className="h-14 w-full object-cover"
                />
                <img
                  src={defaultImage3}
                  alt="hero-image"
                  className="h-14 w-full object-cover"
                />
                <img
                  src={defaultImage4}
                  alt="hero-image"
                  className="h-14 w-full object-cover"
                />
                <img
                  src={defaultImage5}
                  alt="hero-image"
                  className="h-14 w-full object-cover"
                />
              </div>
            </div>
            <div className="p-3 flex flex-col gap-2 ">
              <h4 className="text-darkPurple text-lg font-bold uppercase">
                Modern Poster
              </h4>
              <div className="flex gap-2 items-center">
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <div>
                  <p className="text-sm text-darkBlue">
                    (<span>19</span> customers reviews)
                  </p>
                </div>
              </div>
              <h4 className="font-bold text-green">$399.99</h4>
              <p className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident debitis voluptates suscipit in sapiente doloribus
                tenetur tempora corporis quidem est, dolorum nam voluptatum
                facilis nulla eaque ducimus. In, repellat nostrum.
              </p>
              <div className="grid grid-cols-2  w-[80%] ">
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-logoPurple font-bold self-start">
                    Available:
                  </span>
                  <span className="text-logoPurple font-bold self-start">
                    SKU:
                  </span>
                  <span className="text-logoPurple font-bold self-start">
                    Brand:
                  </span>
                </div>
                <div className=" flex flex-col items-center gap-2">
                  <span className="self-start text-redPink">In Stock</span>
                  <span className="self-start text-redPink">Res5Hsbah5gsa</span>
                  <span className="self-start text-redPink">Ikea</span>
                </div>
              </div>
              <div className="h-[2px] mx-auto  w-full bg-gray-300 my-1"></div>
              <div className=" w-[80%]">
                <div className="grid grid-cols-2 items-center ">
                  <span className="text-logoPurple font-bold self-start">
                    Colors:
                  </span>
                  <div className="flex gap-1">
                    <div className="h-5 w-5 rounded-full bg-green"></div>
                    <div className="h-5 w-5 rounded-full bg-black"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-2 w-full self-start ">
                <div className="text-logoPurple text-xl  ">
                  <button className="mr-5">-</button>
                  <span className="mr-5">1</span>
                  <button className="mr-5">+</button>
                </div>
                <button className="btn w-40">Add to Cart</button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
export default SingleProductPage;
