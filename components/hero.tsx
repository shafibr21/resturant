"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./navbar";
import CircleImage from "./circle-image";

const Hero = () => {
  const dishes = [
    {
      id: 1,
      alt: "Belgian waffles",
      src: "/dish-1.png",
      mainColor: "#880808",
      circleColor: "#A52A2A",
    },
    {
      id: 2,
      alt: "Pancakes with butter and berries",
      src: "/dish-2.png",
      mainColor: "#0A4669",
      circleColor: "#0A3659",
    },
    {
      id: 3,
      alt: "French toast with syrup and toppings",
      src: "/dish-3.png",
      mainColor: "#953553",
      circleColor: "#A95C68",
    },
    {
      id: 4,
      alt: "Crepes with fresh fruit",
      src: "/dish-4.png",
      mainColor: "#006666",
      circleColor: "#003333",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    // Only allow clicking adjacent images (left or right)
    if (Math.abs(index - selectedIndex) === 1) {
      setSelectedIndex(index);
    }
  };

  // Calculate the rotation angle based on selected index
  const rotationAngle = selectedIndex * 90; // 0 -> 0°, 1 -> 90°, 2 -> 180°, 3 -> 270°

  return (
    <div
      className="min-h-screen relative overflow-hidden transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: dishes[selectedIndex].mainColor }}
    >
      {/* Background Circles */}
      <div
        className="w-[1079px] h-[1079px] rounded-full absolute z-0 transition-colors duration-700 ease-in-out"
        style={{
          backgroundColor: dishes[selectedIndex].circleColor,
          top: "-360px",
          left: "-428px",
          transform: "rotate(-14.55deg)",
        }}
      ></div>
      {/* Navbar Section */}
      <div>
        <Navbar />
      </div>
      {/* Main Content */}
      <div
        className="relative px-16 flex items-center"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        {/* Left Content */}
        <div className="space-y-8 z-10 max-w-2xl">
          {/* Heading */}
          <div>
            <h2
              className="text-white font-poppins mb-6"
              style={{
                fontWeight: "400",
                fontSize: "96px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              BREAKFAST
            </h2>
            <p
              className="text-white max-w-2xl font-poppins"
              style={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "150%",
              }}
            >
              Breakfast, often referred to as the 'most important meal of the
              day', provides essential nutrients to kick start our day. It
              includes a variety of foods, like fruits, cereals, dairy products,
              and proteins, that contribute to a balanced diet.
            </p>
          </div>

          {/* Dish Carousel */}
          <div className="flex gap-4 pt-4">
            {dishes.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const isClickable = Math.abs(idx - selectedIndex) === 1;

              return (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-[120px] h-[120px] rounded-full overflow-hidden shadow-xl transition-all bg-white ${
                      isSelected
                        ? "border-white/50"
                        : isClickable
                        ? "border-white/30 hover:border-white/50 cursor-pointer"
                        : "border-white/20 opacity-70 cursor-not-allowed"
                    }`}
                    onClick={() => handleImageClick(idx)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isSelected && (
                    <div className="w-20 h-1 bg-white mt-3 mx-auto rounded" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content - Feature Image */}
        <div
          className="absolute z-10 scale-180"
          style={{
            right: "-320px",
            top: "140%",
            transform: "translateY(-50%)",
          }}
        >
          <CircleImage dishes={dishes} size={700} rotation={rotationAngle} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
