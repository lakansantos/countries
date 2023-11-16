import React, {ReactNode, createContext, useContext, useState} from "react";
import {useGetCountries} from "../hooks/useGetCountries";
import {AxiosError} from "axios";

type CountriesContextType = {
  isLoading: boolean;
  data: Data[] | null;
  searchedData: Data[] | null;
  error: AxiosError | null;
  actions: {
    setSortByName: (state: boolean) => void;
    setData: (data: Data[] | null) => void;
    setSearchedData: (data: Data[] | null) => void;
    setSortByCapital: (state: boolean) => void;
    setSortByPopulation: (state: boolean) => void;
  };
  states: {
    isSortedByName: boolean;
    isSortedByCapital: boolean;
    isSortedByPopulation: boolean;
  };
};

const defaultContextValue: CountriesContextType = {
  isLoading: false,
  data: null,
  searchedData: null,
  error: null,
  actions: {
    setSortByName: () => {},
    setSortByCapital: () => {},
    setData: () => {},
    setSearchedData: () => {},
    setSortByPopulation: () => {},
  },
  states: {
    isSortedByName: false,
    isSortedByCapital: false,
    isSortedByPopulation: false,
  },
};

const CountriesContext =
  createContext<CountriesContextType>(defaultContextValue);

type Props = {
  children: ReactNode;
};
export const CountriesProvider = (props: Props) => {
  const {children} = props;

  const [searchedData, setSearchedData] = useState<Data[] | null>(null);
  const [isSortedByName, setSortByName] = useState(false);
  const [isSortedByCapital, setSortByCapital] = useState(false);
  const [isSortedByPopulation, setSortByPopulation] = useState(false);
  const {data, setData, isLoading, error} = useGetCountries();

  const states = {
    isSortedByName,
    isSortedByCapital,
    isSortedByPopulation,
  };

  const actions = {
    setSortByName,
    setSortByCapital,
    setSortByPopulation,
    setData,
    setSearchedData,
  };
  return (
    <CountriesContext.Provider
      value={{data, searchedData, isLoading, error, states, actions}}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
