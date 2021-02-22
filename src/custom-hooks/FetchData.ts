import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export function useGetData() {
    const [characterData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return {characterData, getData:handleDataFetch}
}