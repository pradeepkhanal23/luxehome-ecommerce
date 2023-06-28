import featured from "../assets/hero5.jpg";

const ProductsDisplay = () => {
  return (
    <section className="grid grid-cols-1 p-2 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 ">
      <article className="flex flex-col gap-5 w-full md:col-span-2">
        <div className="w-auto h-64 ">
          <img
            src={featured}
            alt="featured"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-between text-sm px-3 pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
      <article className="flex flex-col gap-5 w-full md:col-span-2">
        <div className="w-auto h-64 ">
          <img
            src={featured}
            alt="featured"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-between text-sm px-3 pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
      <article className="flex flex-col gap-5 w-full md:col-span-2">
        <div className="w-auto h-64 ">
          <img
            src={featured}
            alt="featured"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-between text-sm px-3 pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
      <article className="flex flex-col gap-5 w-full md:col-span-2">
        <div className="w-auto h-64 ">
          <img
            src={featured}
            alt="featured"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-between text-sm px-3 pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
      <article className="flex flex-col gap-5 w-full md:col-span-2">
        <div className="w-auto h-64 ">
          <img
            src={featured}
            alt="featured"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-between text-sm px-3 pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
      <article className="flex flex-col gap-5 w-full md:col-span-2">
        <div className="w-auto h-64 ">
          <img
            src={featured}
            alt="featured"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-between text-sm px-3 pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
      <article className="flex flex-col gap-5 w-full md:col-span-2">
        <div className="w-auto h-64 ">
          <img
            src={featured}
            alt="featured"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-between text-sm px-3 pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
      <article className="flex flex-col gap-5 w-full md:col-span-2">
        <div className="w-auto h-64 ">
          <img
            src={featured}
            alt="featured"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-between text-sm px-3 pb-5">
          <p className="text-darkPurple">Entertainment Center</p>
          <p className="text-green font-bold ">$1234</p>
        </div>
      </article>
    </section>
  );
};

export default ProductsDisplay;
