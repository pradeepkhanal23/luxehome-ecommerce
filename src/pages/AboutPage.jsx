import { PageHero } from "../components";
import { Hero3 } from "../assets/images";

// [calc(100vh-6rem)] is the height of the about section

const AboutPage = () => {
  return (
    <>
      <PageHero title="about" />
      <section className=" p-5 max-w-[1300px] mx-auto mt-5 w-full  md:h-[calc(100vh-15rem)] ">
        <div className="flex flex-col  gap-x-5 md:flex-row  ">
          <div className="w-full lg:w-1/2">
            <img
              alt="About us"
              className="object-cover rounded-lg "
              src={Hero3}
            />
          </div>
          <div className="w-full lg:w-1/2 mt-2 md:mt-0">
            <div>
              <h2 className=" title uppercase text-[1.5rem]  md:text-lg pb-1 underline underline-offset-[.4rem] decoration-sweetOrange decoration-4">
                Our Story
              </h2>
            </div>
            <p className="text:sm text-logoPurple text-justify pr-2 mt-2  md:leading-5  md:mt-0 lg:leading-7">
              Welcome to our furniture paradise, where style meets comfort.
              Explore our curated collection of handcrafted furniture pieces
              that embody timeless elegance. From sleek and modern designs to
              rustic charm, we offer a diverse range of options to suit every
              taste and lifestyle. Discover the joy of creating a home that
              reflects your unique personality and indulge in the art of fine
              living. Elevate your style and embrace comfort with us today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPage;
