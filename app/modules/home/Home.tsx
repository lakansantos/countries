import React from "react";
import Header from "../header/Header";
import Countries from "../countries/Countries";

import {useCountries} from "@/app/context/CountriesContext";
import Analytics from "../analytics/Analytics";

const Home = () => {
  const {data, searchedData, isLoading, error} = useCountries();

  const filteredLanguages = data
    ? Object.values(data).flatMap((country) =>
        country.languages.map((language) => language.name)
      )
    : [];

  const container = {};

  filteredLanguages.map((language) => {
    if (typeof container[language] === "number") {
      container[language] += 1;
    } else {
      container[language] = 1;
    }

    return container;
  });

  const arrayContainer = Object.entries(container);

  const sorter = arrayContainer
    .sort((a, b) => b[1] - a[1])
    .map((item) => {
      const [language, count] = item;

      return {language, count};
    });

  console.log(sorter);

  //if error, will redirect to error page
  if (error) throw Error(error.message);

  return (
    <React.Fragment>
      <Header data={data} />
      <Countries
        data={!!searchedData ? searchedData : data}
        isLoading={isLoading}
      />
      <Analytics />
    </React.Fragment>
  );
};

export default Home;
