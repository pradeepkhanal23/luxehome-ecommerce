import { useRef, useEffect } from "react";

export const useImageBlur = (imgSrc) => {
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.filter = "blur(20px)"; // Adjust the blur amount as needed
    }

    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      if (imgRef.current) {
        imgRef.current.src = imgSrc;
        imgRef.current.style.filter = "none"; // Remove the blur effect once the image is loaded
      }
    };
  }, [imgSrc]);

  return imgRef;
};
