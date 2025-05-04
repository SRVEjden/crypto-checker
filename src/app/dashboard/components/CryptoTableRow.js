import React from 'react';

function CryptoTableRow({coin}) {
    let priceChangeColor;
    if (coin.price_change_24h > 0) priceChangeColor = 'text-green-500'
    else priceChangeColor = `text-red-500`
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src={coin.image}
                            alt={`${coin.symbol} icon`} />
                    </div>
                </div>
            </td>
            <td>
                <span className="font-bold">{coin.symbol}</span>
            </td>
            <td>{coin.name}</td>
            <td>{coin.market_cap}</td>
            <td>{coin.current_price}</td>
            <td className={priceChangeColor}>{coin.price_change_24h}</td>
            <td className={priceChangeColor}>{coin.price_change_percentage_24h}</td>
        </tr>
    );
}

export default CryptoTableRow;