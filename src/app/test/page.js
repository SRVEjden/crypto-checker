"use client"
import React, { useEffect, useState } from 'react';
import useWebsocket from "@/lib/hooks/useWebsocket";
import { getAllCryptoPrice } from "@/lib/api/coinGecko";

function Page(props) {
    const {
        wsRef,
        sendMessage,
        addMessageListener,
        removeMessageListener,
    } = useWebsocket('wss://stream.binance.com:9443/ws');

    const [message, setMessage] = useState({})
    const handle = () => {
        if (wsRef?.current?.readyState === WebSocket.OPEN) {
            sendMessage({
                method: 'SUBSCRIBE',
                params: ['btcusdt@ticker'],
                id: Date.now(),
            });
        }
        else {
            console.log(wsRef.current);
        }
    }
    useEffect(() => {
        // Подписка на сообщения
        const handle = evt => {
            const data = JSON.parse(evt.data);
            setMessage(data);
            console.log('Получили сообщение:', message);
        };
        addMessageListener(handle);
        return () => removeMessageListener(handle);
    }, [addMessageListener, removeMessageListener]);

    return <div>
        <button onClick={handle}>Subscribe</button>
        <button onClick={() => console.log(wsRef.current)}>Readystate</button>
    </div>;
}

export default Page