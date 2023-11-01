import axios from "axios";
import {API_PATH} from "../constants/configs";
import {useEffect, useState} from "react";

type Data = {
  name: string;
  capital: string;
  population: number;
};
export const useGetCountries = () => {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [isSortedByName, setSortByName] = useState(false);
  const [isSortedByCapital, setSortByCapital] = useState(false);
  const [isSortedByPopulation, setSortByPopulation] = useState(false);

  useEffect(() => {
    const sortByName = (data: Data[]) => {
      const sortedData: {name: string}[] = data?.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
      });

      return sortedData;
    };

    const sortByCapital = (data: Data[]) => {
      const sortedData: {capital: string}[] = data?.sort((a, b) => {
        if (a.capital > b.capital) return -1;
        if (b.capital > a.capital) return 1;
        return 0;
      });

      return sortedData;
    };

    const sortByPopulation = (data: Data[]) => {
      const sortedData = data?.sort((a, b) => {
        if (a.population > b.population) return -1;
        if (b.population > a.population) return 1;
        return 0;
      });

      return sortedData;
    };

    const getCountries = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_PATH as string);
        const {data} = response || {};

        if (isSortedByName) {
          sortByName(data);
        } else if (isSortedByCapital) {
          sortByCapital(data);
        } else if (isSortedByPopulation) {
          sortByPopulation(data);
        }
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCountries();
  }, [isSortedByName, isSortedByCapital, isSortedByPopulation]);

  return {
    data,
    isLoading,
    error,
    isSortedByName,
    isSortedByCapital,
    isSortedByPopulation,
    setSortByName,
    setSortByCapital,
    setSortByPopulation,
  };
};
