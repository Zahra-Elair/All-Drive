import React, { FC } from "react";

type IProps = {
  pourcentage: number;
  color: string;
};

const PourcentageBar: FC<IProps> = ({ pourcentage, color }) => {
  return (
    <div className=" relative rounded w-full h-2">
      <div
        style={{ background: color, opacity: 0.4 }}
        className=" absolute rounded top-0 right-0 left-0 bottom-0"
      ></div>
      <div
        style={{ width: `${pourcentage}%`, background: color }}
        className={` absolute top-0 left-0 bottom-0 z-10 rounded`}
      ></div>
    </div>
  );
};

export default PourcentageBar;
