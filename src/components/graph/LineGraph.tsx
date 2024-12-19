import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const lineChartData = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: 'step1',
      data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
      borderColor: 'rgba(101,184,254,255)',
    },
    {
      label: 'step2',
      data: [3000, 5000, 5500, 8000, 1200, 11000, 15000],
      borderColor: 'rgba(184,219,252,255)',
    },
  ],
};

export const LineGraph = () => {
  const options = {};
  return <Line options={options} data={lineChartData} />;
};
