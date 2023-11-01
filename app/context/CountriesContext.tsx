import React, {ReactNode, createContext, useContext} from "react";
import {useGetCountries} from "../hooks/useGetCountries";

type CountriesContextType = {
  isLoading: boolean;
  data: [] | null;
  error: boolean;
  actions: {
    setSortByName: (state: boolean) => void;
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
  error: false,
  actions: {
    setSortByName: () => {},
    setSortByCapital: () => {},
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
