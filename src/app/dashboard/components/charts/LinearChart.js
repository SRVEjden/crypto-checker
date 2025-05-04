import { getAllTimePrice } from '@/lib/api/coinGecko';
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	LineElement,
	PointElement
);
export default function LinearChart({
	id,
	borderColor,
	backgroundColor,
	borderWidth,
	label,
	titleText,
}) {
	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getAllTimePrice(id);
				setFormattedData(prev => data);
			} catch (error) {
				console.log(error.message);
			}
		};
		getData();
	}, []);
	const [formattedData, setFormattedData] = useState({});
	const data = {
		labels: formattedData.formattedTime,
		datasets: [
			{
				data: formattedData.formattedValue,
				backgroundColor: backgroundColor || 'rgba(75, 192, 192, 0.6)',
				borderColor: borderColor || 'rgba(75, 192, 192, 1)',
				borderWidth: borderWidth || 1,
				label: label || 'Продажи за 2023 год',
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: 'top',
			},
			title: {
				display: true,
				text: titleText || 'График продаж',
			},
		},
	};

	return <Line data={data} options={options} />;
}
