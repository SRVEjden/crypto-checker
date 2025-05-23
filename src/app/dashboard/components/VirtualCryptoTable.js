'use client';

import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import VirtualCryptoTableRow from './VirtualCryptoTableRow';

const GRID_COLUMNS = '80px 120px 1fr 1fr 1fr 1fr 1fr';

function VirtualCryptoTable({ cryptoString = '', cryptoList = [] }) {

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'desc' });

    const toggleSort = useCallback((key) => {
        setSortConfig((prev) => ({
            key,
            direction:
                prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc',
        }));
    }, []);

    const visibleCoins = useMemo(() => {
        if (!cryptoList.length) return [];

        const filtered = cryptoList.filter(
            (c) =>
                c.name.toUpperCase().startsWith(cryptoString.toUpperCase()) ||
                c.symbol.toUpperCase().startsWith(cryptoString.toUpperCase()),
        );

        if (!sortConfig.key) return filtered;
        const { key, direction } = sortConfig;

        return [...filtered].sort((a, b) => {
            const aVal = a[key];
            const bVal = b[key];

            if (typeof aVal === 'string') {
                const cmp = aVal.localeCompare(bVal, undefined, {
                    sensitivity: 'base',
                });
                return direction === 'asc' ? cmp : -cmp;
            }
            const diff = aVal - bVal;
            return direction === 'asc' ? diff : -diff;
        });
    }, [cryptoList, cryptoString, sortConfig]);

    const parentRef = useRef(null);

    const rowVirtualizer = useVirtualizer({
        count: visibleCoins.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 70,
        overscan: 8,
        getItemKey: (index) => visibleCoins[index].id,
    });

    /* ---------- JSX ---------- */
    return (
        <div
            ref={parentRef}
            className="h-screen w-[80vw] overflow-y-auto rounded-lg"
        >
            {/* хедер */}
            <div
                style={{ display: 'grid', gridTemplateColumns: GRID_COLUMNS }}
                className="sticky top-0 z-20 bg-base-100 px-2 py-3 font-semibold"
            >
                <span>Icon</span>

                <span className="cursor-pointer" onClick={() => toggleSort('symbol')}>
          Tag ↕
        </span>

                <span className="cursor-pointer" onClick={() => toggleSort('name')}>
          Name ↕
        </span>

                <span
                    className="cursor-pointer text-right"
                    onClick={() => toggleSort('market_cap')}
                >
          Market Cap ↕
        </span>

                <span
                    className="cursor-pointer text-right"
                    onClick={() => toggleSort('current_price')}
                >
          Price ↕
        </span>

                <span
                    className="cursor-pointer text-right"
                    onClick={() => toggleSort('price_change_24h')}
                >
          24h ↕
        </span>

                <span
                    className="cursor-pointer text-right"
                    onClick={() => toggleSort('price_change_percentage_24h')}
                >
          24h (%) ↕
        </span>
            </div>
            <div
                style={{
                    position: 'relative',
                    height: `${rowVirtualizer.getTotalSize()}px`,
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const coin = visibleCoins[virtualRow.index];

                    return (
                        <VirtualCryptoTableRow
                            key={coin.id}
                            coin={coin}
                            gridTemplate={GRID_COLUMNS}
                            ref={virtualRow.measureRef}
                            style={{
                                position: 'absolute',
                                transform: `translateY(${virtualRow.start}px)`,
                                width: '100%',
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default memo(VirtualCryptoTable);
