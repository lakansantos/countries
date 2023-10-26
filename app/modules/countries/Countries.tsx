import LayoutCountriesCard from "@/app/components/Layouts/LayoutCountriesCard";
import LayoutCountriesContainer from "@/app/components/Layouts/LayoutCountriesContainer";
import Loading from "@/app/components/Loading/Loading";

import React from "react";

type CountriesProps = {
  data: [] | null;
  isLoading: boolean;
};
const Countries = (props: CountriesProps) => {
  const {data = [], isLoading} = props;

  return (
    <LayoutCountriesContainer>
      {!isLoading &&
        data?.map((country, key) => {
          const {name, capital, flag, languages} = country || {};
          const dataProps = {
            capital,
            country_name: name,
            flag,
            languages,
          };
          return <LayoutCountriesCard key={key} {...dataProps} />;
        })}
      {isLoading && <Loading />}
    </LayoutCountriesContainer>
  );
};

export default Countries;
