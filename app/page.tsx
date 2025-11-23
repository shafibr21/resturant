"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const dishes = [
    { alt: "Belgian waffles", src: "/dish-1.png" },
    { alt: "Pancakes with butter and berries", src: "/dish-2.png" },
    { alt: "French toast with syrup and toppings", src: "/dish-3.png" },
    { alt: "Crepes with fresh fruit", src: "/dish-4.png" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    // Only allow clicking adjacent images (left or right)
    if (Math.abs(index - selectedIndex) === 1) {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="max-h-screen bg-[#880808]">
      {/* Background Circles */}
      <div
        className="w-[1079px] h-[1079px] bg-[#A52A2A] rounded-full p-4 absolute z-0"
        style={{
          top: "-360px",
          left: "-428px",
          transform: "rotate(-14.55deg)",
        }}
      ></div>
      <div
        className="w-[1312.52px] h-[1282.4px] bg-[#A52A2A] rounded-full absolute z-0"
        style={{
          top: "270px",
          left: "1270px",
          clipPath: "inset(0 0 50% 0)", // Clip the bottom 50% to remove the overflow
        }}
      ></div>
      {/* Navbar Section */}
      <div className="relative flex items-center justify-between p-8">
        <h1
          className="text-white font-poppins text-4xl font-bold z-10 hidden md:block"
          style={{
            width: "211px",
            height: "48px",
            top: "51px",
            left: "65px",
          }}
        >
          RESTAURANT
        </h1>
        <div
          className="flex items-center bg-white rounded-full px-6 py-3 w-96 shadow-lg"
          style={{
            width: "821px",
            height: "61px",
            top: "50px",
            left: "1039px",
          }}
        >
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent outline-none text-gray-900 w-full placeholder-gray-400"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          />
        </div>
      </div>
      {/* Main Content */}
      <div className="px-16 grid grid-cols-2 gap-20 ">
        {/* Left Content */}
        <div
          className="space-y-7 z-10 max-w-2xl"
          style={{ transform: "translateY(150px)" }}
        >
          {/* Heading */}
          <div className="w-[900px] h-[222px] top-[243px] left-[88px]">
            <div>
              <h2
                className="text-white font-poppins w-lg h-36"
                style={{
                  fontWeight: "400",
                  fontSize: "96px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  fontStyle: "normal",
                }}
              >
                BREAKFAST
              </h2>
            </div>
            <div>
              <p
                className="text-white max-w-4xl font-poppins h-[90px]"
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  fontStyle: "bold",
                }}
              >
                Breakfast, often referred to as the 'most important meal of the
                day', provides essential nutrients to kick start our day. It
                includes a variety of foods, like fruits, cereals, dairy
                products, and proteins, that contribute to a balanced diet.
              </p>
            </div>
          </div>

          {/* Dish Carousel */}
          <div className="flex gap-6 pt-6">
            {dishes.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const isClickable = Math.abs(idx - selectedIndex) === 1;

              return (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-[120px] h-[120px] rounded-full overflow-hidden shadow-xl border-4 transition-all bg-white ${
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
        <div className="flex z-10">
          <Image
            src={dishes[selectedIndex].src}
            alt={dishes[selectedIndex].alt}
            width={628}
            height={1013}
            className="transition-all duration-300"
            style={{ transform: "translateY(-70px)" }}
          />
        </div>
      </div>
    </div>
  );
}
