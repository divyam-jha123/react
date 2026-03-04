import { useState ,useEffect } from "react";

export function useFetch(url) {
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getData() {
        const data = await fetch(url);
        const json = await data.json();

        setFinalData(json);

        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [url]);

    return {
        finalData,
        loading,
    }

}