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
                if (error.response) {
                    alert(`Error: ${error.response.status} ${error.response.statusText}`);
                } else {
                    alert(error.message);
                }               
            });
    }, [url])
    return data;
}