import React from "react";

function Cta() {
  return (
    <>
      {" "}
      <section
        className="py-20 bg-indigo-700 text-white text-center"
      
      >
        <h4 className="text-3xl font-bold mb-4"   data-aos="fade-up"
        data-aos-delay="400">
          Ready to build something amazing?
        </h4>
        <p className="mb-8">
          Join thousands of developers using this template.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Join Now
        </button>
      </section>
    </>
  );
}

export default Cta;
