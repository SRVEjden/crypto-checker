import { mockServerData } from '@/lib/api/mockServerData';

function removeTrailingZeros(str) {
	return str.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
}
const getAllCryptoPrice = () => {
	try {
		const params = new URLSearchParams({
			vs_currency: 'usd',
			order: 'market_cap_desc',
			price_change_percentage: '24h',
			sparkline: 'false',
			per_page: '250',
			ids: mockServerData(),
		});
		return fetch(
			`https://api.coingecko.com/api/v3/coins/markets?${params}`
		).then(response => response.json());
	} catch (error) {
		throw new Error(error);
	}
};

const getAllTimePrice = async (id, days = '365d', interval = 'daily') => {
	try {
		const params = new URLSearchParams({
			vs_currency: 'usd',
			days: days,
			interval: interval,
		});
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/${id}/market_chart?${params}`
		);
		const formattedTime = [];
		const formattedValue = [];
		const data = (await response.json()).prices.map(historyPoint => {
			formattedTime.push(new Date(historyPoint[0]).toISOString().split('T')[0]);
			formattedValue.push(historyPoint[1]);
		});
		return { formattedTime, formattedValue };
	} catch (error) {
		throw new Error(error);
	}
};
const getBidsAndAsks = async (symbol, limit = 10) => {
	const result = [];
	try {
		const params = new URLSearchParams({
			symbol: `${symbol.toUpperCase()}USDT`,
		});
		const response = await fetch(
			`https://api.binance.com/api/v3/depth?${params}`
		);
		const data = await response.json();
		for (let i = 0; i < data.bids.length; i++) {
			result.push({
				bidCount: removeTrailingZeros(data.bids[i][1]),
				bidPrice: removeTrailingZeros(data.bids[i][0]),
				askPrice: removeTrailingZeros(data.asks[i][0]),
				askCount: removeTrailingZeros(data.asks[i][1]),
			});
		}
		return result;
	} catch (error) {
		throw new Error(error);
	}
};
const getCoinInfo = async id => {
	try {
		const params = new URLSearchParams({
			vs_currency: 'usd',
			order: 'market_cap_desc',
			price_change_percentage: '24h',
			sparkline: 'false',
			ids: id,
		});
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/markets?${params}`
		);
		const data = (await response.json())[0];
		return {
			id: data.id,
			symbol: data.symbol,
			name: data.name,
			image: data.image,
			current_price: data.current_price,
			price_change_24h: data.price_change_24h,
			price_change_percentage_24h: data.price_change_percentage_24h,
			circulating_supply: data.circulating_supply,
			market_cap: data.market_cap,
			total_volume: data.total_volume,
		};
	} catch (error) {
		throw new Error(error);
	}
};
export { getAllCryptoPrice, getAllTimePrice, getBidsAndAsks, getCoinInfo };
