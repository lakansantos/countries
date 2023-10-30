"use client";

import {useGetCountries} from "./hooks/hooks";
import Countries from "./modules/countries/Countries";
import ErrorPage from "./modules/error/ErrorPage";
import Header from "./modules/header/Header";

export default function Home() {
  const {data, isLoading, error} = useGetCountries();
  return !error ? (
    <div>
      <Header data={data} />
      <Countries data={data} isLoading={isLoading} />
    </div>
  ) : (
    <ErrorPage />
  );
}
