import { Link } from "react-router-dom";
import { Hero1, Hero4, Hero1Blur, Hero4Blur } from "../assets/images";
import { useProgressiveImg } from "../hooks/useProgressiveImg";

const Hero = () => {
  const [src1, { blur: blur1 }] = useProgressiveImg(Hero1Blur, Hero1);
  const [src2, { blur: blur2 }] = useProgressiveImg(Hero4Blur, Hero4);

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
            className="btn w-36 hover:scale-110 transition-all ease-in"
          >
            Shop Now
          </Link>
        </div>
        <div className="hero-right ">
          <div className="hidden h-96 w-96 md:block relative">
            <img
              src={src1}
              alt="hero-img"
              className="w-full h-full object-cover rounded-lg"
              style={{
                filter: blur1 ? "blur(20px)" : "none",
                transition: blur1 ? "none" : "filter 0.5s ease-in-out",
              }}
            />

            <img
              src={src2}
              alt="hero-img"
              className="w-64 h-32 object-cover absolute -bottom-8 -left-10 rounded-lg"
              style={{
                filter: blur2 ? "blur(20px)" : "none",
                transition: blur2 ? "none" : "filter 0.5s ease-in-out ",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
