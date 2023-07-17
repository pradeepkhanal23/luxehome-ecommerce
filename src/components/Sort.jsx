import { BsGrid } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const {
    filteredProducts: products,
    gridView,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <article className="flex-col flex gap-3 mb-5 md:flex-row md:items-center md:justify-between">
      <div className="flex  items-center gap-2 ">
        <div
          className={`${
            gridView
              ? "border border-logoPurple p-2  rounded-md bg-darkPurple text-white"
              : "border border-logoPurple p-2  rounded-md"
          }`}
        >
          <BsGrid className="scale-150 cursor-pointer" onClick={setGridView} />
        </div>
        <div
          className={`${
            !gridView
              ? "border border-logoPurple p-2  rounded-md bg-darkPurple text-white"
              : "border border-logoPurple p-2  rounded-md"
          }`}
        >
          <IoMenuOutline
            className="scale-150 cursor-pointer"
            onClick={setListView}
          />
        </div>
      </div>
      <h4 className="break-keep">{products.length} Products found</h4>
      <div className="md:w-[50%]  mx-1 w-full bg-black h-[.01rem] "></div>
      <form className="flex items-center gap-2 md:gap-4">
        <label className="break-keep" htmlFor="sort">
          Sort By
        </label>
        <select id="sort" name="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </form>
    </article>
  );
};
export default Sort;
