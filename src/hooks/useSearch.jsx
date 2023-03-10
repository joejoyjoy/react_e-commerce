import { useEffect, useState } from 'react';

function useSearch(param) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3500/sofas?q=${param}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [param]);

    return [products];
}

export default useSearch;