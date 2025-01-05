"use client";
import { booksData } from "@/app/lib/bookData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BackgroundLines } from "../../components/ui/background-lines";

function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = [
    "All",
    "Biography",
    "Computer",
    "Fiction",
    "Science",
    "Finance",
    "Life",
    "Self",
  ];

  const filteredBooks =
    selectedGenre === "All"
      ? booksData
      : booksData.filter((book) => book.genre === selectedGenre);

  return (
    <BackgroundLines className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex mt-16">
        {/* Filter Container */}
        <div className="w-1/5 h-[70vh] p-4 bg-white border-r border-gray-200 dark:bg-gray-600 dark:bg-opacity-35 rounded-2xl dark:border-gray-700 overflow-y-auto fixed top-1/2 transform -translate-y-1/2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Filter by Genre
          </h3>
          <ul className="space-y-2">
            {genres.map((genre) => (
              <li key={genre}>
                <button
                  onClick={() => setSelectedGenre(genre)}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    selectedGenre === genre
                      ? "bg-blue-900 text-white"
                      : "text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Books Grid */}
        <div className="ml-[20%] w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              className="flex flex-col justify-between max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:bg-opacity-35 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href={book.link}>
                <div className="h-48 w-full relative">
                  <Image
                    className="rounded-t-lg object-contain"
                    layout="fill"
                    src={book.image}
                    alt={`Card ${index + 1}`}
                  />
                </div>
              </Link>
              <div className="flex flex-col flex-grow p-3">
                <Link href={`/books/${book.link}`}>
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.title}
                  </h5>
                </Link>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                  {book.description}
                </p>
                <div className="mt-auto flex justify-between">
                  <Link
                    href={`/books/${book.link}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-950 border rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    Read Now
                  </Link>
                  <Link
                    href={`/Pages/summarychat/?id=${book.link}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 border rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
                  >
                    Summary Chat
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </BackgroundLines>
  );
}

export default HomePage;
