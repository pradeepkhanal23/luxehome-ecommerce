import { useFilterContext } from "../context/filterContext";
import { formatPrice, getUniqueValue } from "../utils/helpers";
import { BsCheck } from "react-icons/bs";

const Filter = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      price,
      min_price,
      max_price,
      shipping,
    },
    allProducts,
    updateFilter,
    clearFilter,
  } = useFilterContext();

  //?Filtering just the unique values from categories,companies and colors

  const categories = getUniqueValue(allProducts, "category");
  const companies = getUniqueValue(allProducts, "company");
  const colors = getUniqueValue(allProducts, "colors");

  return (
    <form
      className="mx-auto w-full flex-1 "
      onSubmit={(e) => e.preventDefault()}
    >
      <div className=" flex flex-col gap-3  h-full md:sticky md:top-0">
        <div>
          <input
            type="text"
            name="text"
            value={text}
            id="search"
            placeholder="Search..."
            className="w-full md:w:1/2 px-2 py-1  rounded-md "
            onChange={updateFilter}
          />
        </div>

        {/* -----------------------------------------------------------------------------------------------------  */}

        <div className="flex flex-col gap-1">
          <h5 htmlFor="category" className="font-bold text-logoPurple">
            Category
          </h5>
          <div
            id="category"
            className="text-logoPurple  flex flex-col gap-1 self-start"
          >
            {categories.map((c, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  name="category"
                  onClick={updateFilter}
                  className={`${
                    category === c.toLowerCase()
                      ? "self-start capitalize underline underline-offset-4 decoration-4 decoration-sweetOrange"
                      : "self-start capitalize"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* -----------------------------------------------------------------------------------------------------  */}

        <div className="flex flex-col gap-2">
          <h5 htmlFor="company" className="font-bold text-logoPurple">
            Company
          </h5>

          <select
            id="company"
            name="company"
            value={company}
            className="text-logoPurple py-1 px-2 capitalize"
            onChange={updateFilter}
          >
            {companies.map((c, i) => {
              return (
                <option key={i} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>

        {/* -----------------------------------------------------------------------------------------------------  */}

        <div className="flex flex-col text-logoPurple gap-1">
          <h5 className="font-bold ">Colors</h5>
          <div className="flex gap-1 items-center text-logoPurple">
            {colors.map((c, i) => {
              if (c === "all") {
                return (
                  <button
                    key={i}
                    name="color"
                    data-color={c}
                    onClick={updateFilter}
                    className={`${
                      color === c
                        ? " capitalize underline underline-offset-4 decoration-4 decoration-sweetOrange"
                        : " capitalize"
                    }`}
                  >
                    {c}
                  </button>
                );
              }
              return (
                <button
                  key={i}
                  className="capitalize h-5 w-5 rounded-full flex items-center justify-center text-white"
                  style={{ background: c }}
                  name="color"
                  data-color={c}
                  onClick={updateFilter}
                >
                  {color === c ? <BsCheck className="scale-[1.1]" /> : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* -----------------------------------------------------------------------------------------------------  */}

        <div className="flex flex-col text-logoPurple  gap-1">
          <h5 htmlFor="priceRange" className="font-bold ">
            Price
          </h5>
          <p>{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            value={price}
            onChange={updateFilter}
            min={min_price}
            max={max_price}
            step="1"
            className="w-32"
          />
        </div>

        {/* ----------------------------------------------------------------------------------------------------- */}
        <div className="flex items-center gap-2">
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            checked={shipping}
            onChange={updateFilter}
          />
        </div>

        {/* ----------------------------------------------------------------------------------------------------- */}
        <button
          type="button"
          onClick={clearFilter}
          className="bg-red-600 text-white py-2 px-6 rounded-sm"
        >
          Clear Filters
        </button>
      </div>
    </form>
  );
};
export default Filter;
