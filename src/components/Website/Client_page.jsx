import React from 'react'
import axios from 'axios'
import NAvbar from '../Website/Navbar'
import './client.css'
import { useState } from 'react'
import { useEffect } from 'react'
function Client_page() {
    const [clientdata, setClientdata] = useState([])
 function fetchdata(){
    // const Data=()=>{
        axios.get("https://reqres.in/api/users?page=1")
        .then((res)=>{
            console.log(res.data.data);
            setClientdata(res.data.data)
        })
        .catch((error)=>{
            console.log(error);
        })
        console.log("running");
    // }
    
 }
 useEffect(()=>{
    fetchdata()
 },[]) //dependancy array
  return (
    <>
    <NAvbar/>
     <div className='Body_client'>
    {
    clientdata.map((key)=>{
        return(
        <div className="card" style={{width: "18rem"}}>
            <img src={key.avatar} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">   
                    Name : {key.first_name} {key.last_name}<br/>
                    Email : {key.email}
                </p>
            </div>
        </div>
        )
    })
    }
    </div>
    </>
   
  )
}

export default Client_page
