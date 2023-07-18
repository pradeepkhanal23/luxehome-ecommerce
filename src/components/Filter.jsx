import { useFilterContext } from "../context/filterContext";
import { formatPrice } from "../utils/helpers";

const Filter = () => {
  const {
    filters: {
      text,
      category,
      company,
      colors,
      price,
      min_price,
      max_price,
      shipping,
    },
    allProducts,
    filteredProducts,
    updateFilter,
    clearFilter,
  } = useFilterContext();

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
            className="w-full md:w:1/2 px-2 py-1"
            onChange={updateFilter}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="font-bold text-logoPurple">
            Category
          </label>
          <select id="category" className="text-logoPurple py-1 px-2">
            <option value="all">All</option>
            <option value="office">Office</option>
            <option value="living room">Living Room</option>
            <option value="kitchen">Kitchen</option>
            <option value="bedroom">Bedroom</option>
            <option value="dining">Dining</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="font-bold text-logoPurple">
            Company
          </label>
          <select id="company" className="text-logoPurple py-1 px-2">
            <option value="all">All</option>
            <option value="ikea">IKEA</option>
            <option value="liddy">Liddy</option>
            <option value="marcos">Marcos</option>
            <option value="ceressa">Ceressa</option>
          </select>
        </div>
        <div className="flex flex-col text-logoPurple gap-1">
          <label className="font-bold ">Colors</label>
          <div className="flex gap-2 items-center">
            <button type="button" className="text-logoPurple">
              All
            </button>
            <button className="h-5 w-5 rounded-full bg-[#ff8080]"></button>
            <button className="h-5 w-5 rounded-full bg-[#adfe98]"></button>
            <button className="h-5 w-5 rounded-full bg-[#8080ff]"></button>
            <button className="h-5 w-5 rounded-full bg-[#808080]"></button>
            <button className="h-5 w-5 rounded-full bg-[#ffdc92]"></button>
          </div>
        </div>
        <div className="flex flex-col text-logoPurple  gap-1">
          <label htmlFor="priceRange" className="font-bold ">
            Price
          </label>
          <h4>{formatPrice(max_price)}</h4>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="3999.99"
            step="0.01"
            className="w-[30%]"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="freeShipping">Free Shipping</label>
          <input type="checkbox" id="freeShipping" />
        </div>
        <button
          type="button"
          className="bg-red-600 text-white py-2 px-6 rounded-sm"
        >
          Clear Filters
        </button>
      </div>
    </form>
  );
};
export default Filter;
