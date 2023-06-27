import { Hero, FeaturedProducts, Services, Contact } from "../components";

const HomePage = () => {
  return (
    <div className="h-full w-full">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </div>
  );
};
export default HomePage;
