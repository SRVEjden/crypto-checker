import React from 'react';
import CryptoTableRow from "@/app/dashboard/components/CryptoTableRow";

/*
cryptoList example:
[
{
    icon: 'https://...',
    tag: 'BTC',
    name: 'Bitcoin',
    cap: 850000000000,
    price: 45000.12,
    priceDiff24h: 2.34
},
...
]
 */
function CryptoTable({cryptoString, cryptoList}) {
    return (
        <div className="overflow-x-auto">
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
                </tr>
                </thead>
                {/* Body */}
                <tbody>
                {/* row 1 */}
                {cryptoList.map((coin) => {
                    return (
                        <CryptoTableRow coin={coin}/>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default CryptoTable;