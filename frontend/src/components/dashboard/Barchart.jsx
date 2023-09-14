import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function BarChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [1002 , 600, 800, 1200, 3600],
        backgroundColor: '#f1356d',
        borderColor: '#001524',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend for better responsiveness
      },
    },
    responsive: true, // Make the chart responsive
    maintainAspectRatio: true, // Maintain aspect ratio
    layout: {
      padding: {
        left: 10, // Adjust left padding for better responsiveness
        right: 10, // Adjust right padding for better responsiveness
      },
    },
    responsive: true, // Make the chart responsive
    maintainAspectRatio: true, // Maintain aspect ratio
    aspectRatio: 2, // Aspect ratio (adjust based on your preference)
  };

  return (
    <div className='py-4' >
      <h2 className='text-color1_dark font-bold text-lg text-start px-3 py-2​'>Daily Sale Statistic</h2>
      <Bar className='lg:max-w-xl md:max-w-md sm:max-w-sm' data={data} options={options} />
    </div>
  );
}

export default BarChart;
