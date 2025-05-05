export default function CoinTable({
	icon,
	name,
	currPrice,
	percent24hDiff,
	flat24hDiff,
}) {
	return (
		<table className='max-h-1/12'>
			<tbody>
				<tr>
					<td>Icon</td>
					<td>Name</td>
				</tr>
				<tr>
					<td>Current price</td>
					<td>24h dif percent + flat</td>
				</tr>
			</tbody>
		</table>
	);
}
