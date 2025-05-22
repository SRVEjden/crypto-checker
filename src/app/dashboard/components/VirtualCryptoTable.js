'use client';
import {memo, useCallback, useMemo, useRef, useState} from 'react';
import CryptoTableRow from '@/app/dashboard/components/CryptoTableRow';
import {useVirtualizer} from "@tanstack/react-virtual";
import VirtualCryptoTableRow from "@/app/dashboard/components/VirtualCryptoTableRow";

function VirtualCryptoTable({ cryptoString, cryptoList }) {
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'desc',
    });
    const toggleSort = useCallback((key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc',
        }));
    }, []);

    // const visibleCoins = useMemo(() => {
    //     if (!cryptoList?.length) return [];
    //
    //     const filtered = cryptoList.filter((coin) =>
    //         coin.name.toUpperCase().startsWith(cryptoString.toUpperCase()) ||
    //         coin.symbol.toUpperCase().startsWith(cryptoString.toUpperCase())
    //     );
    //
    //     if (!sortConfig.key) return filtered;
    //
    //     const { key, direction } = sortConfig;
    //     return [...filtered].sort((a, b) => {
    //         const aVal = a[key];
    //         const bVal = b[key];
    //
    //         if (typeof aVal === 'string') {
    //             const cmp = aVal.localeCompare(bVal, undefined, {sensitivity: 'base'});
    //             return direction === 'asc' ? cmp : -cmp;
    //         }
    //
    //         const diff = aVal - bVal;
    //         return direction === 'asc' ? diff : -diff;
    //     });
    // }, [cryptoList, cryptoString, sortConfig]);
    const parentRef = useRef(null)

    const rowVirtualizer = useVirtualizer({
        count: cryptoList?.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 75,
        overscan: 10,
        getItemKey: index => cryptoList[index].id,
    })
    return (
        <div ref={parentRef} className="h-[90vh] overflow-auto w-300">
            <div
                style={{
                    height: rowVirtualizer.getTotalSize(),
                    width: '100%',
                    position: 'relative'
                }}
            >
                <div className="table flex w-80%">
                    <div className="flex flex-row">
                        <div>Icon</div>
                        <div className="cursor-pointer" onClick={() => toggleSort('symbol')}>Tag ↕</div>
                        <div className="cursor-pointer" onClick={() => toggleSort('name')}>Name ↕</div>
                        <div className="cursor-pointer" onClick={() => toggleSort('market_cap')}>Market Cap ↕</div>
                        <div className="cursor-pointer" onClick={() => toggleSort('current_price')}>Price ↕</div>
                        <div className="cursor-pointer" onClick={() => toggleSort('price_change_24h')}>24h Change ↕</div>
                        <div className="cursor-pointer" onClick={() => toggleSort('price_change_percentage_24h')}>24h Change(%) ↕</div>
                    </div>
                    <div className="table-body">
                        {
                            rowVirtualizer.getVirtualItems().map(vRow => (
                                <VirtualCryptoTableRow
                                    key={rowVirtualizer.options.getItemKey(vRow.index)}
                                    ref={vRow.measureRef}
                                    style={{
                                        position: 'absolute',
                                        top: vRow.start,
                                        height: vRow.size,
                                        width: '100%'
                                    }}
                                    coin={cryptoList[vRow.index]}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(VirtualCryptoTable);
