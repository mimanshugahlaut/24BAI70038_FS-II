import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log(error));
    }, [url]);

    return data;
}

export default useFetch;