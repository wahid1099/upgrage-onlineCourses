import  {useEffect, useState} from 'react';

const UseServices = () => {
    const [services,setService]=useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
            .then(res=>res.json())
            .then(data=>setService(data));
        },[]);
    return [services,setService]
};

export default UseServices;