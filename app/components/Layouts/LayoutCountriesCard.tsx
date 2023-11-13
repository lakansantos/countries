import Image from "next/image";
import React from "react";

const LayoutCountriesCard = (props: Data) => {
  const {name: country_name, capital, flag, languages, population} = props;

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
  const formattedLanguages =
    hasMoreThanOneLanguage && numberOfLanguages <= 4
      ? `${filteredLanguages.join(", ")} and ${lastLanguage}`
      : numberOfLanguages > 4
      ? `${languageNames.slice(0, 4).join(", ")} and more...`
      : formattedOneLanguage;

  return (
    <div className="w-[220px] h-[350px] bg-white flex flex-col p-2 shadow-2xl">
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
      <div className="p-2 flex flex-col  gap-2">
        <h1 className="text-center text-sky-400 font-bold">{country_name}</h1>
        <div className="flex flex-col h-full grow gap-1.5">
          <p>Capital: {capital || "N/A"}</p>
          <p>Languages: {formattedLanguages}</p>
          <p>Population: {population.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default LayoutCountriesCard;
