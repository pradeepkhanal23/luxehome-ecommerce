const Form = () => {
  return (
    <form className="w-full flex-1 ">
      <div className=" flex flex-col gap-3  h-full">
        <div>
          <input type="text" id="search" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <select id="category">
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
          <label htmlFor="company">Company:</label>
          <select id="company">
            <option value="all">All</option>
            <option value="ikea">IKEA</option>
            <option value="liddy">Liddy</option>
            <option value="marcos">Marcos</option>
            <option value="ceressa">Ceressa</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label>Colors</label>
          <div className="flex gap-1">
            <button type="button">All</button>
            <div className="h-5 w-5 rounded-full">
              <input type="color" value="#ff8080" />
            </div>
            <div className="h-5 w-5 rounded-full">
              <input type="color" value="#adfe98" />
            </div>
            <div className="h-5 w-5 rounded-full">
              <input type="color" value="#8080ff" />
            </div>
            <div className="h-5 w-5 rounded-full">
              <input type="color" value="#808080" />
            </div>
            <div className="h-5 w-5 rounded-full">
              <input type="color" value="#ffdc92" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="priceRange">Price Range:</label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="3999.99"
            step="0.01"
          />
        </div>

        <div>
          <label htmlFor="freeShipping">Free Shipping:</label>
          <input type="checkbox" id="freeShipping" />
        </div>

        <button type="button">Clear Filters</button>
      </div>
    </form>
  );
};
export default Form;
