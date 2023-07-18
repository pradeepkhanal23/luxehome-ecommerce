/* eslint-disable react/prop-types */
import {
  MdOutlineStarOutline,
  MdOutlineStarHalf,
  MdOutlineStar,
} from "react-icons/md";

const Stars = ({ stars, reviews }) => {
  const starRating = Array.from({ length: 5 }, (_, index) => {
    const halfStar = index + 0.5;

    return (
      <span key={index}>
        <span>
          {stars >= index + 1 ? (
            <MdOutlineStar />
          ) : stars >= halfStar ? (
            <MdOutlineStarHalf />
          ) : (
            <MdOutlineStarOutline />
          )}
        </span>
      </span>
    );
  });
  return (
    <article className="flex items-center gap-2">
      <div className="text-star flex  items-center gap-2">{starRating}</div>
      <div className="text-[1.2rem]">
        <p className=" text-redPink ">
          (<span>{reviews}</span> customers reviews)
        </p>
      </div>
    </article>
  );
};
export default Stars;
