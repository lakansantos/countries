import React from "react";
import Button from "../Buttons/Button";
import headerButtons from "@/app/modules/header/HeaderButtons";
import {useCountries} from "@/app/context/CountriesContext";

type HeaderProps = {
  data: Data[] | null;
};
const Header = (props: HeaderProps) => {
  const {data} = props;

  const {actions, states} = useCountries();
  const countriesCount = data?.length || 0;

  const buttonItems = headerButtons({data, states, actions});

  const {setSearchedData} = actions;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const filteredCountries = data
      ? Object.values(data)?.filter((item) =>
          item.name.toUpperCase().includes(e.currentTarget.value.toUpperCase())
        )
      : [];

    if (e.currentTarget.value === "") {
      setSearchedData(null);
    } else {
      setSearchedData(filteredCountries);
    }
  };
  return (
    <header className="h-[30vh] text-center flex flex-col justify-evenly items-center">
      <h1 className="text-5xl text-sky-400 font-bold">World Countries Data</h1>
      <p>Currently, we have {countriesCount} countries</p>
      <input
        type="text"
        placeholder="Search a country..."
        className="border border-black rounded-3xl w-1/3 py-2 indent-6 text-black"
        onChange={handleChange}
      />
      <div className="flex justify-center gap-3 items-center mt-4">
        Sort By: <Button buttonItems={buttonItems} />
      </div>
    </header>
  );
};

export default Header;
