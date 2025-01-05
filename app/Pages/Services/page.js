import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/Footer";

function Services() {
  const services = [
    {
      title: "Read Books Online",
      description:
        "Discover a vast collection of books available to read directly on our platform. Whether it’s fiction, non-fiction, or a niche genre, we’ve got something for everyone.",
    },
    {
      title: "Genre-Based Book Filtering",
      description:
        "Easily find the books that match your interests by filtering through genres. From romance to science fiction, we help you explore what you love.",
    },
    {
      title: "AI-Powered Book Conversations",
      description:
        "Dive deeper into the books you’re reading with our AI assistant. Ask questions, discuss themes, and gain unique insights into the story.",
    },
    {
      title: "Interactive Quizzes",
      description:
        "Test your knowledge and understanding of the books with engaging quizzes. Learn, challenge yourself, and track your progress.",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Discover books tailored to your preferences, helping you find your next great read effortlessly.",
    },
    {
      title: "Seamless User Experience",
      description:
        "Navigate with ease across our responsive and user-friendly platform, designed for readers of all ages.",
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="mt-16 flex flex-col items-center px-4 sm:px-8 lg:px-16">
        <h1 className="mt-5 font-extrabold text-4xl sm:text-5xl text-center text-gray-100 mb-10">
          Our Services
        </h1>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
          <div className="flex flex-col items-center space-y-8 lg:space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center w-full flex-col lg:flex-row ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                <div className="relative w-full max-w-xs lg:w-5/12">
                  <div
                    className={`absolute hidden lg:block top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-300 w-8 sm:w-10 ${
                      index % 2 === 0
                        ? "-right-8 sm:-right-10"
                        : "-left-8 sm:-left-10"
                    }`}
                  ></div>
                  <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
