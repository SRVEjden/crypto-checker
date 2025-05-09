'use client';
import { getBidsAndAsks } from '@/lib/api/coinGecko';
import { useQuery } from '@tanstack/react-query';
import OrderRow from './OrderRow';

export default function OrderTable({ id }) {
	const {
		data: orders,
		isError,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['orders', id],
		queryFn: () => getBidsAndAsks(id),
		staleTime: 30 * 1000,
		retry: 1,
	});
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>{error?.message}</div>;
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
						return (
							<OrderRow key={crypto.randomUUID()} order={order}></OrderRow>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
