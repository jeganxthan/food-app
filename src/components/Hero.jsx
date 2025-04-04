import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Star } from 'lucide-react';
import banner from "../assets/banner1.jpg";

const Hero = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [filterTag, setFilterTag] = useState("");
    const [filterName, setFilterName] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => setRecipes(data.recipes))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    const filteredRecipes = recipes.filter(
        (recipe) =>
            recipe.name.toLowerCase().includes(search.toLowerCase()) &&
            (filterTag === "" || recipe.tags.includes(filterTag)) &&
            (filterName === "" || recipe.name === filterName)
    );

    return (
        <section>
            <div>
                <img src={banner} alt="banner" className="h-[400px] w-full object-cover object-center" />
            </div>
            <div className="flex flex-row">
                <Navbar
                    search={search}
                    setSearch={setSearch}
                    setFilterTag={setFilterTag}
                    setFilterName={setFilterName}
                    recipes={recipes}
                    setRecipes={setRecipes}
                />
                <div className="flex flex-wrap gap-6 items-center mt-8 ml-10 md:ml-0 md:mt-0 md:p-14 w-1/2 md:w-full justify-center">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="border border-gray-300 rounded-lg shadow-md w-[300px] flex flex-col items-center bg-[#FFFADA] hover:shadow-lg transition duration-300 hover:scale-110 h-[440px] px-2 py-2 md:p-0"
                            >
                                <Link to={`/recipe/${recipe.id}`}>
                                    <img
                                        src={recipe.image}
                                        alt={recipe.name}
                                        className="object-cover h-[200px] w-[300px] cursor-pointer"
                                    />
                                </Link>
                                <div className="flex flex-col justify-start items-start">
                                    <h1 className="text-lg font-semibold mt-4 text-center text-black">{recipe.name}</h1>
                                    <div className="text-yellow-400 flex flex-row gap-x-2 items-center">
                                        <Star className="w-4 h-4 fill-yellow-400 text-black" />
                                        {recipe.rating}
                                    </div>
                                    <div className="flex flex-row gap-x-3">
                                        {recipe.tags?.slice(0, 2).map((tag, index) => (
                                            <p key={index} className="bg-gray-100 text-xs p-0.5 rounded">
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="text-sm mt-2">
                                        <p><span className="font-medium">Cuisine:</span> {recipe.cuisine}</p>
                                        <p><span className="font-medium">Difficulty:</span> {recipe.difficulty}</p>
                                        <p><span className="font-medium">Prep Time:</span> {recipe.prepTimeMinutes}</p>
                                        <p><span className="font-medium">Cook Time:</span> {recipe.cookTimeMinutes}</p>
                                    </div>
                                    <Link to={`/recipe/${recipe.id}`}>
                                        <button className="btn-clr">View Recipe</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-xl">Loading...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
