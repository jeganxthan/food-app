import React from 'react'

const Footer = () => {
    return (
       <footer id="footer" className="bg-black text-gray-400 text-sm h-60">

           <div className={"flex justify-evenly "}>
           <a className={"hover:underline mt-20"} href="https://dummyjson.com/">
               This is a Food web made with DummyJson
           </a>
           <ul className={"mt-20 flex flex-col"}>
               <a href="www.linkedin.com/in/jeganathan-i-430869258" className={"hover:underline "}>LinkedIn</a>
               <a href="https://github.com/jeganxthan" className={"hover:underline "}>Github</a>
               <a href="" className={"hover:underline "}>Twitter</a>
           </ul>
           <ul className={"mt-20 flex flex-col"}>
               <a href="" className={"hover:underline "}>FaceBook</a>
               <a href="" className={"hover:underline "}>Instagram</a>
               <a href="" className={"hover:underline "}>Twitter</a>
           </ul>
           <ul className={"mt-20 flex flex-col"}>
               <a href="" className={"hover:underline "}>FaceBook</a>
               <a href="" className={"hover:underline "}>Instagram</a>
               <a href="" className={"hover:underline "}>Twitter</a>
           </ul>
           </div>
           <div className={"mt-6"}>
               <hr className="border-gray-700 my-6 " />

               <div className="text-center text-gray-500">
                   © {new Date().getFullYear()} YourBrand. All rights reserved.
               </div>

           </div>

       </footer>
    )
}
export default Footer
