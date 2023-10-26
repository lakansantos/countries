"use client";

import axios from "axios";
import {API_PATH} from "../constants/configs";
import {useEffect, useState} from "react";

export const useGetCountries = () => {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_PATH as string);
      const {data} = response || {};
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, isLoading};
};
