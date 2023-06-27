const Contact = () => {
  return (
    <section className="p-10  flex flex-col md:flex-row mt-10 md:gap-10 gap-5 w-full mx-auto bg-white">
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
        <form
          className="flex justify-center mt-4"
          action="https://formspree.io/f/xknlwrly"
          method="POST"
        >
          <input
            type="email"
            name="email"
            className="mr-2 px-4 text-logoPurple w-[60%] py-2 border border-gray-400 rounded-l-md focus:outline-none "
            placeholder="Enter your email..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-logoPurple text-white rounded-r-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
