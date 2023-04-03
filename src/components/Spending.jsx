import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: 'Total spending',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
      backgroundColor: '#5E36F5',
    },
    {
      label: 'Outflow',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
      backgroundColor: '#1E1E1E',
    },
  ],
};

// export function App() {
//   return <Bar options={options} data={data} />;
// }

function Spending() {

  console.log(options)
  return (
    <div className='spending'>
      <div className='option'>
        <select>
          <option value="value">Monthly</option>
          <option value="Daily">Daily</option>
          <option value="Year">Year</option>
        </select>
      </div>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default Spending