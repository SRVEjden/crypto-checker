'use client';
import { getCoinInfo } from '@/lib/api/coinGecko';
import { useQuery } from '@tanstack/react-query';
import ErrorDisplay from '../../../../components/ErrorDisplay';
import Loader from '../../../../components/Loading';
export default function CoinTable({ id }) {
	const {
		data: coin,
		isLoading: isCoinLoading,
		isError: isCoinError,
		error: coinError,
	} = useQuery({
		queryKey: ['coinInfo', id],
		queryFn: () => getCoinInfo(id),
		staleTime: 19.9 * 1000,
		refetchInterval: 20 * 1000,
		refetchIntervalInBackground: true,
		retry: 1,
		refetchOnMount: false,
		cacheTime: 60 * 1000,
	});
	if (isCoinLoading) return <Loader />;
	if (isCoinError) return <ErrorDisplay error={coinError} />;
	return (
		<table className='max-h-1/12'>
			<thead>
				<tr className='text-center'>
					<td></td>
					<td>Name</td>
					<td>Current Price</td>
					<td>Market Cap</td>
					<td>24h Price Change</td>
					<td>24h Percent Price Change</td>
					<td>Total Volume</td>
					<td>Circulating Supply</td>
				</tr>
			</thead>
			<tbody>
				<tr className='text-center content-center'>
					<td className='avatar w-[50px] h-[50px]'>
						<img src={coin?.image} alt={`${coin?.symbol} icon`} />
					</td>
					<td>{coin?.name}</td>
					<td>{coin?.current_price}$</td>
					<td>{coin?.market_cap}$</td>
					<td>{coin?.price_change_24h}$</td>
					<td>{coin?.price_change_percentage_24h}%</td>
					<td>{coin?.total_volume}</td>
					<td>{coin?.circulating_supply}</td>
				</tr>
			</tbody>
		</table>
	);
}
