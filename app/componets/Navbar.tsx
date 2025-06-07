import React, { useRef } from 'react';
import { logo, icon } from '@/assets/assets';
import Image from 'next/image';

export const Navbar = () => {
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  };

  const closeMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  return (
    <nav className="bg-purplespace-200 fixed z-50 flex h-16 w-full flex-row items-center justify-between px-5 py-4 lg:px-8 xl:px-[8%]">
      <a className="flex flex-row items-center gap-2">
        <Image src={logo.dimond1} alt="logo" width={50} height={50} />
        <div className="text-2xl font-bold">Ryuteakwoo&apos;s</div>
      </a>

      <ul className="font-outfit hidden flex-row items-center justify-between gap-8 rounded-full px-12 py-3 md:flex lg:gap-10">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#post">Post</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex flex-row items-center gap-4">
        <button className="cursor-pointer">
          <icon.daymode size={25} />
        </button>

        <a
          href="#contact"
          className="ml-4 hidden items-center gap-1 rounded-full border border-gray-500 px-3 py-2.5 pl-5 font-bold lg:flex"
        >
          Contact Now
          <icon.contact size={20} />
        </a>

        <button className="ml-3 block lg:hidden" onClick={openMenu}>
          <icon.menu size={25} />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={mobileMenuRef}
        className="bg-purplespace-200 fixed top-0 -right-64 bottom-0 flex h-screen w-64 flex-col gap-4 px-10 py-20 transition duration-300 md:hidden"
      >
        <button
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeMenu}
        >
          <icon.closepanel size={25} />
        </button>

        <li>
          <a href="#top" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#product" onClick={closeMenu}>
            Product
          </a>
        </li>
        <li>
          <a href="#post" onClick={closeMenu}>
            Post
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
