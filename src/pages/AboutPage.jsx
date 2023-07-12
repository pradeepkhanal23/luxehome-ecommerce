import { PageHero } from "../components";
import { Hero3 } from "../assets/images";

const AboutPage = () => {
  return (
    <>
      <PageHero title="about" />
      <section className="flex flex-col justify-center h-full items-center  max-w-[1800px] my-3 mx-auto p-2 gap-[2rem] md:flex-row md:items-center md:justify-center md:h-[calc(100vh-9rem)] ">
        <div className="14/15 h-14/15 self-start ">
          <img
            src={Hero3}
            alt="hero-img"
            className="w-full h-full object-cover "
          />
        </div>

        <article className="flex flex-col self-start  h-full">
          <div>
            <h2 className=" title">Our Story</h2>
            <div className="custom_underline"></div>
          </div>
          <p className=" paragraph pr-2 md:pr-5  md:leading-5  mt-2 md:mt-0 lg:text-base  lg:leading-7 ">
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
