import LayoutCountriesCard from "@/app/components/layout/LayoutCountriesCard";
import LayoutCountriesContainer from "@/app/components/layout/LayoutCountriesContainer";
import React from "react";

const Countries = () => {
  return (
    <LayoutCountriesContainer>
      {Array(50)
        .fill(null)
        .map((_, key) => {
          return <LayoutCountriesCard key={key} />;
        })}
    </LayoutCountriesContainer>
  );
};

export default Countries;
