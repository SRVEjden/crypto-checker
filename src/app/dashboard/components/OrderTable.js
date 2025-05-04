'use client';
import { getBidsAndAsks } from '@/lib/api/coinGecko';
import { useEffect, useState } from 'react';
import OrderRow from './OrderRow';

export default function OrderTable({ id }) {
	useEffect(() => {
		const fetchData = async () => {
			const data = await getBidsAndAsks('BTC');
			setOrders(prev => data);
		};
		fetchData();
	}, []);
	const [orders, setOrders] = useState([]);
	return (
		<>
			<table>
				<thead className='sticky top-0 bg-white dark:bg-gray-800 '>
					<tr>
						<th>Buy Orders</th>
						<th>Price</th>
						<th>Sell Orders</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{orders.map(order => {
						return (
							<OrderRow key={crypto.randomUUID()} order={order}></OrderRow>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
