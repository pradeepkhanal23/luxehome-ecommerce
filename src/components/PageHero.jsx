/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PageHero = ({ title }) => {
  return (
    <div className="h-40 bg-gray-200 flex  items-center uppercase text-base">
      <div className="ml-8 font-bold">
        <Link to="/">Home</Link>/
        <span className="text-logoPurple">{title}</span>
      </div>
    </div>
  );
};
export default PageHero;
