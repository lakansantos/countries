import React from "react";

type Props = {
  data: {
    label: string;
    value: number;
  }[];
  highest: number;
  isPopulation: boolean;
};
const LayoutGraphs = (props: Props) => {
  const {data, highest, isPopulation} = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-4 mb-6">
        <p>
          10 Most {isPopulation ? "populated countries" : "spoken language"} in
          the world
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[70%] gap-3">
        {data.map((item, key) => {
          const {label, value} = item;

          return (
            <div
              key={key}
              className="w-full flex flex-row justify-center gap-6 items-center"
            >
              <div className="w-[100px] min-w-[100px]">
                <p className="text-center w-[120px]">{label}</p>
              </div>
              <div className="flex w-[1400px]">
                <div className="flex flex-grow">
                  <progress value={value} max={highest} className="h-[50px]" />
                </div>
              </div>
              <div className="min-w-[140px]  text-wrap">
                {value.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LayoutGraphs;
