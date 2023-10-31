"use client";

import {CountriesProvider} from "./context/CountriesContext";
import Home from "./modules/home/Home";

export default function Index() {
  return (
    <div>
      <CountriesProvider>
        <Home />
      </CountriesProvider>
    </div>
  );
}
