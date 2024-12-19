import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const pieChartData = {
  labels: ['Facebook', 'Instagram', 'Twitter', 'YouTube', 'LinedIn'],
  datasets: [
    {
      label: 'Time Spent',
      data: [120, 60, 30, 90, 45],
      backgroundColor: [
        'rgba(101,184,254,0.8)',
        'rgba(123,193,253,0.8)',
        'rgba(144,201,253,0.8)',
        'rgba(165,210,252,0.8)',
        'rgba(184,219,252,0.8)',
      ],
      hoverOffset: 40,
    },
  ],
};

export const PieGraph = () => {
  const options = {};
  return <Pie options={options} data={pieChartData} />;
};
