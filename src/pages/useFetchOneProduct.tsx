import  { useEffect, useState } from 'react'

const useFetchOneProduct = ({URL}:{URL:string}) => {
    const [data, setData] = useState<any>({});
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = ()=>{
        fetch(URL)
        .then((response)=>{
            if(response.ok == false){
                throw new Error('HTTP Error' + response.status);
            }
            return response.json();
        })
        .then((data)=>{
            setIsLoading(false);
            setData(data);
            setIsError(null);
        })
        .catch((error)=>{
            setIsLoading(false);
            setIsError(error.message);
        })
    };
    useEffect(()=>{
        fetchData();
    },[URL])
    
  return {data, isError, isLoading}
}

export default useFetchOneProduct
