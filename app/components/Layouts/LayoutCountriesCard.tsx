import Image from "next/image";
import React from "react";

type LayoutCountriesCardPropsType = {
  country_name: string;
  flag: string;
  languages: {[key: string]: string}[];
  population: number;
};
const LayoutCountriesCard = (props: LayoutCountriesCardPropsType) => {
  const {country_name, flag, languages, population} = props;

  //To get the name of languages
  const languageNames = languages?.map((language) => language.name);

  //to get the length of languages names
  const numberOfLanguages = languageNames.length;

  //to get the last Index of languages
  const lastIndexLanguage = numberOfLanguages - 1;
  //to get the last language that we will later on slice for this format "English, and Filipino"
  const lastLanguage = languageNames[lastIndexLanguage];

  //removing the last language
  const filteredLanguages = languageNames.slice(0, lastIndexLanguage);

  const hasMoreThanOneLanguage = languageNames.length > 1;

  const formattedOneLanguage = languageNames.join(", ");

  //if there's more than 1 language, we can format it with "English, and Filipino"
  const formattedLanguages = hasMoreThanOneLanguage
    ? `${filteredLanguages.join(", ")} and ${lastLanguage}`
    : formattedOneLanguage;

  return (
    <div className=" w-[220px] h-[350px] bg-white flex flex-col my-4">
      <Image
        src={flag}
        alt={country_name}
        width={100}
        height={300}
        style={{
          height: "100px",
          margin: "10px",
          width: "auto",
        }}
        priority
      />
      <p>Capital: {country_name}</p>
      <p>Languages: {formattedLanguages}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default LayoutCountriesCard;
