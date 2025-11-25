"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const partners = [
  {
    id: "1",
    name: "Restaurant",
    logo: "/restaurant.png",
  },
  {
    id: "2",
    name: "Bakery",
    logo: "/bakery.png",
  },
  {
    id: "3",
    name: "Fork & Spoon",
    logo: "/fork-spoon.png",
  },
  {
    id: "4",
    name: "Wolf Coffee",
    logo: "/coffee.png",
  },
  {
    id: "5",
    name: "Bistro",
    logo: "/bistro.png",
  },
  {
    id: "6",
    name: "Bakery",
    logo: "/bakery-1.png",
  },
];

export default function PartnersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Duplicate the partners for seamless loop
    const itemWidth = 240 + 32; // width + gap
    const totalWidth = itemWidth * partners.length;

    // Start from negative position to fill the left side
    gsap.set(carousel, { x: -totalWidth });

    // Create infinite loop animation moving right
    const animation = gsap.to(carousel, {
      x: 0,
      duration: 20,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(carousel, { x: -totalWidth });
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        {/* Subtitle */}
        <p className="text-red-500 font-poppins font-semibold mb-2">
          Partners & Clients
        </p>

        {/* Main heading */}
        <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-8">
          We work with the best pepole
        </h2>

        {/* Partners logos carousel */}
        <div className="overflow-hidden relative">
          <div ref={carouselRef} className="flex gap-8 items-center">
            {/* Render partners twice for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex items-center justify-center shrink-0"
                style={{ width: "240px", height: "128px" }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={240}
                  height={128}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity p-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
