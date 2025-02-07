import React from "react";
import SearchBar from "./SearchBar";
import MenuAds from "./MenuAds";
import MenuCard from "./MenuCard";

const MainMenuSection = () => {
  return (
    <div className="container mx-auto  ">
      <SearchBar />
      <MenuAds />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-9">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
};

export default MainMenuSection;
