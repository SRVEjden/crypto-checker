import React from 'react';
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
function CryptoTable({cryptoString, cryptoList}) {
    cryptoList = [{
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s',
        symbol: 'BTC',
        name: 'Bitcoin',
        market_cap: 850000000000,
        current_price: 45000.12,
        price_change_24h: -600,
        price_change_percentage_24h: -0.71
    }]
    return (
        <div className="overflow-x-auto w-250">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Icon</th>
                    <th>Tag</th>
                    <th>Name</th>
                    <th>Market Cap</th>
                    <th>Price</th>
                    <th>24h Change</th>
                    <th>24h Change(%)</th>
                </tr>
                </thead>
                {/* Body */}
                <tbody>
                {/* row 1 */}
                {cryptoList.map((coin) => {
                    return (
                        <CryptoTableRow key={coin.symbol} coin={coin}/>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default CryptoTable;