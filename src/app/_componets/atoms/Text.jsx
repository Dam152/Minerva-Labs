import React from "react";
import Link from "next/link";
import colors from "@/app/assets/js/colorMap";

export default function Text({
  tag = "p",
  size = "normal-text",
  theme = colors["Black"],
  weight = "",
  href,
  children,
  className,
  ...props
}) {
  const Tag = tag;

  if (href) {
    return (
      <Link
        href={href}
        {...props}
        className={`${size} ${weight} ${className}`}
        style={{ color: theme }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Tag {...props} className={`${size} ${weight}`} style={{ color: theme }}>
      {children}
    </Tag>
  );
}
