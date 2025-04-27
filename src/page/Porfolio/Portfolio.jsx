import React from 'react';

function Portfolio() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-10 px-5 transition-colors duration-300" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h1
          className="text-4xl font-bold mb-6"
          data-aos="fade-up"
        >
          Omolewa Adeniji.
        </h1>
        <p
          className="text-lg mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Welcome to my portfolio! I am a passionate software developer with a focus on creating
          innovative and user-friendly solutions. With expertise in modern web technologies, I strive
          to deliver high-quality projects that make a difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Project 1",
              desc: "A web application designed to simplify task management and improve productivity."
            },
            {
              title: "Project 2",
              desc: "An e-commerce platform with a seamless user experience and secure payment integration."
            },
            {
              title: "Project 3",
              desc: "A portfolio website showcasing creative projects and technical skills."
            },
          ].map((project, i) => (
            <div
              key={i}
              className="bg-[var(--background)] text-[var(--foreground)] p-6 rounded-lg transition-colors duration-300"
              style={{ boxShadow: "var(--card-shadow)" }} // 👈 Smooth theme-aware shadow
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
