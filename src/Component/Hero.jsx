import React from "react";

function Hero() {
  return (
    <>
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-up" // 👈 Animation here
          >
            Build stunning sites fast with Tailwind + React
          </h2>
          <p
            className="text-lg md:text-xl mb-8"
            data-aos="fade-up"
            data-aos-delay="200" // 👈 Slight delay for nice stagger effect
          >
            A modern and responsive landing page template.
          </p>
          <div
            className="space-x-4"
            // 👈 Even more delay for smooth appearance
          >
            <button
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
              data-aos="fade-left"
              data-aos-delay="500">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;








// import React from "react";

// function Hero() {
//   return (
//     <>
//       <section className="bg-[var(--primary)] text-[var(--foreground)] py-20 transition-colors duration-300">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2
//             className="text-4xl md:text-5xl font-bold mb-4"
//             data-aos="fade-up"
//           >
//             Build stunning sites fast with Tailwind + React
//           </h2>
//           <p
//             className="text-lg md:text-xl mb-8"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             A modern and responsive landing page template.
//           </p>
//           <div
//             className="space-x-4"
//           >
//             <button
//               className="bg-[var(--background)] text-[var(--primary)] px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
//               data-aos="fade-right"
//               data-aos-delay="400"
//             >
//               Get Started
//             </button>
//             <button 
//               className="border border-[var(--background)] px-6 py-3 rounded-lg hover:bg-[var(--background)] hover:text-[var(--primary)] transition-colors duration-300"
//               data-aos="fade-left"
//               data-aos-delay="500"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Hero;
