import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
export const useCoinStore = create(
	devtools(set => ({
		currentCoin: {
			id: '',
			name: '',
			symbol: '',
		},
		setCurrentCoin: coin => set({ currentCoin: coin }),
	})),
	{
		name: 'CoinStore',
		serialize: true,
	}
);
