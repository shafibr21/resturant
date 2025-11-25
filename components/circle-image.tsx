"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";

interface Dish {
  id: number;
  alt: string;
  src: string;
  mainColor: string;
  circleColor: string;
}

interface CircleImageProps {
  size?: number;
  dishes: Dish[];
  rotation: number; // Rotation passed as a prop
}

const CircleImage: React.FC<CircleImageProps> = ({
  size = 300,
  dishes,
  rotation,
}) => {
  // Function to calculate the dish at 135 degrees based on the rotation
  const getCircleColor = (rotation: number) => {
    const angleAt135 = (rotation + 45) % 360; // Get the angle at 135-degree from current rotation
    const dishIndex = Math.floor((angleAt135 / 360) * dishes.length); // Get the index based on 135 degrees
    return dishes[dishIndex].circleColor; // Return the circle color based on the index
  };

  const circleColor = getCircleColor(rotation); // Get the circle color dynamically

  const circleStyle: CSSProperties = {
    position: "relative",
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: circleColor, // Use the dynamically passed circle color
    transform: `rotate(${rotation}deg)`, // Apply rotation
    transition: "transform 0.5s ease", // Smooth transition for rotation
  };

  const imageSize = size * 0.35; // Increased from 25% to 35% of circle size
  const radius = size / 2;

  // Function to calculate position based on angle
  const getPosition = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    const top = radius - radius * Math.sin(radians) - imageSize / 2;
    const left = radius + radius * Math.cos(radians) - imageSize / 2;
    return { top: `${top}px`, left: `${left}px` };
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div style={circleStyle}>
        {/* First image at 45 degrees */}
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "50%",
            borderRadius: "50%",
            overflow: "hidden",
            ...getPosition(135), // 135 degrees
          }}
        >
          <Image
            src={dishes[0].src}
            alt={dishes[0].alt}
            width={200}
            height={200}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        {/* Second image at 135 degrees */}
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "50%",
            borderRadius: "50%",
            overflow: "hidden",
            ...getPosition(225), // 225 degrees
          }}
        >
          <Image
            src={dishes[1].src}
            alt={dishes[1].alt}
            width={200}
            height={200}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        {/* Third image at 225 degrees */}
        <div
          style={{
            position: "absolute",
            width: "45%",
            height: "45%",
            borderRadius: "50%",
            overflow: "hidden",
            ...getPosition(315), // 315 degrees
          }}
        >
          <Image
            src={dishes[2].src}
            alt={dishes[2].alt}
            width={200}
            height={200}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        {/* Fourth image at 315 degrees */}
        <div
          style={{
            position: "absolute",
            width: "45%",
            height: "45%",
            borderRadius: "50%",
            overflow: "hidden",
            ...getPosition(45), // 45 degrees
          }}
        >
          <Image
            src={dishes[3].src}
            alt={dishes[3].alt}
            width={200}
            height={200}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CircleImage;
