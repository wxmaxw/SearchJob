import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(jobs_apiUrl){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        try{
            const {data: responseData} = await axios.get(jobs_apiUrl)
            setData(responseData);
            setLoading(false);
        }

        catch(err){
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(()=> {fetchData();},[jobs_apiUrl]);

    return{data, loading, error};

}

export default useFetch;