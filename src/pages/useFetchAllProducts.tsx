import  { useEffect, useState } from 'react'

interface fetchProductProps
{
    url: string
}

const useFetchAllProducts = ({ url} : fetchProductProps) => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () =>{
        fetch(url)
        .then((response) =>{
            if(response.ok == false){
                throw new Error('HTTP Error:' + response.status);
            }
            return response.json();
        })
        .then((data)=>{
            setIsLoading(false);
            setData(data);
            setIsError(null);
        })
        .catch((error)=>{
            setIsError(error.message);
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        fetchData();
    },[url])
  return {data, isError, isLoading}
}

export default useFetchAllProducts
