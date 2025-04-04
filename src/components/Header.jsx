import { SquareChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Utensils } from 'lucide-react';

const Header = () => {
    const scrollToFooter = () => {
        document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    };

    const [isVisible, setIsVisible] = useState(false);

    return (
        <header>
            <div className="bg-[#ee4444] h-12 text-white text-xl flex items-center justify-between px-6 md:px-12">
                <ul className="hidden md:flex space-x-10">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><button onClick={scrollToFooter} className="hover:underline">Details</button></li>
                </ul>

                <button className="md:hidden" onClick={() => setIsVisible(true)}>
                    <SquareChevronDown size={28} />
                </button>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full bg-[#ee4444] text-white flex flex-col items-center justify-center space-y-6 transform ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 md:hidden`}>
                <button className="absolute top-4 right-4" onClick={() => setIsVisible(false)}>
                    <X size={28} />
                </button>

                <ul className="flex flex-col space-y-6 text-2xl">
                    <li><a href="#" className="hover:underline" onClick={() => setIsVisible(false)}>Home</a></li>
                    <li><a href="#" className="hover:underline" onClick={() => setIsVisible(false)}>Contact</a></li>
                    <li><button onClick={() => { scrollToFooter(); setIsVisible(false); }} className="hover:underline">Details</button></li>
                </ul>
            </div>

            <div className={"absolute top-[13px] left-[1100px] flex flex-row gap-2"}>
                <Utensils className={"text-white"}/>
                <p className={"font-bold text-white"}>Recipe Explorer</p>
            </div>
        </header>
    );
};

export default Header;
