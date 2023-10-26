"use client";

import {useGetCountries} from "./hooks/hooks";
import Countries from "./modules/countries/Countries";
import Header from "./modules/header/Header";

export default function Home() {
  const {data, isLoading} = useGetCountries();
  return (
    <div>
      <Header data={data} />
      <Countries data={data} isLoading={isLoading} />
    </div>
  );
}
