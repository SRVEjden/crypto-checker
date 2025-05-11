'use client';
import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Line } from 'react-chartjs-2';
import Loader from '../Loading';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	zoomPlugin
);
function Chart({
	borderColor,
	backgroundColor,
	borderWidth,
	label,
	titleText,
	dataset,
}) {
	console.log('rerender');
	const data = {
		labels: dataset?.formattedTime,
		datasets: [
			{
				data: dataset?.formattedValue,
				backgroundColor: backgroundColor || 'rgba(75, 192, 192, 0.6)',
				borderColor: borderColor || 'rgba(75, 192, 192, 1)',
				borderWidth: borderWidth || 1,
				label: label || 'Продажи за 2023 год',
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			y: {
				beginAtZero: false,
			},
		},
		plugins: {
			zoom: {
				zoom: {
					wheel: {
						enabled: true,
					},
					pinch: {
						enabled: true,
					},
					mode: 'x',
				},
				pan: {
					enabled: true,
					mode: 'x',
					modifierKey: 'shift',
				},
			},
			legend: {
				display: false,
				position: 'top',
			},
			title: {
				display: true,
				text: titleText || 'График продаж',
			},
		},
		interaction: {
			mode: 'nearest',
			axis: 'x',
			intersect: false,
		},
	};
	if (!data) return <Loader />;
	return <Line data={data} options={options} />;
}
Chart.whyDidYouRender = true;
export default Chart;
