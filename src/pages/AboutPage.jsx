import { PageHero } from "../components";
import HeroImage from "../assets/hero3.jpg";

const AboutPage = () => {
  return (
    <>
      <PageHero title="about" />
      <section className="flex flex-col justify-center  items-center  max-w-[1500px] my-3 mx-auto p-2 gap-[2rem] md:flex-row md:items-center md:justify-center md:h-[calc(100vh-9rem)] ">
        <div className="w-9/10 h-9/10 self-start ">
          <img
            src={HeroImage}
            alt="hero-img"
            className="w-full h-full object-cover"
          />
        </div>

        <article className="flex flex-col self-start p-2 h-full">
          <div>
            <h2 className=" title">Our Story</h2>
            <div className="custom_underline"></div>
          </div>
          <p className=" paragraph pr-2 md:pr-10  md:leading-5  mt-2 md:mt-0  ">
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
