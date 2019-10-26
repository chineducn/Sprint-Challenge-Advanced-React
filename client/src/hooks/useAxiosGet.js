import { useEffect, useState } from 'react';
import axios from 'axios';

export default (url, initialData) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                alert(`Error: ${error.response.status} ${error.response.statusText}`)
            });
    }, [url])
    return data;
}