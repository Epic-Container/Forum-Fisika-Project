"use client"
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { forumState } from "../utils/globalstate";
import { MdOutlineAccountCircle, MdChatBubbleOutline, MdAnnouncement } from "react-icons/md";

const Navbar = () => {
  const [SideContent, setSideContent] = useRecoilState(forumState);
  function Announcement () {
    setSideContent(false)
  }
  function Forum () {
    setSideContent(true)
  }
  return (
    <div className="fixed z-10 group transtition-all duration-150 w-[60px] md:hover:w-[250px] h-screen secondary-dark rounded-r-xl">
      <div className="flex flex-col py-2 overflow-y-auto items-center gap-4">
        <h1 className="md:group-hover:block hidden pt-3 text-2xl">Forum Fisika</h1>
        <div className="w-full flex flex-col items-center">
          <button aria-label='announcement' onClick={Announcement} className="navbar-hover">
            <span className="button-child">
              <MdAnnouncement className="text-4xl" />
              <h1 className="transition-all duration-150 md:group-hover:block hidden">
                Announcement
              </h1>
            </span>
          </button>
          <button aria-label='forum' onClick={Forum} className="navbar-hover">
            <span className="button-child">
              <MdChatBubbleOutline className="text-4xl" />
              <h1 className="transition-all duration-150 md:group-hover:block hidden">
                Forum
              </h1>
            </span>
          </button>
          <Link href="/Pages/auth/login" aria-label="profile" className="navbar-hover">
            <span className="button-child">
              <MdOutlineAccountCircle className="text-4xl" />
              <h1 className="transition-all duration-150 md:group-hover:block hidden">
                Profile
              </h1>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;