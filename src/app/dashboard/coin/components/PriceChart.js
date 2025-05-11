'use client';
import { getAllTimePrice } from '@/lib/api/coinGecko';
import { useQuery } from '@tanstack/react-query';
import { memo, useCallback, useState } from 'react';
import ErrorDisplay from '../../../../components/ErrorDisplay';
import Loader from '../../../../components/Loading';
import Chart from '../../../../components/charts/Chart';
function PriceChart({ id, symbol }) {
	const [period, setPeriod] = useState('365d');
	const set7d = useCallback(() => setPeriod('7d'), []);
	const set1m = useCallback(() => setPeriod('31d'), []);
	const set3m = useCallback(() => setPeriod('93d'), []);
	const set1y = useCallback(() => setPeriod('365d'));
	const {
		data: dataset,
		isLoading: isPriceLoading,
		isError: isPriceError,
		error: priceError,
	} = useQuery({
		queryKey: ['allTimePrice', id, period],
		queryFn: () => getAllTimePrice(id, period),
		staleTime: 1000 * 24 * 60 * 60,
		placeholderData: previousData => previousData,
		enabled: !!id && !!period,
		cacheTime: 60 * 1000,
	});
	if (isPriceLoading) return <Loader />;
	if (isPriceError) return <ErrorDisplay error={priceError} />;
	return (
		<div>
			<div>
				<button className='btn btn-neutral ml-[4px]' onClick={set7d}>
					1 Week
				</button>
				<button className='btn btn-neutral ml-[4px]' onClick={set1m}>
					1 Month
				</button>
				<button className='btn btn-neutral ml-[4px]' onClick={set3m}>
					3 Month
				</button>
				<button className='btn btn-neutral ml-[4px]' onClick={set1y}>
					1 Year
				</button>
			</div>
			<Chart
				dataset={dataset}
				label={`${symbol?.toUpperCase()}/USD`}
				titleText={`${symbol?.toUpperCase()}/USD`}
			/>
		</div>
	);
}
PriceChart.whyDidYouRender = {
	logOnDifferentValues: true,
	customName: 'Chart',
};
export default memo(PriceChart);
