import LayoutCountriesCard from "@/app/components/Layouts/LayoutCountriesCard";
import LayoutCountriesContainer from "@/app/components/Layouts/LayoutCountriesContainer";
import Loading from "@/app/components/Loading/Loading";
import {Data} from "@/app/context/CountriesContext";

import React from "react";

type CountriesProps = {
  data: Data[] | null;
  isLoading: boolean;
};
const Countries = (props: CountriesProps) => {
  const {data = [], isLoading} = props;

  return (
    <LayoutCountriesContainer>
      {!isLoading &&
        data?.map((country, key) => {
          const {name, capital, flag, languages, population} = country || {};
          const dataProps = {
            capital,
            country_name: name,
            flag,
            languages,
            population,
          };
          return <LayoutCountriesCard key={key} {...dataProps} />;
        })}
      {isLoading && <Loading />}
    </LayoutCountriesContainer>
  );
};

export default Countries;
