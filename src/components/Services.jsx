import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className="p-5 flex flex-col mt-10  gap-5 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:gap-10 md:flex-row w-full">
        <h4 className="title text-xl break-words tracking-tighter w-full mb-5 md:w-1/3">
          Furnish Your Dream
        </h4>
        <p className="paragraph pr-2 w-full md:w-2/3 ">
          With a storied legacy spanning decades, our furniture company was
          established in 1992. From our early roots as a small workshop, we have
          grown into a renowned brand, crafting exceptional furniture that
          stands the test of time. Guided by a passion for craftsmanship and a
          commitment to innovation, our history is woven into every piece we
          create, bringing elegance and comfort to homes around the world.
        </p>
      </div>
      <div className="grid md:grid-cols-2  gap-4 lg:grid-cols-4 xl:grid-cols-4 text-logoPurple">
        {services.map((service) => {
          const { id, title, text, icon } = service;
          return (
            <article
              key={id}
              className="bg-white shadow-lg flex-col gap-5  h-auto w-full rounded-lg p-3 "
            >
              <div className="w-full h-48 bg-whiteOrange rounded full flex items-center justify-center ">
                {icon}
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center">
                <h4 className="text-base mt-4 font-bold text-logoPurple uppercase">
                  {title}
                </h4>
                <p className="mt-2  p-2">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
