import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Main">
      <div className="Title">
        <div className={`slides slide${currentSlide}`}></div>
        <div className="title-text">
          <h1>HAIR BY MADDY KATE</h1>
          <h3>Blonde | Lived-in Color | Extensions</h3>
        </div>
      </div>
      <div className="review"></div>
      <div className="review"></div>
    </div>
  );
}
