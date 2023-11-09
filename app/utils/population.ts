export const getTopTenPopulation = (data: Data[] | null) => {
  if (!data) return [];
  const getPopulationCountries = data.map((country) => {
    const {name, population} = country;
    return {label: name, value: population};
  });

  const sortData = getPopulationCountries.sort((a, b) => b.value - a.value);
  return sortData.slice(0, 10);
};
