'use client';
import CoinSearch from '@/app/dashboard/components/CoinSearch';
import CryptoTable from '@/app/dashboard/components/CryptoTable';
import { getAllCryptoPrice } from '@/lib/api/coinGecko';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import './dashboard.scss';

function Page(props) {
	const [cryptoString, setCryptoString] = useState('');
	const {
		data: cryptoList,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['coins'],
		queryFn: () => getAllCryptoPrice(),
		staleTime: 10 * 1000,
	});
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading data.</div>;
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
