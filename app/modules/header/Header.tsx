import LayoutHeader from "@/app/components/Layouts/LayoutHeader";
import {Data} from "@/app/context/CountriesContext";

import React from "react";

type HeaderProps = {
  data: Data[] | null;
};
const Header = (props: HeaderProps) => {
  const {data} = props;
  return <LayoutHeader data={data} />;
};

export default Header;
