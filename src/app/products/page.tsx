"use client";

import { useProductsQuery } from "@/hooks/productsQuery";
import React from "react";

export default function Products() {
  const { productsQuery } = useProductsQuery();

  const { data } = productsQuery;

  return <div>page {data?.data.length}</div>;
}
