import { PageHero } from "../components";
import { Hero3 } from "../assets/images";

const AboutPage = () => {
  return (
    <>
      <PageHero title="about" />
      <section className="grid grid-cols-1 md:grid-cols-4 gap-x-6 max-w-[1500px] my-3 md:pt-[7rem] mx-auto p-5 h-[calc(100vh-7rem)]  ">
        <div className="w-9/10 h-9/10 self-start col-span-2 ">
          <img
            src={Hero3}
            alt="hero-img"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>

        <article className="col-span-2  h-full">
          <div>
            <h2 className=" title">Our Story</h2>
            <div className="custom_underline"></div>
          </div>
          <p className=" text:sm text-logoPurple text-justify pr-2 md:pr-5  md:leading-5  mt-2 md:mt-0 lg:text-base  lg:leading-7 ">
            Welcome to our furniture paradise, where style meets comfort.
            Explore our curated collection of handcrafted furniture pieces that
            embody timeless elegance. From sleek and modern designs to rustic
            charm, we offer a diverse range of options to suit every taste and
            lifestyle. Discover the joy of creating a home that reflects your
            unique personality and indulge in the art of fine living. Elevate
            your style and embrace comfort with us today.
          </p>
        </article>
      </section>
    </>
  );
};
export default AboutPage;
