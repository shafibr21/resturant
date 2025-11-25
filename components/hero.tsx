"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Navbar from "./navbar";

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
  const [backgroundColor, setBackgroundColor] = useState(dishes[0].mainColor);
  const [circleColor, setCircleColor] = useState(dishes[0].circleColor);
  const featureImageRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);

  const handleImageClick = (index: number) => {
    // Only allow clicking adjacent images (left or right)
    if (Math.abs(index - selectedIndex) === 1) {
      animateTransition(index);
    }
  };

  const animateTransition = (newIndex: number) => {
    const isMovingRight = newIndex > selectedIndex;
    const featureImage = featureImageRef.current;
    const circle2 = circle2Ref.current;

    if (!featureImage) return;

    // Create timeline animation
    const timeline = gsap.timeline({
      onStart: () => {
        // Start color transition
        gsap.to(backgroundRef.current, {
          backgroundColor: dishes[newIndex].mainColor,
          duration: 1.2,
          ease: "power2.inOut",
        });
        gsap.to([circle1Ref.current, circle2Ref.current], {
          backgroundColor: dishes[newIndex].circleColor,
          duration: 1.2,
          ease: "power2.inOut",
        });
      },
      onComplete: () => {
        setSelectedIndex(newIndex);
        setBackgroundColor(dishes[newIndex].mainColor);
        setCircleColor(dishes[newIndex].circleColor);
      },
    });

    // Slide current image out at 45 degrees down
    timeline.to(featureImage, {
      duration: 0.7,
      x: 200,
      y: 200,
      opacity: 0,
      ease: "power2.inOut",
    });

    // Slide new image in from 45 degrees down from top (from second circle area)
    timeline.fromTo(
      featureImage,
      {
        x: 200,
        y: -400,
        opacity: 0,
      },
      {
        duration: 0.7,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
      },
      "-=0.3"
    );

    // Animate second circle movement
    if (circle2) {
      timeline.to(
        circle2,
        {
          duration: 1.2,
          x: isMovingRight ? 20 : -20,
          y: isMovingRight ? -20 : 20,
          ease: "power2.inOut",
        },
        0
      );

      timeline.to(
        circle2,
        {
          duration: 1.2,
          x: 0,
          y: 0,
          ease: "power2.inOut",
        },
        "-=0.6"
      );
    }
  };

  return (
    <div
      ref={backgroundRef}
      className="max-h-screen max-w-screen transition-colors duration-500"
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Background Circles */}
      <div
        ref={circle1Ref}
        className="w-[1079px] h-[1079px] rounded-full p-4 absolute z-0 transition-colors duration-500"
        style={{
          backgroundColor: circleColor,
          top: "-360px",
          left: "-428px",
          transform: "rotate(-14.55deg)",
        }}
      ></div>
      {/* Second Circle */}
      <div
        ref={circle2Ref}
        className="w-[1312.52px] h-[1282.4px] rounded-full absolute z-0 transition-colors duration-500"
        style={{
          backgroundColor: circleColor,
          top: "270px",
          left: "1270px",
          clipPath: "inset(0 0 50% 0)", // Clip the bottom 50% to remove the overflow
        }}
      ></div>
      {/* Navbar Section */}
      <div>
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="px-16 grid grid-cols-2 gap-20 max-h-600vh ">
        {/* Left Content */}
        <div className="space-y-7 z-10 flex flex-col justify-center">
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
        <div
          ref={featureImageRef}
          className="flex z-10"
          style={{ transform: "translateY(-70px)" }}
        >
          <Image
            src={dishes[selectedIndex].src}
            alt={dishes[selectedIndex].alt}
            width={628}
            height={1013}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
