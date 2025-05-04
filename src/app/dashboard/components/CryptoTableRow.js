import React from 'react';

function CryptoTableRow({coin}) {
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src={coin.icon}
                            alt={`${coin.tag} icon`} />
                    </div>
                </div>
            </td>
            <td>
                <span className="font-bold">{coin.tag}</span>
            </td>
            <td>{coin.name}</td>
            <td>{coin.cap}</td>
            <td>{coin.price}</td>
            <td>{coin.priceDiff24h}</td>
        </tr>
    );
}

export default CryptoTableRow;