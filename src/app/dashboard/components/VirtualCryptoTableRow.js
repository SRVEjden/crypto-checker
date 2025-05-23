'use client';

import { forwardRef, memo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import roundToThousandths from '@/lib/roundToThousandths';

/**
 * Одна строка таблицы-грида.
 *
 * @param {object}   props
 * @param {Coin}     props.coin             объект монеты
 * @param {string}   props.gridTemplate     значение grid-шаблона колонок
 * @param {object}   [props.style]          inline-стили от виртуализатора
 */
const VirtualCryptoTableRow = forwardRef(function VirtualCryptoTableRow(
    { coin, gridTemplate, style = {} },
    ref,
) {
    const router = useRouter();

    const priceChangeColor =
        coin.price_change_24h > 0
            ? 'text-green-500'
            : coin.price_change_24h === 0
                ? 'text-white'
                : 'text-red-500';

    const clickHandler = useCallback(() => {
        const params = new URLSearchParams({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
        });
        router.push(`/dashboard/coin?${params.toString()}`);
    }, [coin, router]);

    return (
        <div
            ref={ref}
            onClick={clickHandler}
            style={{ ...style, display: 'grid', gridTemplateColumns: gridTemplate }}
            className="items-center px-2 py-3 cursor-pointer hover:bg-base-200"
        >
            {/* Icon */}
            <div className="flex items-center">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img src={coin.image} alt={`${coin.symbol} icon`} />
                    </div>
                </div>
            </div>

            {/* Tag */}
            <div className="font-bold">{coin.symbol.toUpperCase()}</div>

            {/* Name */}
            <div className="truncate">{coin.name}</div>

            {/* Market Cap */}
            <div className="text-right">
                {Number(coin.market_cap).toLocaleString()}
            </div>

            {/* Price */}
            <div className="text-right">
                {roundToThousandths(coin.current_price)}
            </div>

            {/* 24 h */}
            <div className={`text-right ${priceChangeColor}`}>
                {roundToThousandths(coin.price_change_24h || 0)}
            </div>

            {/* 24 h % */}
            <div className={`text-right ${priceChangeColor}`}>
                {roundToThousandths(coin.price_change_percentage_24h || 0)}%
            </div>
        </div>
    );
});

export default memo(VirtualCryptoTableRow);
