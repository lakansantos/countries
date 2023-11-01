import axios from "axios";
import {API_PATH} from "../constants/configs";
import {useEffect, useState} from "react";

type Data = {
  name: string;
};
export const useGetCountries = () => {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [isSorted, setSort] = useState(false);

  useEffect(() => {
    const sortByName = (data: Data[]) => {
      const sortedData: {name: string}[] = data?.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
      });

      return sortedData;
    };
    const getCountries = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_PATH as string);
        const {data} = response || {};

        if (isSorted) sortByName(data);
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
  }, [isSorted]);

  return {data, isLoading, error, isSorted, setSort};
};
