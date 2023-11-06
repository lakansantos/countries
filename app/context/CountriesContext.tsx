import React, {ReactNode, createContext, useContext} from "react";
import {useGetCountries} from "../hooks/useGetCountries";
import {AxiosError} from "axios";

type CountriesContextType = {
  isLoading: boolean;
  data: Data[] | null;
  error: AxiosError | null;
  actions: {
    setSortByName: (state: boolean) => void;
    setData: (data: Data[] | null) => void;
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
  error: null,
  actions: {
    setSortByName: () => {},
    setSortByCapital: () => {},
    setData: () => {},
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
  const {
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
  } = useGetCountries();

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
  };
  return (
    <CountriesContext.Provider
      value={{data, isLoading, error, states, actions}}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
