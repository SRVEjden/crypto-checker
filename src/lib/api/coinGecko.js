const getAllCryptoPrice = async () => {
	try {
		const params = new URLSearchParams({
			vs_currency: 'usd',
			order: 'market_cap_desc',
			price_change_percentage: '24h',
			sparkline: 'false',
			per_page: '250',
		});
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/markets?${params}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
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
			`https://api.coingecko.com/api/v3//coins/${id}/market_chart?${params}`
		);
		const formattedTime = [];
		const formattedValue = [];
		const data = (await response.json()).prices.map(historyPoint => {
			formattedTime.push(new Date(historyPoint[0]).toISOString().split('T')[0]);
			formattedValue.push(historyPoint[1]);
		});
		return { formattedTime, formattedValue };
	} catch (error) {
		console.log(error.message);
	}
};
const getBidsAndAsks = async (symbol, limit = 10) => {
	try {
		const params = new URLSearchParams({
			symbol: `${symbol}USDT`,
		});
		const response = await fetch(
			`https://api.binance.com/api/v3/depth?${params}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
};
export { getAllCryptoPrice, getAllTimePrice, getBidsAndAsks };
