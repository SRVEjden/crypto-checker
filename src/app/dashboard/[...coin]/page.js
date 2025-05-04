'use client';
import { use } from 'react';
import LinearChart from '../components/charts/LinearChart';
import CoinTable from '../components/CoinTable';
import OrderTable from '../components/OrderTable';
import './style.css';
export default function Page({ params }) {
	const { coin } = use(params);
	return (
		<div className='flex'>
			<div className='w-[80%]'>
				<LinearChart id={coin[2]} />
			</div>
			<div className='flex flex-col'>
				<CoinTable />
				<div className='h-1/2 overflow-y-auto border-t'>
					<OrderTable id={'BTC'} />
				</div>
			</div>
		</div>
	);
}
