import LayoutHeader from "@/app/components/Layouts/LayoutHeader";

import React from "react";

type HeaderProps = {
  data: Data[] | null;
  searchedData: Data[] | null;
};
const Header = (props: HeaderProps) => {
  const {data, searchedData} = props;
  return <LayoutHeader data={data} searchedData={searchedData} />;
};

export default Header;
