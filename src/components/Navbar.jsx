import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ search, setSearch, setFilterTag, setFilterName, recipes, setRecipes }) => {
    const [tags, setTags] = useState("");
    const [name, setName] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleSortAscending = () => {
        const sorted = [...recipes].sort((a, b) => a.name.localeCompare(b.name));
        setRecipes(sorted);
    };

    const handleTagChange = (e) => {
        setTags(e.target.value);
        setFilterTag(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setFilterName(e.target.value);
    };

    const uniqueTags = [...new Set(recipes.flatMap((recipe) => recipe.tags))];

    return (
        <nav className="p-2 mt-4 relative">
            <button onClick={() => setIsVisible(true)} className="md:hidden">
                <Menu size={28} />
            </button>
            <input
                type="text"
                className="w-full h-[30px] border-none  pl-2 absolute top-[-455px] left-[500px] hidden md:block"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsVisible(false)}>
                        <X size={28} />
                    </button>
                </div>

                <div className="p-4">
                    <input
                        type="text"
                        className="w-full h-[30px] border rounded-2xl pl-2"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="p-4">
                    <button onClick={handleSortAscending} className="btn-clr w-full">Sort by Name (Ascending)</button>
                </div>

                <div className="p-4">
                    <h1 className="text-xl font-bold text-[#ee4444]">Recipe by Tag</h1>
                    <select value={tags} onChange={handleTagChange} className="bg-gray-200 w-full">
                        <option value="">-- Choose a Tag --</option>
                        {uniqueTags.map((tag, index) => (
                            <option key={index} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>

                <div className="p-4">
                    <h1 className="text-xl font-bold text-[#ee4444]">Select by Meal Name</h1>
                    <select value={name} onChange={handleNameChange} className="bg-gray-200 w-full">
                        <option value="">-- Choose a Meal --</option>
                        {recipes.map((recipe, index) => (
                            <option key={index} value={recipe.name}>{recipe.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-col">
                <div className="card p-7">
                    <input
                        type="text"
                        className="w-[200px] h-[30px] border rounded-2xl pl-2"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="card p-7 mt-4">
                    <button onClick={handleSortAscending} className="btn-clr">Sort by Name (Ascending)</button>
                </div>
                <div className="card mt-4 py-3">
                    <h1 className="text-xl font-bold text-[#ee4444]">Recipe by Tag</h1>
                    <select value={tags} onChange={handleTagChange} className="bg-gray-200">
                        <option value="">-- Choose a Tag --</option>
                        {uniqueTags.map((tag, index) => (
                            <option key={index} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
                <div className="card mt-4 py-3">
                    <h1 className="text-xl font-bold text-[#ee4444]">Select by Meal Name</h1>
                    <select value={name} onChange={handleNameChange} className="bg-gray-200 w-[200px]">
                        <option value="">-- Choose a Meal --</option>
                        {recipes.map((recipe, index) => (
                            <option key={index} value={recipe.name}>{recipe.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
