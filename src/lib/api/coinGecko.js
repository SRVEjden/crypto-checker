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
		const data = (await response.json()).prices.map(historyPoint => {
			return {
				day: new Date(historyPoint[0]).toDateString(),
				price: historyPoint[1],
				timeStamp: historyPoint[0],
			};
		});
		return data;
	} catch (error) {
		console.log(error.message);
	}
};
export { getAllCryptoPrice, getAllTimePrice };
