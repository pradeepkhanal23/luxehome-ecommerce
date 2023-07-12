import { Form, PageHero, ProductsDisplay } from "../components";
import { BsGrid } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";

const ProductsPage = () => {
  return (
    <>
      <PageHero title="products" />
      <section className="w-full min-h-screen p-5">
        <div className="flex flex-col md:flex-row gap-10 max-w-[2200px] mx-auto">
          <div className="w-full  md:w-[250px]">
            <div className="sticky md:pt-10 top-0">
              <Form />
            </div>
          </div>
          <div className="w-full">
            <article className="flex-col flex gap-3 mb-5 md:flex-row md:items-center md:justify-between">
              <div className="flex  items-center gap-2 ">
                <div className="border border-black p-2 bg-white rounded-md">
                  <BsGrid className="scale-150" />
                </div>
                <div className="border border-black p-2 bg-white text-black rounded-md">
                  <IoMenuOutline className="scale-150" />
                </div>
              </div>
              <h4 className="">6 Products found</h4>
              <div className="md:w-[50%]  mx-1 w-full bg-black h-[.01rem] "></div>
              <div className="flex items-center gap-2 md:gap-4">
                <span className="break-none">Sort By</span>
                <div>
                  <select id="price">
                    <option value="Price(Lowest)">Price(Lowest)</option>
                    <option value="Price(Highest)">Price(Highest)</option>
                    <option value="Name(A-Z)">Name(A-Z)</option>
                    <option value="Name(Z-A)">Name(Z-A)</option>
                  </select>
                </div>
              </div>
            </article>
            <ProductsDisplay />
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductsPage;
