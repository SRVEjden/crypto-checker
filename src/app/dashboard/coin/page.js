'use client';
import { getAllTimePrice, getCoinInfo } from '@/lib/api/coinGecko';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CoinTable from '../components/CoinTable';
import './style.scss';
const Chart = dynamic(() => import('../components/charts/Chart'), {
	ssr: false,
});
export default function Page() {
	const router = useRouter();
	const clickHandler = () => {
		router.back();
	};
	const searchParams = useSearchParams();
	const { id, name, symbol } = {
		id: searchParams.get('id'),
		name: searchParams.get('name'),
		symbol: searchParams.get('symbol'),
	};
	useEffect(() => {
		const fetchData = async () => {
			await getCoinInfo(id).then(data => setCoin(data));
			await getAllTimePrice(id).then(data => setDataset(data));
		};
		fetchData();
	}, []);
	const changePeriod = async period => {
		getAllTimePrice(id, period).then(data => setDataset(data));
	};
	const [coin, setCoin] = useState({});
	const [dataset, setDataset] = useState({});
	return (
		<div className='flex flex-row m-[10px]'>
			<button onClick={clickHandler} aria-label='Вернуться назад'>
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
				<div>
					<div>
						<button
							className='btn btn-neutral ml-[4px]'
							onClick={() => changePeriod('7d')}
						>
							1 Week
						</button>
						<button
							className='btn btn-neutral ml-[4px]'
							onClick={() => changePeriod('31d')}
						>
							1 Month
						</button>
						<button
							className='btn btn-neutral ml-[4px]'
							onClick={() => changePeriod('93d')}
						>
							3 Month
						</button>
						<button
							className='btn btn-neutral ml-[4px]'
							onClick={() => changePeriod('365d')}
						>
							1 Year
						</button>
					</div>
					<Chart
						dataset={dataset}
						label={`${coin?.symbol?.toUpperCase()}/USD`}
						titleText={`${coin?.symbol?.toUpperCase()}/USD`}
					/>
				</div>
				<CoinTable coin={coin} />
			</div>
		</div>
	);
}
