import { useEffect, useState } from 'react';

function useSearch(param) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3500/sofas?q=${param}`)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            });

    }, [param]);

    return [products, isLoading, error];
}

export default useSearch;