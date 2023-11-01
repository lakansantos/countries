import React, {ReactNode, createContext, useContext} from "react";
import {useGetCountries} from "../hooks/useGetCountries";

type CountriesContextType = {
  isLoading: boolean;
  data: [] | null;
  error: boolean;
  isSorted: boolean;
  setSort: (isSorted: boolean) => void;
};

const defaultContextValue: CountriesContextType = {
  isLoading: false,
  data: null,
  error: false,
  isSorted: false,
  setSort: () => {},
};

const CountriesContext =
  createContext<CountriesContextType>(defaultContextValue);

type Props = {
  children: ReactNode;
};
export const CountriesProvider = (props: Props) => {
  const {children} = props;
  const {data, isLoading, error, isSorted, setSort} = useGetCountries();

  return (
    <CountriesContext.Provider
      value={{data, isLoading, error, isSorted, setSort}}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
