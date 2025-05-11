import { memo } from 'react';

function OrderRow({ order }) {
	return (
		<tr>
			<td className='text-center'>{order.bidCount}</td>
			<td className='text-center'>{order.bidPrice}$</td>
			<td className='text-center'>{order.askCount}</td>
			<td className='text-center'>{order.askPrice}$</td>
		</tr>
	);
}
export default memo(OrderRow);
