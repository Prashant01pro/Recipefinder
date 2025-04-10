
// with the help of chatgpt code and self
import { useState } from "react";
import setting from "./api/setting.json";
import { Dishes } from "./DishesComponent";

export const NewApp = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter dishes based on the search term (case-insensitive)
  const filteredDishes = setting.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.recipe.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="w-full h-full">
        <nav>
          <h1 className="w-full h-[2.5rem] text-3xl font-sans font-bold text-white text-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-[#f97316] via-[#fdba74] to-[#ffedd5]">
            THE RECIPE FINDER
          </h1>
        </nav>

        <div className="h-[18rem] w-full bg-[url('https://hayattlounge.co.uk/wp-content/uploads/2021/05/intor-topheadbg.jpg')] bg-cover bg-center bg-blend-overlay flex flex-col items-center justify-center">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/4 p-2 pl-4 bg-white rounded-3xl max-sm:w-1/2"
            placeholder="Search Dish..."
          />
{/* This code is also from chatgpt */}
{filteredDishes.length === 0 && searchTerm.trim() !== "" && (
  <a
    href={`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}+dish+recipe`}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600 transition-all"
  >
    Search "{searchTerm}" on Google
  </a>
)}


          <h2 className="text-3xl text-white font-semibold pt-4">
            What are your favourite Dishes
          </h2>
          <p className="text-[#ffffff9e] text-base pt-3">
            PERSONALIZE YOUR EXPERIENCE
          </p>
        </div>

        <h2 className="font-bold text-3xl tracking-widest ml-20 my-6 border-b-4 border-orange-500 max-w-fit">
          MEALS
        </h2>

        <div className="grid mx-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish, index) => (
              <Dishes
                key={index}
                name={dish.name}
                image={dish.image}
                recipe={dish.recipe}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No dishes found.</p>
          )}
        </div>
      </section>
    </>
  );
};
