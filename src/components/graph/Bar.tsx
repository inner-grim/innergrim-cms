import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barChartData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300, 150, 180, 100, 900, 2000],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "yellow",
        "green",
        "orange",
        "blue",
      ],
      borderColor: ["gray"],
      borderWidth: 1,
    },
  ],
};

export const BarGraph = () => {
  const options = {};
  return <Bar options={options} data={barChartData} />;
};
