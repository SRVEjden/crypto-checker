"use client"
import React, { useEffect, useState } from 'react';
import UseWebsocket from "@/lib/hooks/UseWebsocket";
import { getAllCryptoPrice } from "@/lib/api/coinGecko";

function Page(props) {
    const {
        sendMessage,
        addMessageListener,
        removeMessageListener,
        readyState
    } = UseWebsocket('wss://stream.binance.com:9443/ws');

    const [message, setMessage] = useState({})
    const handle = () => {
        if (readyState === WebSocket.OPEN) {
            sendMessage({
                method: 'SUBSCRIBE',
                params: ['BTCUSDT@ticker'],
                id: Date.now(),
            });
        }
        else {
            console.log(readyState);
        }
    }
    useEffect(() => {
        // Подписка на сообщения
        const handle = evt => {
            const data = JSON.parse(evt.data);
            setMessage(data);
            console.log('Получили сообщение:', data);
        };
        addMessageListener(handle);
        return () => removeMessageListener(handle);
    }, [addMessageListener, removeMessageListener]);

    // useEffect(() => {
    //     // Ждём, пока сокет откроется, и отправляем запрос
    //     if (readyState === WebSocket.OPEN) {
    //         sendMessage({
    //             method: 'SUBSCRIBE',
    //             params: ['BTCUSDT@ticker'],
    //             id: Date.now(),
    //         });
    //     }
    // }, [readyState, sendMessage]);
    return <div><button onClick={handle}>Aboba</button></div>;
}

export default Page