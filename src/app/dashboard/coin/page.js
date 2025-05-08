'use client';
import { getCoinInfo } from '@/lib/api/coinGecko';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import LinearChart from '../components/charts/LinearChart';
import CoinTable from '../components/CoinTable';
import './style.scss';

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
			const data = await getCoinInfo(id);
			console.log(data);
			setCoin(data);
		};
		fetchData();
	}, []);
	const [coin, setCoin] = useState({});
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
				<LinearChart
					id={id}
					label={`${symbol.toUpperCase()}/USD`}
					titleText={`${symbol.toUpperCase()}/USD`}
				/>
				<CoinTable coin={coin} />
			</div>
		</div>
	);
}
