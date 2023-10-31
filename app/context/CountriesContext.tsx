import React, {ReactNode, createContext, useContext} from "react";
import {useGetCountries} from "../hooks/useGetCountries";

type CountriesContextType = {
  isLoading: boolean;
  data: [] | null;
  error: boolean;
};

const defaultContextValue: CountriesContextType = {
  isLoading: false,
  data: null,
  error: false,
};

const CountriesContext =
  createContext<CountriesContextType>(defaultContextValue);

type Props = {
  children: ReactNode;
};
export const CountriesProvider = (props: Props) => {
  const {children} = props;
  const {data, isLoading, error} = useGetCountries();

  return (
    <CountriesContext.Provider value={{data, isLoading, error}}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
