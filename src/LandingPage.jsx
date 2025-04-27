// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div className="font-sans text-gray-900">
//       {/* Navbar */}
//       <header className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-indigo-600">MyBrand</h1>
//           <nav className="space-x-6 hidden md:block">
//             <a href="#" className="hover:text-indigo-600">Home</a>
//             <a href="#" className="hover:text-indigo-600">Features</a>
//             <a href="#" className="hover:text-indigo-600">Pricing</a>
//             <a href="#" className="hover:text-indigo-600">Contact</a>
//           </nav>
//           <button className="md:hidden text-indigo-600">☰</button>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="bg-indigo-600 text-white py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Build stunning sites fast with Tailwind + React
//           </h2>
//           <p className="text-lg md:text-xl mb-8">
//             A modern and responsive landing page template.
//           </p>
//           <div className="space-x-4">
//             <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100">
//               Get Started
//             </button>
//             <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <h3 className="text-3xl font-semibold text-center mb-12">Awesome Features</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: "Fast Setup", desc: "Get started in seconds with minimal setup." },
//               { title: "Fully Responsive", desc: "Looks great on every device and screen size." },
//               { title: "Modern Stack", desc: "Powered by React + Tailwind for rapid dev." },
//             ].map((feature, i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//                 <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-indigo-700 text-white text-center">
//         <h4 className="text-3xl font-bold mb-4">Ready to build something amazing?</h4>
//         <p className="mb-8">Join thousands of developers using this template.</p>
//         <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
//           Join Now
//         </button>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6 text-center">
//         <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;








// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div className="font-sans text-gray-900">
//       {/* Navbar */}
//       <header className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-primary">MyBrand</h1>
//           <nav className="space-x-6 hidden md:block">
//             <a href="#" className="hover:text-primary">Home</a>
//             <a href="#" className="hover:text-primary">Features</a>
//             <a href="#" className="hover:text-primary">Pricing</a>
//             <a href="#" className="hover:text-primary">Contact</a>
//           </nav>
//           <button className="md:hidden text-primary">☰</button>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="bg-primary text-primary-foreground py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Build stunning sites fast with Tailwind + React
//           </h2>
//           <p className="text-lg md:text-xl mb-8">
//             A modern and responsive landing page template.
//           </p>
//           <div className="space-x-4">
//             <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium shadow hover:bg-muted">
//               Get Started
//             </button>
//             <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <h3 className="text-3xl font-semibold text-center mb-12">Awesome Features</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: "Fast Setup", desc: "Get started in seconds with minimal setup." },
//               { title: "Fully Responsive", desc: "Looks great on every device and screen size." },
//               { title: "Modern Stack", desc: "Powered by React + Tailwind for rapid dev." },
//             ].map((feature, i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//                 <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-primary text-secondary-foreground text-center">
//         <h4 className="text-3xl font-bold mb-4">Ready to build something amazing?</h4>
//         <p className="mb-8">Join thousands of developers using this template.</p>
//         <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-muted">
//           Join Now
//         </button>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6 text-center">
//         <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;













// import React, { useState, useEffect } from 'react';

// const LandingPage = () => {
//   const [darkMode, setDarkMode] = useState(() =>
//     window.matchMedia('(prefers-color-scheme: dark)').matches
//   );

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   const toggleTheme = () => setDarkMode((prev) => !prev);

//   return (
//     <div className="font-sans text-gray-900 bg-background transition-colors duration-300">
//       {/* Navbar */}
//       <header className="bg-white dark:bg-gray-900 shadow-md">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-primary">MyBrand</h1>
//           <nav className="space-x-6 hidden md:block">
//             <a href="#" className="hover:text-primary">Home</a>
//             <a href="#" className="hover:text-primary">Features</a>
//             <a href="#" className="hover:text-primary">Pricing</a>
//             <a href="#" className="hover:text-primary">Contact</a>
//           </nav>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="text-primary hover:opacity-75 text-xl"
//               aria-label="Toggle theme"
//             >
//               {darkMode ? '🌞' : '🌙'}
//             </button>
//             <button className="md:hidden text-primary text-xl">☰</button>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="bg-primary text-primary-foreground py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Build stunning sites fast with Tailwind + React
//           </h2>
//           <p className="text-lg md:text-xl mb-8">
//             A modern and responsive landing page template.
//           </p>
//           <div className="space-x-4">
//             <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium shadow hover:bg-muted">
//               Get Started
//             </button>
//             <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-16 bg-muted text-muted-foreground">
//         <div className="max-w-6xl mx-auto px-6">
//           <h3 className="text-3xl font-semibold text-center mb-12">Awesome Features</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: "Fast Setup", desc: "Get started in seconds with minimal setup." },
//               { title: "Fully Responsive", desc: "Looks great on every device and screen size." },
//               { title: "Modern Stack", desc: "Powered by React + Tailwind for rapid dev." },
//             ].map((feature, i) => (
//               <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
//                 <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
//                 <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-primary text-primary-foreground text-center">
//         <h4 className="text-3xl font-bold mb-4">Ready to build something amazing?</h4>
//         <p className="mb-8">Join thousands of developers using this template.</p>
//         <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-muted">
//           Join Now
//         </button>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 dark:bg-black text-white py-6 text-center">
//         <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


