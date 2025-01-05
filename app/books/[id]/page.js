"use client";
import BookViewer from "@/app/components/bookViewer";
import { booksData } from "@/app/lib/bookData";
import { useParams } from "next/navigation";
import React from "react";

function BookPage() {
  const params = useParams();
  const id = params.id;

  // Find the book using the id parameter
  const book = booksData.find((b) => b.link === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return <BookViewer url={book.epub} title={book.title} />;
}

export default BookPage;
