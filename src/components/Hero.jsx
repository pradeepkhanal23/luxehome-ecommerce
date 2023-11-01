import { Link } from "react-router-dom";
import { Hero1, Hero4 } from "../assets/images";

const Hero = () => {
  return (
    <section className="h-full w-full pb-10">
      <div className="hero p-5 flex flex-col max-w-[1300px] my-4 mx-auto items-center md:flex-row md:gap-10">
        <div className="hero-left flex flex-col gap-3 mb-5 md:pr-[2rem]">
          <h1 className="title text-xl  break-words tracking-tighter">
            Design Your Perfect Haven
          </h1>
          <p className="paragraph py-3 pr-10 ">
            From modern designs to timeless elegance, we offer a range of
            options to suit your taste. Create a home that reflects your
            personality and embraces comfort. Experience the art of fine living
            today.
          </p>
          <Link
            to="/products"
            className="btn w-36 hover:scale-110 transition-all ease-out"
          >
            Shop Now
          </Link>
        </div>
        <div className="hero-right ">
          <div className="hidden h-96 w-96 md:block relative">
            <img
              src={Hero1}
              alt="hero-img"
              className="w-full h-full object-cover rounded-lg"
            />

            <img
              src={Hero4}
              alt="hero-img"
              className="w-64 h-32 object-cover absolute -bottom-8 -left-10 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
