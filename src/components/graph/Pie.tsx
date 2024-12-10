import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

const pieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinedIn"],
  datasets: [
    {
      label: "Time Spent",
      data: [120, 60, 30, 90, 45],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "yellow",
        "green",
        "orange",
        "blue",
      ],
      hoverOffset: 120,
    },
  ],
};

export const PieGraph = () => {
  const options = {};
  return <Pie options={options} data={pieChartData} />;
};
