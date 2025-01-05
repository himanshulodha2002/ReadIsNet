import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex-grow mt-28 flex justify-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl bg-gray-800 bg-opacity-55 shadow-lg rounded-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 mb-6 text-center">
            About Us
          </h1>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Welcome to our platform, your ultimate destination for an enriched
            reading experience. Our mission is to empower readers with easy
            access to a diverse collection of books and to enhance their journey
            with innovative features. From AI-powered book discussions to
            interactive quizzes, we aim to make reading more engaging and
            insightful for everyone.
          </p>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg mt-4">
            We are committed to providing a seamless user experience, ensuring
            that you can explore, learn, and grow with every page you turn.
            Whether you’re a casual reader or a passionate book lover, our
            platform is designed to cater to your needs and spark your
            imagination.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default About;
