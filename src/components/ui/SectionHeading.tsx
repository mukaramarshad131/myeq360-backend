import React, { HTMLAttributes } from "react";

type SectionHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h4 className="text-xl text-gray-900 font-bold pb-1">{children}</h4>;
};

export default SectionHeading;
