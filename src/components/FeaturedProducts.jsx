import featured from "../assets/hero5.jpg";

const FeaturedProducts = () => {
  return (
    <section className="bg-white  px-5 pb-10">
      <div className="max-w-[1500px] mx-auto">
        <div className=" pt-5">
          <h2 className="md:text-xl text-base text-center mb-5 text-logoPurple relative font-bold">
            Featured Products
            <div className="h-1 w-24 md:w-64 bg-sweetOrange mx-auto"></div>
          </h2>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 ">
          <article className="card flex flex-col gap-5 ">
            <div className="w-full h-64 ">
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
          <article className="card flex flex-col gap-5 ">
            <div className="w-full h-64 ">
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
          <article className="card flex flex-col gap-5 ">
            <div className="w-full h-64 ">
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
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
