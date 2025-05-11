'use client';
import Loader from '@/components/Loading';
import { mockDataObj } from '@/lib/api/mockServerData';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo } from 'react';
import BackButton from './components/BackButton';
import CoinTable from './components/CoinTable';
import OrderTable from './components/OrderTable';
import './style.scss';
const PriceChart = dynamic(() => import('./components/PriceChart.js'), {
	ssr: false,
});
function PageContent() {
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const name = searchParams.get('name');
	const symbol = searchParams.get('symbol');
	const binanceSymbol = useMemo(
		() => mockDataObj()[name.replaceAll(' ', '')].binanceSymbol,
		[name]
	);
	return (
		<div className='flex flex-row m-[10px]'>
			<BackButton />
			<div className='flex flex-col basis-7/10 pl-[2%] pt-[2%]'>
				<PriceChart id={id} symbol={symbol} />
				<CoinTable id={id} />
			</div>
			<div className='basis-3/10 overflow-y-auto h-[95vh] mt-[10px]'>
				<OrderTable id={binanceSymbol} />
			</div>
		</div>
	);
}
export default function Page() {
	return (
		<Suspense fallback={<Loader />}>
			<PageContent />
		</Suspense>
	);
}
