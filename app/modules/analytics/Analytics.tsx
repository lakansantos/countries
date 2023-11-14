import React, {useState} from "react";
import LayoutGraphs from "@/app/components/Layouts/LayoutGraphs";
import {getTopTenPopulation} from "@/app/utils/population";
import {getTopTenLanguages} from "@/app/utils/languages";
import Button from "@/app/components/Buttons/Button";

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

  const [showGraph, setShowGraph] = useState("population");

  const isPopulation = showGraph === "population";

  const buttonItems = [
    {
      label: "Population",
      onClick: () => setShowGraph("population"),
      defaultActive: true,
    },
    {
      label: "Languages",
      onClick: () => setShowGraph("languages"),
    },
  ];

  return (
    <div className="min-h-[80vh] pt-10 sm:pt-0 flex flex-col items-center justify-center gap-3">
      <div className="flex justify-center gap-2">
        {/* <button className="btn" onClick={() => setShowGraph("population")}>
          Population
        </button>
        <button className="btn" onClick={() => setShowGraph("languages")}>
          Languages
        </button> */}

        <Button buttonItems={buttonItems} />
      </div>
      {isPopulation ? (
        <LayoutGraphs
          highest={highestPopulation}
          data={topTenPopulation}
          isPopulation={isPopulation}
        />
      ) : (
        <LayoutGraphs
          highest={highestLanguage}
          data={topTenLanguages}
          isPopulation={isPopulation}
        />
      )}
    </div>
  );
};

export default Analytics;
