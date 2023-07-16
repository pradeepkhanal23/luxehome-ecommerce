import { GridView, ListView } from "../components";

// eslint-disable-next-line react/prop-types
const ProductsList = ({ products }) => {
  return (
    <section className="flex-2 grid grid-cols-12 gap-6 ">
      {/* <GridView products={products} /> */}
      <ListView products={products} />
    </section>
  );
};

export default ProductsList;
