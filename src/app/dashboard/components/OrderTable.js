'use client';
import { getBidsAndAsks } from '@/lib/api/coinGecko';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loading';
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
OrderTable.whyDidYouRender = true;
export default OrderTable;
