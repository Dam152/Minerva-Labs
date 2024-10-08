import React from "react";
import colors from "@/app/assets/js/colorMap";

export default function Section({
  paddingTop = "120px",
  paddingRight = "80px",
  paddingBottom = "120px",
  paddingLeft = "80px",
  bgColor = colors["White"],
  children,
  ...props
}) {
  return (
    <section
      {...props}
      style={{
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </section>
  );
}
