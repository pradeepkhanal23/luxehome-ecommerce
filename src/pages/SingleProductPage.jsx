import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageHero, ProductImages, ProductInfo, AddToCart } from "../components";
import { useProductsContext } from "../context/productsContext";
import { single_product_url as url } from "../utils/constants";

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

  const { name, stock, images } = product;

  return (
    <>
      <PageHero title={name} product />
      <section className="p-3 my-10">
        <div className="wrapper max-w-[1200px] mx-auto  text-[1.2rem] flex-col flex gap-10">
          <div>
            <Link
              to="/products"
              className="btn ml-3 w-48 mx-auto text-md  mt-5 hover:scale-110 transition-all ease-in-out"
            >
              Back To Products
            </Link>
          </div>

          <section className=" grid gap-x-4 grid-cols-1 md:grid-cols-2">
            <ProductImages images={images} />

            <article className="p-3 flex flex-col gap-2 ">
              <ProductInfo product={product} />

              <div className="grid grid-cols-1 gap-y-2 w-full self-start ">
                {stock > 0 && <AddToCart />}
              </div>
            </article>
          </section>
        </div>
      </section>
    </>
  );
};
export default SingleProductPage;
