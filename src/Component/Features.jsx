// import React from 'react';

// function Features() {
//   return (
//     <>
//       <section
//         className="py-16 bg-gray-50"
//         data-aos="fade-up" // Animate the whole section in
//       >
//         <div className="max-w-6xl mx-auto px-6">
//           <h3
//             className="text-3xl font-semibold text-center mb-12"
//             data-aos="fade-up"
//           >
//             Awesome Features
//           </h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: "Fast Setup", desc: "Get started in seconds with minimal setup." },
//               { title: "Fully Responsive", desc: "Looks great on every device and screen size." },
//               { title: "Modern Stack", desc: "Powered by React + Tailwind for rapid dev." },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className=" p-6 rounded-lg shadow hover:shadow-lg transition"
//                 data-aos="fade-up"
//                 data-aos-delay={i * 200} // Stagger animations by 200ms
//               >
//                 <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Features;

import React from 'react';

function Features() {
  return (
    <>
      <section
        className="py-16 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3
            className="text-3xl font-semibold text-center mb-12"
            data-aos="fade-up"
          >
            Awesome Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Fast Setup", desc: "Get started in seconds with minimal setup." },
              { title: "Fully Responsive", desc: "Looks great on every device and screen size." },
              { title: "Modern Stack", desc: "Powered by React + Tailwind for rapid dev." },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[var(--background)] text-[var(--foreground)] p-6 rounded-lg transition-colors duration-300"
                style={{ boxShadow: "var(--card-shadow)" }} // 👈 Shadow using CSS variable
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
