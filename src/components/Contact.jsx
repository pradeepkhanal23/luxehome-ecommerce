const Contact = () => {
  return (
    <section className="p-10 flex flex-col md:flex-row mt-10 md:gap-10 gap-5 w-full mx-auto bg-white">
      <div className="w-full md:w-1/2 ">
        <h4 className="title  text-xl break-words tracking-tighter w-full mb-5 ">
          Join our newsletter and get 20% off
        </h4>
        <div>
          <p className="paragraph pr-2 w-full md:w-2/3">
            <q>
              Join our newsletter and be part of our exclusive community,
              receiving design inspirations, offers, and updates straight to
              your inbox!
            </q>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col ">
        <div className="flex justify-center mt-4">
          <input
            type="text"
            className="mr-2 px-4 w-[60%] py-2 border border-gray-300 rounded-l-md focus:outline-none "
            placeholder="Enter your email..."
          />
          <button className="px-4 py-2 bg-logoPurple text-white rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
