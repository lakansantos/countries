import React from "react";

type Props = {
  data: {
    label: string;
    value: number;
  }[];
  highest: number;
};
const LayoutGraphs = (props: Props) => {
  const {data, highest} = props;
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
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
              <div className="w-[140px]">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LayoutGraphs;
