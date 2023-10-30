import React from "react";
import Button from "../Buttons/Button";

type HeaderProps = {
  data: [] | null;
};
const Header = (props: HeaderProps) => {
  const {data} = props;

  const countriesCount = data?.length || 0;

  return (
    <header className="h-[30vh] text-center">
      <h1 className="text-5xl p-[20px] text-sky-400 font-bold">
        World Countries Data
      </h1>
      <p>Currently, we have {countriesCount} countries</p>
      <p> </p>
      <input
        type="text"
        placeholder="Search a country..."
        className="border border-black rounded-3xl w-1/3 py-2 indent-6"
      />
      <div className="flex justify-center gap-3 items-center mt-4">
        Sort By:
        <Button label="Name" />
        <Button label="Capital" />
        <Button label="Population" />
      </div>
    </header>
  );
};

export default Header;
