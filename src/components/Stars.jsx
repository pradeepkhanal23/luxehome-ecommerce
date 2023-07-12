/* eslint-disable react/prop-types */
import {
  MdOutlineStarOutline,
  MdOutlineStarHalf,
  MdOutlineStar,
} from "react-icons/md";

const Stars = ({ stars, reviews }) => {
  const starRating = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <MdOutlineStar className="scale-[1.3]" />
        ) : stars >= number ? (
          <MdOutlineStarHalf className="scale-[1.3]" />
        ) : (
          <MdOutlineStarOutline className="scale-[1.3]" />
        )}
      </span>
    );
  });
  return (
    <article className="flex items-center gap-2">
      <div className="text-star flex  items-center gap-2">{starRating}</div>
      <div className="text-[1.2rem]">
        <p className=" text-darkBlue pt-1">
          (<span>{reviews}</span> customers reviews)
        </p>
      </div>
    </article>
  );
};
export default Stars;
