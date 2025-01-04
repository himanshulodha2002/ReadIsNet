"use client";
import React, { useState } from "react";
import { ReactReader } from "react-reader";

function EPUBViewer() {
  const [location, setLocation] = useState(null);

  const handleLocationChange = (loc) => {
    setLocation(loc);
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      {/* Chatbox container */}
      <div
        style={{
          width: "20%",
          backgroundColor: "#f3f4f6",
          padding: "16px",
          overflowY: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          margin: "16px",
        }}
      >
        <h2
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}
        >
          Chatbox
        </h2>
        <p style={{ fontSize: "14px", color: "#555" }}>
          Start your conversation here!
        </p>
        {/* Add chat messages and input here */}
      </div>

      {/* EPUB viewer container */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: "16px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          margin: "16px",
        }}
      >
        <ReactReader
          url="/EPUB/How to Win Friends and Influence People by Dale Carnegie (z-lib.org).epub" // EPUB file path
          title="How to Win Friends and Influence People by Dale Carnegie"
          location={location}
          locationChanged={handleLocationChange}
          styles={{
            readerArea: {
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              borderRadius: "8px",
            },
          }}
        />
      </div>
    </div>
  );
}

export default EPUBViewer;
