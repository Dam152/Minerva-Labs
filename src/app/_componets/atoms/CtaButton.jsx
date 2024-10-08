import React from "react";
import Link from "next/link";
import colors from "@/app/assets/js/colorMap";

export default function CtaButton({
  type = "link",
  href,
  children,
  bg = colors["Blue"],
  theme = colors["White"],
  size = "medium-text",
  weight = "text-small",
  borderColor = colors["Blue"],
  hasBorder = false,
  ...props
}) {
  return (
    <>
      {type === "link" ? (
        <Link
          href={href}
          {...props}
          className={`px-[24px] py-[12px] flex items-center w-fit rounded-[4px] ${weight} ${size} hover:transition-all hover:duration-100 hover:opacity-60`}
          style={{
            backgroundColor: bg,
            color: theme,
            border: hasBorder ? `1px solid ${borderColor}` : "none",
          }}
        >
          {children}
        </Link>
      ) : (
        <button
          {...props}
          className={`px-[24px] py-[12px] flex items-center w-fit rounded-[4px] hover:transition-all hover:duration-100 hover:opacity-60 ${weight} ${size}`}
          style={{
            backgroundColor: bg,
            color: theme,
            border: hasBorder ? `1px solid ${borderColor}` : "none",
          }}
        >
          {children}
        </button>
      )}
    </>
  );
}
