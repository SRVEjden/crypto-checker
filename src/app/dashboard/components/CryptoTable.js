"use client"
import React, {useEffect, useState} from 'react';
import CryptoTableRow from "@/app/dashboard/components/CryptoTableRow";

/*
cryptoList example:
[
  {
    image: 'https://...',
    symbol: 'BTC',
    name: 'Bitcoin',
    market_cap: 850000000000,
    current_price: 45000.12,
    price_change_24h: 600,
    price_change_percentage_24h: -0.71
  },
  ...
]
*/
function CryptoTable({ cryptoString, cryptoList }) {

    const [parsedCryptoList, setParsedCryptoList] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'desc' });
    useEffect(() => {
        try {
            if (cryptoList && cryptoList.length) {
                setParsedCryptoList(cryptoList);
            }
        }
        catch (e) {
            console.error(e);
        }
    }, [cryptoList]);

    function alphabetSort(key) {
        const direction =
            sortConfig.key === key && sortConfig.direction === 'desc'
                ? 'asc'
                : 'desc';

        setSortConfig({ key, direction });

        setParsedCryptoList(prev =>
            [...prev].sort((a, b) => {
                const cmp = a[key].localeCompare(b[key], undefined, { sensitivity: 'base' });
                return direction === 'asc' ?  cmp : -cmp;
            })
        );
    }

    function numSort(key) {
        const direction =
            sortConfig.key === key && sortConfig.direction === 'desc'
                ? 'asc'
                : 'desc';

        setSortConfig({ key, direction });

        setParsedCryptoList(prev =>
            [...prev].sort((a, b) => {
                const diff = a[key] - b[key];
                return direction === 'asc' ?  diff : -diff;
            })
        );
    }
    
    function searchValidator(coin, cryptoString) {
        return coin.name.toUpperCase().startsWith(cryptoString.toUpperCase()) || coin.symbol.toUpperCase().startsWith(cryptoString.toUpperCase())
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-250">
                <thead>
                <tr>
                    <th>Icon</th>
                    <th className="cursor-pointer" onClick={() => alphabetSort('symbol')}>Tag ↕</th>
                    <th className="cursor-pointer" onClick={() => alphabetSort('name')}>Name ↕</th>
                    <th className="cursor-pointer" onClick={() => numSort('market_cap')}>Market Cap ↕</th>
                    <th className="cursor-pointer" onClick={() => numSort('current_price')}>Price ↕</th>
                    <th className="cursor-pointer" onClick={() => numSort('price_change_24h')}>24h Change ↕</th>
                    <th className="cursor-pointer" onClick={() => numSort('price_change_percentage_24h')}>24h Change(%) ↕</th>
                </tr>
                </thead>
                <tbody>
                {parsedCryptoList.filter(coin => searchValidator(coin, cryptoString)).map(coin => (
                    <CryptoTableRow key={coin.id} coin={coin} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CryptoTable;
