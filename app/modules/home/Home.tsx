import React from "react";
import Header from "../header/Header";
import Countries from "../countries/Countries";
import ErrorPage from "../error/ErrorPage";
import {useCountries} from "@/app/context/CountriesContext";

const Home = () => {
  const {data, isLoading, error} = useCountries();

  return !error ? (
    <React.Fragment>
      <Header data={data} />
      <Countries data={data} isLoading={isLoading} />
    </React.Fragment>
  ) : (
    <ErrorPage />
  );
};

export default Home;
