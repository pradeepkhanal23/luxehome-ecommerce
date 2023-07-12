/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section className="p-3 flex flex-col gap-5">
      <img
        src={mainImage.url}
        alt="Main Image"
        className="h-96 w-full object-cover rounded-lg"
      />
      <div className="grid grid-cols-5 items-center gap-5">
        {images.map((image, index) => {
          return (
            <img
              key={image.id}
              src={image.url}
              alt={image.filename}
              className={`${
                mainImage.id === image.id
                  ? "h-14 w-full object-cover rounded-md  border-2 border-sweetOrange"
                  : "h-14 w-full object-cover rounded-md"
              } `}
              onClick={() => setMainImage(images[index])}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ProductImages;
