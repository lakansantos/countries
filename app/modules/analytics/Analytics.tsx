import React from "react";

type AnalyticsProps = {
  data: Data[] | null;
};

type DataWithCount = {
  [key: string]: number;
};
const getTopTenLanguages = (data: AnalyticsProps["data"]) => {
  const filteredLanguages = data
    ? Object.values(data).flatMap((country) =>
        country.languages.map((language) => language.name)
      )
    : [];

  const container: DataWithCount = {};

  filteredLanguages.map((language) => {
    if (typeof container[language] === "number") {
      container[language] += 1;
    } else {
      container[language] = 1;
    }

    return container;
  });

  const sorter = Object.entries(container)
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
