import React from "react";
import LayoutGraphs from "@/app/components/Layouts/LayoutGraphs";
import {getTopTenPopulation} from "@/app/utils/population";
import {getTopTenLanguages} from "@/app/utils/languages";

type AnalyticsProps = {
  data: Data[] | null;
};

const Analytics = (props: AnalyticsProps) => {
  const {data} = props;

  const topTenPopulation = getTopTenPopulation(data);
  const topTenLanguages = getTopTenLanguages(data);

  const populations = topTenPopulation.map((item) => item.value);
  const highestPopulation = Math.max(...populations);

  const languages = topTenLanguages.map((item) => item.value);
  const highestLanguage = Math.max(...languages);

  return (
    <React.Fragment>
      <LayoutGraphs highest={highestPopulation} data={topTenPopulation} />
      <LayoutGraphs highest={highestLanguage} data={topTenLanguages} />
    </React.Fragment>
  );
};

export default Analytics;
