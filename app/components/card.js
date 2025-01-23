"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="flex flex-col items-center py-4 px-4 sm:px-6 md:px-8">
      <CardBody className="w-full max-w-3xl text-center p-6 bg-white rounded-2xl shadow dark:bg-gray-500 dark:bg-opacity-35 flex flex-col items-center">
        <CardItem
          translateZ="50"
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-200"
        >
          ...ReadIsNet...
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-200"
        >
          Interactive Book Reader
        </CardItem>
        <div className="flex justify-center items-center mt-4">
          <Link href="Pages/Login">
            <CardItem
              translateZ={20}
              as="button"
              className="shadow-2xl inline-flex items-center px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base font-medium text-center text-white bg-blue-950 rounded-3xl border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-950 dark:bg-opacity-90 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
            >
              Get Started
            </CardItem>
          </Link>
        </div>
        <CardItem
          as="p"
          translateZ="40"
          className="mb-3 mt-4 text-sm sm:text-base md:text-lg font-normal text-gray-300 text-center px-2"
        >
          Welcome to Our Online Library. Dive into a world of endless
          possibilities with our carefully curated collection of books. Whether
          you're a fan of gripping mysteries, inspiring biographies, or
          immersive fiction, we have something for everyone.
        </CardItem>
        <CardItem
          as="p"
          translateZ="40"
          className="mb-3 text-sm sm:text-base md:text-lg font-normal text-gray-300 text-center px-2"
        >
          Click on any book to start reading and let your imagination soar!
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
