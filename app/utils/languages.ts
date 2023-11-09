type DataWithCount = {
  [key: string]: number;
};

export const getTopTenLanguages = (data: Data[] | null) => {
  if (!data) return [];
  //Get the names of countries and push it all to an array

  const filteredLanguages = Object.values(data).flatMap((country) =>
    country.languages.map((language) => language.name)
  );

  const container: DataWithCount = {};

  /* Check if the language is existing in the object.
   * If existing, it will increment
   * If not, it will initialize to 1
   *
   * then it will increment because it will have type of number
   */

  filteredLanguages.map((language) => {
    if (typeof container[language] === "number") {
      container[language] += 1;
    } else {
      container[language] = 1;
    }

    return container;
  });

  //Destructure the data into language and count then put it to object so we can sort it by count
  const sorter = Object.entries(container)
    .map(([language, count]) => {
      return {language, count};
    })
    .sort((a, b) => b.count - a.count);

  const topTenLanguages = sorter.slice(0, 10);
  return topTenLanguages;
};
