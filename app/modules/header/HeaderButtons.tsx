type Props = {
  states: {
    isSortedByName: boolean;

    isSortedByCapital: boolean;

    isSortedByPopulation: boolean;
  };

  actions: {
    setSortByName: (isSortedByName: boolean) => void;
    setSortByCapital: (isSortedByCapital: boolean) => void;
    setSortByPopulation: (isSortedByPopulation: boolean) => void;
  };
};

function headerButtons(props: Props) {
  const {states, actions} = props;

  const {setSortByName, setSortByCapital, setSortByPopulation} = actions;
  const {isSortedByName, isSortedByCapital, isSortedByPopulation} = states;
  const handleSortByName = () => {
    setSortByName(!isSortedByName);
  };

  const handleSortByCapital = () => {
    setSortByCapital(!isSortedByCapital);
  };

  const handleSortByPopulation = () => {
    setSortByPopulation(!isSortedByPopulation);
  };

  return [
    {label: "Name", onClick: handleSortByName},
    {label: "Capital", onClick: handleSortByCapital},
    {label: "Population", onClick: handleSortByPopulation},
  ].filter((item) => item);
}

export default headerButtons;
