import { Hero5 } from "../assets/images";

const ProductsDisplay = () => {
  return (
    <section className="flex-2 grid grid-cols-12 gap-6 ">
      <article className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col gap-3">
        <div className="w-auto md:h-56 h-64 ">
          <img
            src={Hero5}
            alt="featured"
            className="h-full w-full object-cover rounded-lg "
          />
        </div>
        <div className="flex justify-between text-sm  pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
    </section>
  );
};

export default ProductsDisplay;
