"use client"
import React, {useEffect, useState} from 'react';
import "./dashboard.scss"
import CryptoTable from "@/app/dashboard/components/CryptoTable";
import CoinSearch from "@/app/dashboard/components/CoinSearch";
import {getAllCryptoPrice} from "@/lib/api/coinGecko";

function Page(props) {
    const [cryptoList, setCryptoList] = useState([]);
    const [cryptoString, setCryptoString] = useState('');
    function changeHandler(e) {
        setCryptoString(e.target.value)
    }

    useEffect(() => {
        async function fetchPrices() {
            try {
                const list = await getAllCryptoPrice();
                setCryptoList(list);
            } catch (err) {
                console.error('Couldn\'t find crypto list, check connection', err);
            }
        }
        fetchPrices();
    }, []);
    return (
        <div className="m-[10px]">
            <CoinSearch onChange={changeHandler} cryptoString={cryptoString}/>
            <CryptoTable cryptoString={cryptoString} cryptoList={cryptoList}/>
        </div>
    );
}

export default Page;