import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="py-20 container">{children}</div>;
};

export default Container;
