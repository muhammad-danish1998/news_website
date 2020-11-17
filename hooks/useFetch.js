import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    method: 'GET'
                }).then(res => res.json());
                setResponse(res);
                setLoading(false);
            } catch (err) {
                setResponse(null);
            }
        }
        if (loading) {
            fetchData();
        }
    }, [])
    
    return { loading, texts: response }
}