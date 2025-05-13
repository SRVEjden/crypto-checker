'use client';
import roundToThousandths from '@/lib/roundToThousandths';
import { useRouter } from 'next/navigation';
import {memo, useCallback} from 'react'
function CryptoTableRow({ coin }) {
	const router = useRouter();
	let priceChangeColor;
	if (coin.price_change_24h > 0) priceChangeColor = 'text-green-500';
	else if (!coin.price_change_24h) priceChangeColor = `text-white-500`;
	else priceChangeColor = `text-red-500`;
	const clickHandler = useCallback( (e) => {
		const params = new URLSearchParams({
			id: coin.id,
			name: coin.name,
			symbol: coin.symbol,
		});
		router.push(`/dashboard/coin?${params}`);
	}, [coin]);
	return (
		<tr onClick={clickHandler}>
			<td>
				<div className='avatar'>
					<div className='mask mask-squircle h-12 w-12'>
						<img src={coin.image} alt={`${coin.symbol} icon`} />
					</div>
				</div>
			</td>
			<td>
				<span className='font-bold'>{coin.symbol.toUpperCase()}</span>
			</td>
			<td>{coin.name}</td>
			<td>{coin.market_cap}</td>
			<td>{coin.current_price}</td>
			<td className={priceChangeColor}>
				{roundToThousandths(coin.price_change_24h ? coin.price_change_24h : 0)}
			</td>
			<td className={priceChangeColor}>
				{coin.price_change_percentage_24h
					? coin.price_change_percentage_24h
					: 0}
				%
			</td>
		</tr>
	);
}

export default memo(CryptoTableRow);
