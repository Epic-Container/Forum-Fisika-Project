"use client"
import React from "react";
import { MdOutlineAccountCircle, MdChatBubbleOutline, MdAnnouncement } from "react-icons/md";
const Navbar = () => {

    return (
        <div className="fixed group transtition-all duration-150 w-[60px] md:hover:w-[250px] h-screen secondary-dark rounded-r-lg">
            <div className="flex flex-col py-2 overflow-y-auto items-center gap-4">
                <h1 className="md:group-hover:block hidden pt-3 text-2xl">Forum Fisika</h1>
                <div className="w-full flex flex-col items-center">
                    <button className="navbar-hover">
                        <span className="button-child">
                            <MdAnnouncement className="text-4xl" />
                            <h1 className="transition-all duration-150 md:group-hover:block hidden">
                                Announcement
                            </h1>
                        </span>
                    </button>
                    <button className="navbar-hover">
                        <span className="button-child">
                            <MdChatBubbleOutline className="text-4xl" />
                            <h1 className="transition-all duration-150 md:group-hover:block hidden">
                                Forum
                            </h1>
                        </span>
                    </button>
                    <button className="navbar-hover">
                        <span className="button-child">
                            <MdOutlineAccountCircle className="text-4xl" />
                            <h1 className="transition-all duration-150 md:group-hover:block hidden">
                                Profile
                            </h1>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Navbar;