"use client";
import LayoutHeader from "@/app/components/layout/LayoutHeader";
import {useGetCountries} from "@/app/hooks/hooks";
import React from "react";

const Header = () => {
  const {data} = useGetCountries();
  return <LayoutHeader data={data} />;
};

export default Header;
