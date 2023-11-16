import axios, {AxiosError} from "axios";
import {API_PATH} from "../constants/configs";
import {useEffect, useState} from "react";

export const useGetCountries = () => {
  const [data, setData] = useState<Data[] | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

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
    isLoading,
    error,
  };
};
