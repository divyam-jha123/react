import { useEffect, useState } from "react";

export const useDebounce = (value) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, 1000);

        return () => {
            clearTimeout(handler);
        }
    }, [value]);

    return debounceValue;
}