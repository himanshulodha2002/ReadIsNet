"use client";
import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import ChatBox from "./chatBox";

function BookViewer({ url, title }) {
  const [location, setLocation] = useState(null);

  const handleLocationChange = (loc) => {
    setLocation(loc);
  };

  return (
    <div className="flex h-screen w-full bg-[#1a1b26]">
      <ResizableBox
        className="bg-[#1a1b26] p-4"
        width={375}
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
        <ReactReader
          url={url}
          title={title}
          location={location}
          locationChanged={handleLocationChange}
          styles={{
            container: {
              backgroundColor: "#1a1b26", // Main container background
              height: "100%",
              width: "100%",
            },
          }}
          getRendition={(rendition) => {
            rendition.themes.register("dark", {
              body: {
                background: "#1a1b26 !important",
                color: "#c0caf5 !important",
              },
              "*": {
                background: "#1a1b26 !important",
                color: "#c0caf5 !important",
              },
              iframe: {
                background: "#1a1b26 !important", // Fix for iframe content
              },
            });
            rendition.themes.select("dark");
          }}
        />
      </ResizableBox>
    </div>
  );
}

export default BookViewer;
