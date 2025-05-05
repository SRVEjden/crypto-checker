import { useEffect, useRef, useCallback } from 'react';

/**
 * useWebsocket hook
 * @param {string} url - WebSocket URL
 * @returns {{
 *   sendMessage: (msg: any) => void,
 *   addMessageListener: (fn: (ev: MessageEvent) => void) => void,
 *   removeMessageListener: (fn: (ev: MessageEvent) => void) => void,
 *   readyState: number
 * }}
 */
export default function useWebsocket(url) {
    const wsRef = useRef(null);
    const queueRef = useRef([]);
    const listenersRef = useRef(new Set());

    // Establish and clean up WebSocket connection
    useEffect(() => {
        const ws = new WebSocket(url);
        wsRef.current = ws;

        // On open, flush queued messages
        ws.addEventListener('open', () => {
            console.log("Connected");
            queueRef.current.forEach(msg => ws.send(JSON.stringify(msg)));
            queueRef.current = [];
        });

        // On message, notify all listeners
        ws.addEventListener('message', event => {
            listenersRef.current.forEach(fn => fn(event));
        });

        // On error/close logging
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

    // Expose current readyState
    const readyState = wsRef.current?.readyState ?? WebSocket.CLOSED;

    return { sendMessage, addMessageListener, removeMessageListener, readyState };
}