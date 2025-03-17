import React from "react";
import Button from "./Button";
const ButtonsList = () => {
  const list = [
    "All",
    "Webseries",
    "Tamilcinema",
    "Music",
    "Webdevelopment",
    "Thrillers",
    "ComputerProgramming",
    "Batter",
    "Mixes",
    "Battling",
    "Sketchcomedy",
    "Anirudh",
    "Microsoft",
    "Manga",
  ];
  return (
    <div className="flex overflow-x-hidden ">
      {list.map((item, i) => (
        <Button name={item} key={i} />
      ))}
    </div>
  );
};

export default ButtonsList;
