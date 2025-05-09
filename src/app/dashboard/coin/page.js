'use client';
import { getAllTimePrice, getCoinInfo } from '@/lib/api/coinGecko';
import { mockDataObj } from '@/lib/api/mockServerData';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import CoinTable from '../components/CoinTable';
import OrderTable from '../components/OrderTable';
import './style.scss';
const Chart = dynamic(() => import('../components/charts/Chart'), {
	ssr: false,
});
export default function Page() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const name = searchParams.get('name');
	const symbol = searchParams.get('symbol');

	const [period, setPeriod] = useState('365d');

	const {
		data: coin,
		isLoading: isCoinLoading,
		isError: isCoinError,
		error: coinError,
	} = useQuery({
		queryKey: ['coinInfo', id],
		queryFn: () => getCoinInfo(id),
		staleTime: 1000 * 60 * 2,
		retry: 1,
	});
	const {
		data: dataset,
		isLoading: isPriceLoading,
		isError: isPriceError,
		error: priceError,
	} = useQuery({
		queryKey: ['allTimePrice', id, period],
		queryFn: () => getAllTimePrice(id, period),
		staleTime: 1000 * 10,
		placeholderData: previousData => previousData,
		enabled: !!id && !!period,
	});

	const clickHandler = () => {
		router.back();
	};
	const changePeriod = async period => {
		getAllTimePrice(id, period).then(data => setDataset(data));
	};

	if (isCoinLoading || isPriceLoading) return <div>Загрузка…</div>;
	if (isCoinError) return <div>Ошибка: {coinError.message}</div>;
	if (isPriceError) return <div>Ошибка: {priceError.message}</div>;
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
							onClick={() => setPeriod('7d')}
						>
							1 Week
						</button>
						<button
							className='btn btn-neutral ml-[4px]'
							onClick={() => setPeriod('31d')}
						>
							1 Month
						</button>
						<button
							className='btn btn-neutral ml-[4px]'
							onClick={() => setPeriod('93d')}
						>
							3 Month
						</button>
						<button
							className='btn btn-neutral ml-[4px]'
							onClick={() => setPeriod('365d')}
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
			<div className='basis-3/10 overflow-y-auto h-[95vh] mt-[10px]'>
				<OrderTable
					id={mockDataObj()[name.replaceAll(' ', '')].binanceSymbol}
				/>
			</div>
		</div>
	);
}
