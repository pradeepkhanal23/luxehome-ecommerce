import { Hero1, Hero2, Hero3, Hero4, Hero5, Hero6 } from "../assets/images";

const ProductImages = () => {
  return (
    <div className="p-3 flex flex-col gap-5">
      <img
        className="h-96 w-full object-cover rounded-lg"
        src={Hero2}
        alt="hero-image"
      ></img>
      <div className="grid grid-cols-5 items-center gap-5 ">
        <img
          src={Hero1}
          alt="hero-image"
          className="h-14 w-full object-cover rounded-md"
        />
        <img
          src={Hero2}
          alt="hero-image"
          className="h-14 w-full object-cover rounded-md"
        />
        <img
          src={Hero3}
          alt="hero-image"
          className="h-14 w-full object-cover rounded-md"
        />
        <img
          src={Hero4}
          alt="hero-image"
          className="h-14 w-full object-cover rounded-md"
        />
        <img
          src={Hero5}
          alt="hero-image"
          className="h-14 w-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};
export default ProductImages;
