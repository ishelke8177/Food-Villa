import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="col-10 container ">
        <main className="py-8 flex-col justify-center">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

            <form className="mt-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2  border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black-600">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2  border rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-black-600">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 border rounded-md"
                  required
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="mb-4">
                <dt className="text-sm font-medium text-black-600">Address</dt>
                <dd className="text-gray-700">
                  123 Food Street, Cityville, Country
                </dd>
              </div>
              <div className="mb-4">
                <dt className="text-sm font-medium text-black-600">Email</dt>
                <dd className="text-gray-700">
                  <a href="mailto:info@foodvilla.com">info@foodvilla.com</a>
                </dd>
              </div>
              <div className="mb-4">
                <dt className="text-sm font-medium text-black-600">Phone</dt>
                <dd className="text-gray-700">+1 (123) 456-7890</dd>
              </div>
            </dl>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;