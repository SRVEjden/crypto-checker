'use client';
import {memo, useCallback, useMemo, useState} from 'react';
import CryptoTableRow from '@/app/dashboard/components/CryptoTableRow';

function CryptoTable({ cryptoString, cryptoList }) {
	const [sortConfig, setSortConfig] = useState({
		key: null,
		direction: 'desc',
	});

	const toggleSort = useCallback((key) => {
		setSortConfig((prev) => ({
			key,
			direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc',
		}));
	}, []);

	const visibleCoins = useMemo(() => {
		if (!cryptoList?.length) return [];

		const filtered = cryptoList.filter((coin) =>
			coin.name.toUpperCase().startsWith(cryptoString.toUpperCase()) ||
			coin.symbol.toUpperCase().startsWith(cryptoString.toUpperCase())
		);

		if (!sortConfig.key) return filtered;

		const { key, direction } = sortConfig;
		return [...filtered].sort((a, b) => {
			const aVal = a[key];
			const bVal = b[key];

			if (typeof aVal === 'string') {
				const cmp = aVal.localeCompare(bVal, undefined, {sensitivity: 'base'});
				return direction === 'asc' ? cmp : -cmp;
			}

			const diff = aVal - bVal;
			return direction === 'asc' ? diff : -diff;
		});
	}, [cryptoList, cryptoString, sortConfig]);

	return (
		<div className="h-screen">
			<table className="table w-250">
				<thead className="sticky top-0 bg-base-100 z-20">
				<tr>
					<th>Icon</th>
					<th className="cursor-pointer" onClick={() => toggleSort('symbol')}>Tag ↕</th>
					<th className="cursor-pointer" onClick={() => toggleSort('name')}>Name ↕</th>
					<th className="cursor-pointer" onClick={() => toggleSort('market_cap')}>Market Cap ↕</th>
					<th className="cursor-pointer" onClick={() => toggleSort('current_price')}>Price ↕</th>
					<th className="cursor-pointer" onClick={() => toggleSort('price_change_24h')}>24h Change ↕</th>
					<th
						className="cursor-pointer"
						onClick={() => toggleSort('price_change_percentage_24h')}
					>
						24h Change(%) ↕
					</th>
				</tr>
				</thead>
				<tbody className="z-10">
				{visibleCoins.map((coin) => (
					<CryptoTableRow key={coin.id} coin={coin} />
				))}
				</tbody>
			</table>
		</div>
	);
}

export default memo(CryptoTable);
