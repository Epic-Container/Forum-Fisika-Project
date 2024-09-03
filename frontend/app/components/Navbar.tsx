"use client"
import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
const Navbar = () => {
    return (
        <div className="w-[50px] md:w-[220px] h-screen secondary-dark">
            <div className="flex flex-col py-2 overflow-y-auto items-center gap-4">
                <h1 className="hidden md:block font-bold border-b-2 p-3 text-xl">
                    Forum Fisika
                </h1>
                <button className="navbar-button trinary-dark">
                    <MdOutlineAccountCircle />
                    <span className="navbar-button-text">Account</span>
                </button>
                <button>
                    
                </button>
                <button>

                </button>
                <button>

                </button>
            </div>
        </div>
    );
};
export default Navbar;