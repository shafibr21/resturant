"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Dish {
  id: string;
  name: string;
  category: "breakfast" | "lunch" | "dinner";
  price: number;
  image: string;
  rating: number;
}

const dishes: Dish[] = [
  {
    id: "1",
    name: "Salad Fry",
    category: "breakfast",
    price: 230,
    image: "/salad-fry-with-vegetables.png",
    rating: 5,
  },
  {
    id: "2",
    name: "Chicken Breast",
    category: "lunch",
    price: 230,
    image: "/chicken-breast-with-rice.png",
    rating: 5,
  },
  {
    id: "3",
    name: "Chicken Legs",
    category: "dinner",
    price: 230,
    image: "/roasted-chicken-legs.png",
    rating: 5,
  },
  {
    id: "4",
    name: "Fruit Basic",
    category: "lunch",
    price: 230,
    image: "/fresh-fruit-bowl.png",
    rating: 5,
  },
  {
    id: "5",
    name: "Veggie salad",
    category: "dinner",
    price: 230,
    image: "/fresh-vegetable-salad.png",
    rating: 5,
  },
  {
    id: "6",
    name: "Chicken Roll",
    category: "breakfast",
    price: 230,
    image: "/chicken-roll-appetizer.png",
    rating: 5,
  },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Breakfast", value: "breakfast" },
  { name: "Lunch", value: "lunch" },
  { name: "Dinner", value: "dinner" },
];

const categoryBadgeColors: Record<string, string> = {
  breakfast: "bg-red-500",
  lunch: "bg-red-500",
  dinner: "bg-red-500",
};

export default function BestSellerSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDishes =
    selectedCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Dishes:", filteredDishes);

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-gray-800">
            Our best Seller Dishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
            Our fresh garden salad is a light and refreshing option. It features
            a mix of crisp lettuce, juicy tomato all tossed in your choice of
            dressing.
          </p>
        </div>

        {/* Filters and Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex gap-5">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full font-poppins font-medium transition-colors ${
                  selectedCategory === category.value
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-poppins font-medium hover:bg-gray-900 transition-colors">
              Add Food
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-poppins font-medium hover:bg-gray-900 transition-colors">
              Add Category
            </button>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="flex flex-col">
              {/* Image */}
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold font-poppins text-gray-800">
                    {dish.name}
                  </h3>
                  <span
                    className={`${
                      categoryBadgeColors[dish.category]
                    } text-white text-xs font-bold px-3 py-1 rounded-full font-poppins`}
                  >
                    {dish.category.charAt(0).toUpperCase() +
                      dish.category.slice(1)}
                  </span>
                </div>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex gap-1">
                    {Array.from({ length: dish.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold font-poppins text-gray-800">
                    ${dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
