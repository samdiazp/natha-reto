"use client";
import React, { useState } from "react";
import Image from "next/image";

export const Us = () => {
  const images = ["/images/us.png", "/images/us_1.png", "/images/us_2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow" onClick={prevImage}>
        <span className="arrow-icon">&#9664;</span> {/* Left arrow */}
      </button>
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        width={700}
        height={560}
      />
      <button className="arrow right-arrow" onClick={nextImage}>
        <span className="arrow-icon">&#9654;</span> {/* Right arrow */}
      </button>
      <style jsx>{`
        .slider-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 500px;
          height: auto;
          margin: auto;
          overflow: hidden;
        }
        // ... existing code ...
        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.8); /* Light background */
          border: none;
          cursor: pointer;
          z-index: 1;
          font-size: 18px;
          border-radius: 50%; /* Rounded shape */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
          transition: background 0.3s, transform 0.3s; /* Smooth transitions */
        }
        .arrow-icon {
          display: inline-block;
          width: 40px; /* Increased size */
          height: 40px; /* Increased size */
          color: black; /* Darker color for contrast */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .left-arrow {
          left: 10px; /* Adjusted position */
        }
        .right-arrow {
          right: 10px; /* Adjusted position */
        }
        .arrow:hover {
          background: rgba(255, 255, 255, 1); /* Brighter on hover */
          transform: scale(1.1); /* Slightly larger on hover */
        }
        @media (max-width: 600px) {
          .arrow {
            font-size: 16px;
          }
          .arrow-icon {
            width: 35px; /* Adjusted for smaller screens */
            height: 35px; /* Adjusted for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};
