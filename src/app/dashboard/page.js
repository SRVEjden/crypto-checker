'use client';
import CoinSearch from '@/app/dashboard/components/CoinSearch';
import CryptoTable from '@/app/dashboard/components/CryptoTable';
import { getAllCryptoPrice } from '@/lib/api/coinGecko';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ErrorDisplay from '../../components/ErrorDisplay';
import Loader from '../../components/Loading';
import './dashboard.scss';

function Page(props) {
	const [cryptoString, setCryptoString] = useState('');
	const {
		data: cryptoList,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ['coins'],
		queryFn: () => getAllCryptoPrice(),
		staleTime: 9.9 * 1000,
		refetchInterval: 10 * 1000,
		cacheTime: 60 * 1000,
	});
	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <ErrorDisplay error={error} />;
	}

	function changeHandler(e) {
		setCryptoString(e.target.value);
	}
	return (
		<div className='flex flex-col items-center m-[10px]'>
			<CoinSearch onChange={changeHandler} cryptoString={cryptoString} />
			<div className='pt-1'>
				<CryptoTable
					className='h-full'
					cryptoString={cryptoString}
					cryptoList={cryptoList}
				/>
			</div>
		</div>
	);
}

export default Page;
