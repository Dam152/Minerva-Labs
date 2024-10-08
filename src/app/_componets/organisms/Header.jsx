import Image from "next/image";
import React from "react";
import CtaButton from "../atoms/CtaButton";
import Text from "../atoms/Text";
import Link from "next/link";

export default function Header({ menu }) {
  return (
    <header className=" fixed w-screen border border-black py-[32px] px-[80px] max-xl:px-[32px] max-lg:h-[118px] max-md:px-[24px] max-sm:px-[16px] max-sm:h-[80px] ">
      <div className="flex items-center justify-center w-full h-full relative">
        <Link href="/" className="absolute left-0">
          <Image
            src="/Frame.svg"
            alt="logo"
            width={168}
            height={41}
            className="w-[168px] h-[41px] "
          ></Image>
        </Link>
        <nav className="flex gap-[40px] max-lg:hidden">
          {menu.map((m) => (
            <Text
              key={Math.random()}
              href={m.url}
              size="medium-text"
              weight="text-small"
              className="hover:transition-all hover:duration-100 hover:opacity-60"
            >
              {m.voice}
            </Text>
          ))}
        </nav>
        <CtaButton href={""} className="absolute right-0 max-sm:hidden">
          Contact
        </CtaButton>
      </div>
    </header>
  );
}
