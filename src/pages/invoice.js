import React, { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom';


function Invoice() {

    let [searchParams,setSearchParams]=useSearchParams();
    let user=searchParams.get('user');
    console.log(user);

    let [usersData,setUsersData] = useState([]);


    const getUsersData = async () => {
        const response = await fetch(`http://localhost:3000/${user}`);
        const data = await response.json();
        setUsersData(data);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let formdata = new FormData(e.target);
        let StationId=formdata.get('stationId');
        setSearchParams({user:StationId});
    }

    useEffect(()=>{
        getUsersData();
    },[user]);
  

    return (
        <div>
            <h1>Invoice data example with API</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type='text' name='stationId' ></input>
                    <button type='submit' >submit</button>
                </label>
            </form>
        </div>
    )
}

export default Invoice
