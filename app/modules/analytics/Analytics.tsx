import React from "react";

type AnalyticsProps = {
  data: Data[] | null;
};

type DataWithCount = {
  [key: string]: number;
};
const getTopTenLanguages = (data: AnalyticsProps["data"]) => {
  if (!data) return [];
  //Get the names of countries and push it all to an array

  const filteredLanguages = Object.values(data).flatMap((country) =>
    country.languages.map((language) => language.name)
  );

  const container: DataWithCount = {};

  /* Check if the language is existing in the object.
   * If existing, it will increment
   * If not, it will initialize to 1
   * then it will increment because it will have type of number
   */

  filteredLanguages.map((language) => {
    if (typeof container[language] === "number") {
      container[language] += 1;
    } else {
      container[language] = 1;
    }

    return container;
  });

  //Destructure the data into language and count then put it to object so we can sort it by count
  const sorter = Object.entries(container)
    .map(([language, count]) => {
      return {language, count};
    })
    .sort((a, b) => b.count - a.count);

  const topTenLanguages = sorter.slice(0, 10);
  return topTenLanguages;
};
const Analytics = (props: AnalyticsProps) => {
  const {data} = props;

  const topTenLanguages = getTopTenLanguages(data);

  return (
    <div className="h-[80vh]">
      {topTenLanguages.map((item, key) => {
        return (
          <p key={key}>
            {item.language} {item.count}
          </p>
        );
      })}
    </div>
  );
};

export default Analytics;
