"use client";
import ChatBox from "@/app/components/chatBox";
import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export default function SummaryChat({ title }) {
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
        <ChatBox title={title} />
      </ResizableBox>
      <ResizableBox
        className="flex-1 bg-[#1a1b26] p-4"
        width={Infinity}
        height={Infinity}
        minConstraints={[200, Infinity]}
        maxConstraints={[Infinity, Infinity]}
        resizeHandles={["w"]}
      >
        <div>
          <p></p>
        </div>
      </ResizableBox>
    </div>
  );
}
