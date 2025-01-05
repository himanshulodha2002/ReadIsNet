"use client";
import ChatBox from "@/app/components/chatBox";
import { summary } from "@/app/lib/bookData";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

function SummaryChatContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const bookSummary = summary.find((book) => book.id === id);

  return (
    <div className="flex h-screen w-full bg-[#1a1b26]">
      <ResizableBox
        className="bg-[#1a1b26] p-4"
        width={500}
        height={Infinity}
        minConstraints={[200, Infinity]}
        maxConstraints={[600, Infinity]}
        resizeHandles={["e"]}
      >
        <ChatBox title={bookSummary.title} />
      </ResizableBox>
      <ResizableBox
        className="flex-1 bg-[#1a1b26] p-4"
        width={Infinity}
        height={Infinity}
        minConstraints={[200, Infinity]}
        maxConstraints={[Infinity, Infinity]}
        resizeHandles={["w"]}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-white bg-white border-r border-gray-200 dark:bg-gray-600 rounded-2xl p-4 m-[5rem] items-center ">
            {bookSummary ? (
              <>
                <h2 className="text-2xl font-bold mb-4">{bookSummary.title}</h2>
                <p className="text-lg">{bookSummary.summary}</p>
              </>
            ) : (
              <p>No summary available for this book.</p>
            )}
          </div>
        </div>
      </ResizableBox>
    </div>
  );
}

export default function SummaryChat() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SummaryChatContent />
    </Suspense>
  );
}
