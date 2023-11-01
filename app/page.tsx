"use client";

import {CountriesProvider} from "./context/CountriesContext";

import MainPage from "./modules/home/Home";

export default function Home() {
  return (
    <div>
      <CountriesProvider>
        <MainPage />
      </CountriesProvider>
    </div>
  );
}
