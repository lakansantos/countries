import {getTopTenLanguages} from "@/app/utils/languages";
import {getTopTenPopulation} from "@/app/utils/population";

type AnalyticsProps = {
  data: Data[] | null;
};

const Analytics = (props: AnalyticsProps) => {
  const {data} = props;

  const topTenLanguages = getTopTenLanguages(data);
  const topTenPopulation = getTopTenPopulation(data);

  return (
    <div className="h-[80vh]">
      {topTenLanguages.map((item, key) => {
        return (
          <p key={key}>
            {item.language} {item.count}
          </p>
        );
      })}
      {topTenPopulation.map((item, key) => {
        return (
          <p key={key}>
            {item.name} {item.population}
          </p>
        );
      })}
    </div>
  );
};

export default Analytics;
