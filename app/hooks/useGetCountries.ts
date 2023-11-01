import axios from "axios";
import {API_PATH} from "../constants/configs";
import {useEffect, useState} from "react";
import {Data} from "../context/CountriesContext";

export const useGetCountries = () => {
  const [data, setData] = useState<Data[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [isSortedByName, setSortByName] = useState(false);
  const [isSortedByCapital, setSortByCapital] = useState(false);
  const [isSortedByPopulation, setSortByPopulation] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_PATH as string);
        const {data} = response || {};

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
  }, []);

  return {
    data,
    setData,
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
