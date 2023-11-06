const FeaturedSkeletonLoader = () => {
  return (
    <article className=" flex flex-col gap-5 bg-white shadow-sm border-gray-100 border-2 m-2">
      <div className="w-full h-64 animate-pulse">
        <div className="h-full w-full object-cover rounded-lg ">
          <div className="bg-gray-100 h-full w-full mx-auto "></div>
        </div>
      </div>
      <footer className="flex justify-between text-sm px-3 pb-5">
        <div className="w-32 bg-gray-100 h-5"></div>
        <div className="bg-gray-100 w-32 h-5"></div>
      </footer>
    </article>
  );
};
export default FeaturedSkeletonLoader;
