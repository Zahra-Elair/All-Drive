import React from "react";

interface Props {
  name: string;
}

const Button = ({
  name,
  className,
}: Props &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  return <button className={`${className}`}></button>;
};

export default Button;
