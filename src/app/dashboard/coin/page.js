'use client';
import { useCoinStore } from '@/lib/stores/coinStore';
import LinearChart from '../components/charts/LinearChart';
import CoinTable from '../components/CoinTable';
import OrderTable from '../components/OrderTable';
import './style.scss';

export default function Page() {
	const currentCoin = useCoinStore(state => state.currentCoin);
	const handle = () => {
		console.log(currentCoin);
	};
	return (
		<div className='flex flex-row m-[10px] h-screen'>
			<button aria-label='Вернуться назад'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M19 12H5M12 19l-7-7 7-7' />
				</svg>
			</button>
			<div className='flex flex-col basis-7/10 pl-[2%] pt-[2%]'>
				<button onClick={handle}>Check</button>
				<LinearChart id={'bitcoin'} />
				<CoinTable />
			</div>
			<div className='flex justify-center h-full basis-3/10 p-[2%]'>
				<div className='h-full overflow-y-auto'>
					<OrderTable id={'BTC'} />
				</div>
			</div>
		</div>
	);
}
