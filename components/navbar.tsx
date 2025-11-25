"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Sample dishes data for search
const dishes = [
  {
    id: 1,
    name: "Chicken Breast",
    image: "/chicken-breast-with-rice.png",
    category: "Main Course",
  },
  {
    id: 2,
    name: "Chicken Roll",
    image: "/chicken-roll-appetizer.png",
    category: "Main Course",
  },
  {
    id: 3,
    name: "Fruit Basic",
    image: "/chicken-breast-with-rice.png",
    category: "Dessert",
  },
  {
    id: 4,
    name: "Salad Fry",
    image: "/chicken-roll-appetizer.png",
    category: "Appetizer",
  },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative flex items-center justify-between px-8 pt-8">
      <h1 className="text-white font-poppins text-4xl font-bold z-10 hidden md:block">
        RESTAURANT
      </h1>
      <div className="relative">
        <div
          className={`flex items-center bg-white rounded-full px-6 py-3 shadow-lg cursor-pointer z-10 ${isSearchOpen ? 'rounded-b-none rounded-t-3xl' : ''}`}
          style={{
            width: "821px",
            height: "61px",
          }}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent outline-none text-gray-900 w-full placeholder-gray-400 font-poppins"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
          />
        </div>

        {/* Search Dropdown */}
        {isSearchOpen && (
          <div
            className="absolute top-full border-t bg-white rounded-b-3xl shadow-2xl overflow-hidden z-50"
            style={{ width: "821px" }}
          >
            {/* Search Results */}
            <div className="max-h-70 overflow-y-auto">
              {filteredDishes.length > 0 ? (
                filteredDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="flex items-center px-6 py-1 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="relative w-18 h-14 rounded-sm overflow-hidden mr-4 shrink-0">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-poppins text-gray-900 font-medium text-lg">
                        {dish.name}
                      </h3>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-gray-400 font-poppins">
                  No results found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
