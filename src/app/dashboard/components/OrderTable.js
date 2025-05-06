'use client';
import { getBidsAndAsks } from '@/lib/api/coinGecko';
import { useEffect, useState } from 'react';

import OrderRow from './OrderRow';

export default function OrderTable({ id }) {
	useEffect(() => {
		const fetchData = async () => {
			const data = await getBidsAndAsks(id);
			setOrders(prev => data);
		};
		fetchData();
	}, []);
	const [orders, setOrders] = useState([]);
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
