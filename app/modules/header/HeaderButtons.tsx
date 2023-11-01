import {Data} from "@/app/context/CountriesContext";

type Props = {
  data: Data[] | null;
  states: {
    isSortedByName: boolean;

    isSortedByCapital: boolean;

    isSortedByPopulation: boolean;
  };

  actions: {
    setSortByName: (isSortedByName: boolean) => void;
    setSortByCapital: (isSortedByCapital: boolean) => void;
    setSortByPopulation: (isSortedByPopulation: boolean) => void;
    setData: (data: Data[]) => void;
  };
};

function headerButtons(props: Props) {
  const {data, states, actions} = props;

  const {setData} = actions;

  const {setSortByName, setSortByCapital, setSortByPopulation} = actions;
  const {isSortedByName, isSortedByCapital, isSortedByPopulation} = states;

  const sortByName = (data: Data[]) => {
    const sortedData = Object.values(data)?.sort((a, b) => {
      if (isSortedByName) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return sortedData;
  };

  const sortByCapital = (data: Data[]) => {
    const sortedData = Object.values(data)?.sort((a, b) => {
      if (isSortedByCapital || a.capital > b.capital) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  };

  const sortByPopulation = (data: Data[]) => {
    const sortedData = Object.values(data)?.sort((a, b) => {
      if (isSortedByPopulation) {
        return a.population - b.population;
      } else {
        return b.population - a.population;
      }
    });
    return sortedData;
  };

  const handleSort = (
    sortBy: (data: Data[]) => void,
    setSort: (state: boolean) => void,
    sortToggle: boolean
  ) => {
    const result = data ? sortBy(data) : null;
    setSort(!sortToggle);
    if (result) setData(result);
  };
  return [
    {
      label: "Name",
      onClick: () => handleSort(sortByName, setSortByName, isSortedByName),
    },
    {
      label: "Capital",
      onClick: () =>
        handleSort(sortByCapital, setSortByCapital, isSortedByCapital),
    },
    {
      label: "Population",
      onClick: () => {
        handleSort(sortByPopulation, setSortByPopulation, isSortedByPopulation);
      },
    },
  ].filter((item) => item);
}

export default headerButtons;
