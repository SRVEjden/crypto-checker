'use client';
import CoinSearch from '@/app/dashboard/components/CoinSearch';
import CryptoTable from '@/app/dashboard/components/CryptoTable';
import { getAllCryptoPrice } from '@/lib/api/coinGecko';
import { useEffect, useState } from 'react';
import './dashboard.scss';

function Page(props) {
	const [cryptoList, setCryptoList] = useState([]);
	const [cryptoString, setCryptoString] = useState('');
	function changeHandler(e) {
		setCryptoString(e.target.value);
	}

	useEffect(() => {
		getAllCryptoPrice().then((data) => {
			setCryptoList(data);
		})
	}, []);
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
