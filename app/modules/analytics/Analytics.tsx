import React from "react";

type AnalyticsProps = {
  data: Data[] | null;
};

const getTopTenLanguages = (data: Data[]) => {
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
    .map((item) => {
      const [language, count] = item;

      return {language, count};
    })
    .sort((a, b) => b.count - a.count);

  const topTenLanguages = sorter.slice(0, 10);
  return topTenLanguages;
};
const Analytics = (props: AnalyticsProps) => {
  const {data} = props;

  const topTenLanguages = getTopTenLanguages(data);

  console.log(topTenLanguages);
  return <div className="h-[80vh]">Analytics</div>;
};

export default Analytics;
