      
      //login content
      import React, { useState } from 'react'
      import { Link } from 'react-router-dom'
      import './login.css'
      export default function Login() {
  var user_name = 'deepanshu'
  var password = localStorage.getItem('password')
  const [username, setUserName] = useState('')
  const [pass, setPass] = useState('')
  const [islogin, setIslogin] = useState(false)
  function handleusername(e) {
    setUserName(e.target.value);
  }
  function handlepass(e) {
    setPass(e.target.value);
  }
  function showItems() {
    console.log(username);
    console.log(pass);
    
    if(username === user_name&&pass === password){
      console.log('login successfull');
      setIslogin(true)
    }
    else{
      console.log('login failed');
    }
  }
  return (
<>
    {/* <Background/> */}
    <div className='background1'>
      <div className="logincontainer">
        
      <div className="login">
          <div className="content">
            <h5 className='heading'>Welcome to our business website</h5>
            <label htmlFor="Username" className='username'>Username:</label>
            <input type="text" id='Username' placeholder='Enter your username' onChange={handleusername}/>
            <br />
            <br />
            <label htmlFor="Password" className='password'>Password:</label>
            <input type="Password" id='Password' placeholder='Enter your password' onChange={handlepass}/>
            <br />
            {/* <a href='/' onClick={changepass}>Forgot Password</a> */}
            <Link to='/Dialogbox' className='forget'>
              Forgot Password 
            </Link>
            <br />
            
            
            {/* <button className='loginBut' onClick={showItems}>Login</button> */}
            <div className="loginbutton">
            {islogin?<Link  to='/Homepage' className='loginbut' onClick={showItems}>
            login
            </Link>:<Link  to='/' className='loginbut' onClick={showItems}>
            login
            </Link>}
            </div>
            
        </div>
        </div>
        </div>
        </div>
        </>
  )
}
