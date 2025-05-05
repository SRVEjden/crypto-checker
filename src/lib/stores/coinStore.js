import { create } from 'zustand';

export const useCoinStore = create(set => ({
	currentCoin: {
		id: '',
		name: '',
		tag: '',
	},
	setCurrentCoin: coin =>
		set({
			id: coin.id,
			name: coin.name,
			tag: coin.tag,
		}),
}));
