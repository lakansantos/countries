"use client";

import axios from "axios";
import {API_PATH} from "../constants/configs";
import {useEffect, useState} from "react";

export const useGetCountries = () => {
  const [data, setData] = useState<[] | null>(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(API_PATH as string);
      const {data} = response || {};
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data};
};
