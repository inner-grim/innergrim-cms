"use client";
import { LineGraph } from "@/components/graph/Line";
import { BarGraph } from "@/components/graph/Bar";
import { PieGraph } from "@/components/graph/Pie";

export default function Home() {
  return (
    <>
      <LineGraph />
      <PieGraph />
      <BarGraph />
    </>
  );
}
