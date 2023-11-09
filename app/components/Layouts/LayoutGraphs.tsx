import React from "react";

type Props = {
  topTenPopulation: {
    name: string;
    population: number;
  }[];
  highest: number;
};
const LayoutGraphs = (props: Props) => {
  const {topTenPopulation, highest} = props;
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[70%] gap-3">
        {topTenPopulation.map((item, key) => {
          const {name, population} = item;

          return (
            <div
              key={key}
              className="w-full flex flex-row justify-center gap-6 items-center"
            >
              <div className="w-[100px] min-w-[100px]">
                <p className="text-center w-[120px]">{name}</p>
              </div>
              <div className="flex w-[1400px]">
                <div className="flex flex-grow">
                  <progress
                    value={population}
                    max={highest}
                    className="h-[50px]"
                  />
                </div>
              </div>
              <div className="w-[140px]">{population}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LayoutGraphs;
