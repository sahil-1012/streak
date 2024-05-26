import { useState, useEffect } from 'react';

const HOST_URL = process.env.REACT_APP_HOST;

const useGetData = (url, options = {}, delay = false) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [refetchIndex, setRefetchIndex] = useState(0);
    const [debouncing, setDebouncing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const token = sessionStorage.getItem('token');

            try {
                const response = await fetch(HOST_URL + url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    ...options,
                });

                const result = await response.json();

                if (result.success) setData(result.data);
                else console.error("Error fetching data:", result.error);

            } catch (error) {
                console.error("Error fetching data:", error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (delay && !debouncing) {
            const timeout = setTimeout(() => {
                fetchData();
                setDebouncing(false);
            }, 300);

            return () => clearTimeout(timeout);
        }
        else fetchData();

    }, [url, delay, refetchIndex]);

    const refreshData = () => {
        if (delay) setDebouncing(true);
        else {
            setRefetchIndex(refetchIndex + 1);
            console.info("refreshed");
        }
    };

    return { data, isLoading, refreshData };
};

export default useGetData;