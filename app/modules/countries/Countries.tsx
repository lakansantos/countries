import LayoutCountriesCard from "@/app/components/layout/LayoutCountriesCard";
import LayoutCountriesContainer from "@/app/components/layout/LayoutCountriesContainer";

import React from "react";

type CountriesProps = {
  data: [] | null;
};
const Countries = (props: CountriesProps) => {
  const {data = []} = props;

  return (
    <LayoutCountriesContainer>
      {data?.map((country, key) => {
        const {name, capital, flag} = country || {};
        const dataProps = {
          capital,
          country_name: name,
          flag,
        };
        return <LayoutCountriesCard key={key} {...dataProps} />;
      })}
    </LayoutCountriesContainer>
  );
};

export default Countries;
