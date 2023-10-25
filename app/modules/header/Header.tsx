import LayoutHeader from "@/app/components/layout/LayoutHeader";

import React from "react";

type HeaderProps = {
  data: [] | null;
};
const Header = (props: HeaderProps) => {
  const {data} = props;
  return <LayoutHeader data={data} />;
};

export default Header;
