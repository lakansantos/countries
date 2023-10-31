import axios from "axios";
import {API_PATH} from "../constants/configs";
import {useEffect, useState} from "react";

export const useGetCountries = () => {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
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

  useEffect(() => {
    getCountries();
  }, []);

  return {data, isLoading, error};
};
