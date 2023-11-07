import axios, {AxiosError} from "axios";
import {API_PATH} from "../constants/configs";
import {useEffect, useState} from "react";

export const useGetCountries = () => {
  const [data, setData] = useState<Data[] | null>(null);
  const [searchedData, setSearchedData] = useState<Data[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
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
        setError(err as AxiosError);
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
    searchedData,
    setSearchedData,
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
