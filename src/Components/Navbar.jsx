import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleStatusTab } from "../store/cart";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = ({ scrollLength }) => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollLength) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab()); // Dispatch toggleStatusTab action
  };

  const handleTop = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false); // Close menu when clicking a link
  };

  return (
    <div
      className={`${
        sticky ? "bg-black" : "bg-transparent"
      } fixed top-0 z-20 text-white flex w-full justify-between p-5 items-center transition-all duration-300`}
    >
      <div>
        <Link
          to={"/"}
          className="font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] tracking-widest cursor-pointer"
        >
          CLOTHES
        </Link>
      </div>

      {/* Hamburger Menu for small screens */}

      {/* Navbar Links */}
      <ul
        className={`${
          menuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
        } lg:flex lg:items-center lg:gap-10 lg:static absolute lg:bg-transparent bg-black lg:w-auto w-full lg:top-auto top-16 lg:left-auto left-0  transition-transform duration-300 lg:justify-center`}
      >
        <li>
          <Link
            onClick={handleTop}
            to={"/men"}
            className="cursor-pointer px-4 py-2 lg:py-0 block text-center"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            onClick={handleTop}
            to={"/women"}
            className="cursor-pointer px-4 py-2 lg:py-0 block text-center"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            onClick={handleTop}
            to={"/watch"}
            className="cursor-pointer px-4 py-2 lg:py-0 block text-center"
          >
            Watch
          </Link>
        </li>
        <li>
          <Link
            onClick={handleTop}
            to={"/shoe"}
            className="cursor-pointer px-4 py-2 lg:py-0 block text-center"
          >
            Shoes
          </Link>
        </li>
        <li>
          <Link
            onClick={handleTop}
            to={"/perfume"}
            className="cursor-pointer px-4 py-2 lg:py-0 block text-center"
          >
            Perfumes
          </Link>
        </li>
      </ul>

      {/* Cart and Heart Icons */}
      <div className=" flex gap-3">
        <div className="flex items-center gap-3 font-light">
          <div className="flex gap-5 text-xl">
            <FaRegHeart />
            <div className="relative" onClick={handleOpenTabCart}>
              <LuShoppingBag />
              <span className="text-[15px] absolute top-4">
                {totalQuantity}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoCloseOutline className="text-2xl" />
            ) : (
              <RiMenu2Fill className="text-xl font-bold" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
