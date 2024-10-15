"use client";
import Image from "next/image";
import React, { useState } from "react";
import CtaButton from "../atoms/CtaButton";
import Text from "../atoms/Text";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Header({ menu }) {
  const [isOpen, setIsopen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsopen(false);
      setIsClosing(false);
    }, 1000);
  };

  const handleMenuClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsopen(false);
      setIsClosing(false);
    }, 1000);
  };

  if (isOpen == true) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <header className=" fixed w-screen border-b border-[#DADADA] py-[32px] px-[80px] max-xl:px-[32px] max-md:px-[24px] max-sm:px-[16px] max-lg:py-[48px] max-sm:py-[40px]">
      <div className="flex items-center justify-center w-full h-full relative">
        <Link href="/" className="absolute left-0">
          <Image
            src="/Frame.svg"
            alt="logo"
            width={168}
            height={41}
            className="w-[168px] h-[41px]"
          ></Image>
        </Link>
        <nav className="flex gap-[40px] max-lg:hidden">
          {menu.map((m) => (
            <Text
              key={Math.random()}
              href={m.url}
              size="medium-text"
              weight="text-small"
              className="menu-voice"
            >
              {m.voice}
            </Text>
          ))}
        </nav>
        <CtaButton href={""} className="absolute right-0 max-lg:hidden">
          Contact
        </CtaButton>
        <RiMenu3Fill
          className="w-[32px] h-[32px] absolute right-0 hidden max-lg:block color-[var(--Black)] cursor-pointer"
          onClick={() => setIsopen(!isOpen)}
        ></RiMenu3Fill>
      </div>
      {isOpen && (
        <div
          className={`w-screen h-screen flex flex-col absolute top-0 left-0 z-50 bg-[var(--Blue)] ${
            isClosing ? "closeMenu" : "openMenu"
          }`}
        >
          <div className="p-[32px] max-sm:py-[24px] max-sm:px-[16px]">
            <RiCloseLargeFill
              className="w-[32px] h-[32px] ml-auto hidden max-lg:block close-icon cursor-pointer"
              onClick={handleClose}
            ></RiCloseLargeFill>
          </div>
          <nav className="flex flex-col gap-[32px] w-full items-center mt-[48px] overflow-scroll">
            {menu.map((m) => (
              <Text
                key={Math.random()}
                href={m.url}
                size="medium-text"
                weight="text-medium"
                theme="White"
                onClick={handleMenuClick}
              >
                {m.voice}
              </Text>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
