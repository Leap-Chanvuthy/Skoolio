import { Pie } from 'react-chartjs-2';

function PieChart() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#f87171', '#60a5fa', '#fcd34d', '#34d399', '#9333ea'],
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
      <Pie className='lg:max-w-xl md:max-w-md sm:max-w-sm' data={data} options={options} />
    </div>
  );
}

export default PieChart;
