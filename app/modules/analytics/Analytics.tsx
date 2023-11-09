import LayoutGraphs from "@/app/components/Layouts/LayoutGraphs";
import {getTopTenPopulation} from "@/app/utils/population";

type AnalyticsProps = {
  data: Data[] | null;
};

const Analytics = (props: AnalyticsProps) => {
  const {data} = props;

  const topTenPopulation = getTopTenPopulation(data);

  const populations = topTenPopulation.map((item) => item.population);
  const highest = Math.max(...populations);

  return <LayoutGraphs highest={highest} topTenPopulation={topTenPopulation} />;
};

export default Analytics;
