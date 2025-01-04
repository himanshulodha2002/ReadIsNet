"use client";
import React, { useState } from "react";
import { ReactReader } from "react-reader";
import ChatBox from "./chatBox";

function BookViewer({ url, title }) {
  const [location, setLocation] = useState(null);

  const handleLocationChange = (loc) => {
    setLocation(loc);
  };

  return (
    <div className="flex h-screen w-full bg-[#1a1b26]">
      <ChatBox title = {title} />
      <div className="flex-1 bg-[#1a1b26] p-4">
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
      </div>
    </div>
  );
}

export default BookViewer;
