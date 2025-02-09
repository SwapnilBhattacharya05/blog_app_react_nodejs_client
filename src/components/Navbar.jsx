import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { getToken } = useAuth();

  // TESTING TO GET A TOKEN
  // useEffect(() => {
  //   getToken().then((token) => console.log(token));
  // }, []);

  return (
    <header className="w-full h-16 md:h-20 justify-between items-center flex">
      {/* lOGO */}
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <Image path="logo.png" alt="logo" w={32} h={32} />
        <span>ZelLog</span>
      </Link>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className=" cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "≡"}
        </div>
        {/* LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-[#e6e6ff] transition-all ease-in-out gap8 font-medium text-lg ${
            open ? "-right-0" : "-right-full"
          }`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Trending</Link>
          <Link to={"/"}>Most Popular</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 🚪
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>Most Popular</Link>
        <Link to={"/"}>About</Link>

        {/* CLERK */}
        <SignedOut>
          <Link to={"/login"}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 🚪
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
