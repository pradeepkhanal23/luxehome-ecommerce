import { PageHero } from "../components";
import HeroImage from "../assets/hero3.jpg";

const AboutPage = () => {
  return (
    <>
      <PageHero title="about" />
      <section className="flex flex-col items-center justify-center h-auto max-w-[1500px] my-3 mx-auto p-2 gap-[5rem] md:flex-row ">
        <div className="w-9/10 h-9/10 border-2 border-black">
          <img
            src={HeroImage}
            alt="hero-img"
            className="w-full h-full object-cover"
          />
        </div>

        <article className="flex flex-col self-start p-2 ">
          <div>
            <h2 className=" font-bold text-base text-logoPurple ">Our Story</h2>
            <div className="underline"></div>
          </div>
          <p className=" text- text-justify pr-2 md:pr-10  text-darkBlue mt-3 md:mt-0  ">
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
