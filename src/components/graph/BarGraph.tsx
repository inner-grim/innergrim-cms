import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const barChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Expenses',
      data: [1200, 300, 150, 180, 100, 900, 2000],
      backgroundColor: [
        'rgba(101,184,254,0.8)',
        'rgba(123,193,253,0.8)',
        'rgba(144,201,253,0.8)',
        'rgba(165,210,252,0.8)',
        'rgba(184,219,252,0.8)',
      ],
    },
  ],
};

export const BarGraph = () => {
  const options = {};
  return <Bar options={options} data={barChartData} />;
};
