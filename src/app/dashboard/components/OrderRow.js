export default function OrderRow({ order }) {
	return (
		<tr>
			<td>{order.bidCount}</td>
			<td>{order.bidPrice}</td>
			<td>{order.askCount}</td>
			<td>{order.askPrice}</td>
		</tr>
	);
}
