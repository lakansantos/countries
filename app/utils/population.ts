export const getTopTenPopulation = (data: Data[] | null) => {
  if (!data) return [];
  const getPopulationCountries = data.map((country) => {
    const {name, population} = country;
    return {name, population};
  });

  const sortData = getPopulationCountries.sort(
    (a, b) => b.population - a.population
  );
  return sortData.slice(0, 10);
};
