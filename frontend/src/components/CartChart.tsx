 import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useCart } from '../context/useCart';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CartChart = () => {
  const { cartItems } = useCart();

  const data = {
    labels: cartItems.map(item => item.title),
    datasets: [
      {
        label: 'Quantity',
        data: cartItems.map(item => item.quantity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Products Quantity in Cart' },
    },
  };

  return <Bar data={data} options={options} />;
};

export default CartChart;