"use client";
import booksData from "@/app/components/bookViewer";
import BookViewer from "@/app/lib/bookData";

import React from "react";
// import booksData from "../../bookData";
// import BookViewer from "../../components/BookViewer";

function BookPage() {
  const book = booksData.find((b) => b.link === "b1");

  return <BookViewer url={book.epub} title={book.title} />;
}

export default BookPage;
