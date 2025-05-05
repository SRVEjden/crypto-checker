import { useEffect, useRef, useCallback } from 'react';

/**
 * useWebsocket hook
 * @param {string} url - WebSocket URL
 * @returns {{
 *   wsRef: {current: object},
 *   sendMessage: (msg: any) => void,
 *   addMessageListener: (fn: (ev: MessageEvent) => void) => void,
 *   removeMessageListener: (fn: (ev: MessageEvent) => void) => void,
 * }}
 */
export default function useWebsocket(url) {
    const wsRef = useRef(null);
    const queueRef = useRef([]);
    const listenersRef = useRef(new Set());

    useEffect(() => {
        const ws = new WebSocket(url);
        wsRef.current = ws;

        ws.addEventListener('open', () => {
            console.log("Connected");
            queueRef.current.forEach(msg => ws.send(JSON.stringify(msg)));
            queueRef.current = [];
        });

        ws.addEventListener('message', event => {
            listenersRef.current.forEach(fn => fn(event));
        });

        ws.addEventListener('error', e => console.error('WebSocket error', e));
        ws.addEventListener('close', () => console.log('WebSocket closed'));

        return () => {
            ws.close();
            wsRef.current = null;
            listenersRef.current.clear();
        };
    }, [url]);


    const sendMessage = useCallback(msg => {
        const ws = wsRef.current;
        const payload = JSON.stringify(msg);
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(payload);
        } else {
            queueRef.current.push(msg);
        }
    }, []);

    const addMessageListener = useCallback(fn => {
        listenersRef.current.add(fn);
    }, []);

    const removeMessageListener = useCallback(fn => {
        listenersRef.current.delete(fn);
    }, []);

    return {wsRef, sendMessage, addMessageListener, removeMessageListener};
}