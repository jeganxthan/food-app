import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import { House } from 'lucide-react';
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
const Recipe = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setRecipe(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching recipes:", error));
    }, [id])
    if(loading){
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Header/>
            <div className="max-w-2xl mx-auto p-6 bg-[#FFFADA] shadow-lg rounded-lg text-black mt-10">
                <h1 className="text-3xl font-bold text-center">{recipe.name}</h1>
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-64 object-cover rounded-md mt-4"
                />
                <p className="border-l-4 border-red-600 mt-4 bg-red-200 p-4"><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                <p className="mt-2 border-l-4 border-yellow-600 bg-yellow-200 p-4"><strong>Instructions:</strong> {recipe.instructions}</p>
                <button className={"bg-[#ee4444] rounded-3xl text-white mt-2"}>
                    <Link to="/" className="p-2 hover:scale-110 flex flex-row items-center">
                        <House className={""}/>
                    </Link>
                </button>
            </div>
            <Footer/>
        </div>
    )
}
export default Recipe
