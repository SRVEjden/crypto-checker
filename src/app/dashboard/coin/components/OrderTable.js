'use client';
import { getBidsAndAsks } from '@/lib/api/coinGecko';
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import ErrorDisplay from '../../../../components/ErrorDisplay';
import Loader from '../../../../components/Loading';
import OrderRow from './OrderRow';
function OrderTable({ id }) {
	const {
		data: orders,
		isError,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['orders', id],
		queryFn: () => getBidsAndAsks(id),
		staleTime: 29.9 * 1000,
		refetchInterval: 30 * 1000,
		refetchIntervalInBackground: true,
		retry: 1,
	});
	if (isLoading) return <Loader />;
	if (isError) return <ErrorDisplay error={error} />;
	return (
		<>
			<table className='w-full h-9/10'>
				<thead className='sticky top-0 bg-base-100 '>
					<tr>
						<th className='text-center'>Buy Orders</th>
						<th className='text-center'>Price</th>
						<th className='text-center'>Sell Orders</th>
						<th className='text-center'>Price</th>
					</tr>
				</thead>
				<tbody>
					{orders?.map(order => {
						return <OrderRow key={order.id} order={order}></OrderRow>;
					})}
				</tbody>
			</table>
		</>
	);
}
export default memo(OrderTable);
