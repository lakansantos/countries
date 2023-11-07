import React from "react";
import Header from "../header/Header";
import Countries from "../countries/Countries";

import {useCountries} from "@/app/context/CountriesContext";

const Home = () => {
  const {data, searchedData, isLoading, error} = useCountries();

  //if error, will redirect to error page
  if (error) throw Error(error.message);
  return (
    <React.Fragment>
      <Header data={data} />
      <Countries
        data={searchedData ? searchedData : data}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};

export default Home;
