import React from "react";
import Button from "../Buttons/Button";
import headerButtons from "@/app/modules/header/HeaderButtons";
import {useCountries} from "@/app/context/CountriesContext";

type HeaderProps = {
  data: Data[] | null;
  searchedData: Data[] | null;
};
const Header = (props: HeaderProps) => {
  const {data, searchedData} = props;

  const {actions, states} = useCountries();
  const countriesCount = data?.length || 0;

  const buttonItems = headerButtons({data, states, actions});

  const {setSearchedData} = actions;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const filteredCountries = data
      ? Object.values(data)?.filter((item) =>
          item.name
            .toUpperCase()
            .includes(e.currentTarget.value.toUpperCase().trim())
        )
      : [];

    if (e.currentTarget.value.trim() === "") {
      setSearchedData(null);
    } else {
      setSearchedData(filteredCountries);
    }
  };
  return (
    <header className="h-[30vh] text-center flex flex-col justify-evenly items-center">
      <h1 className="text-5xl text-sky-400 font-bold">World Countries Data</h1>
      <p>Currently, we have {countriesCount} countries</p>
      <div className="flex flex-col w-1/3">
        <input
          type="text"
          placeholder="Search a country..."
          className="border border-black w-full rounded-3xl py-2 indent-6 text-black"
          onChange={handleChange}
        />

        <div className="min-h-[25px] flex justify-center items-center">
          {!!searchedData && (
            <p className="text-sky-400 font-bold italic">
              {searchedData.length} satisfied the search criteria
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-center gap-3 items-center">
        Sort By: <Button buttonItems={buttonItems} />
      </div>
    </header>
  );
};

export default Header;
