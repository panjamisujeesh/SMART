import React, { useState } from 'react';
import axios from 'axios';

function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async ()=>{
        const res = await axios.post('http://localhost:5000/api/auth/login',{
            email,password
        });
        alert("Logged in");
    };

    return (
        <div>
            <h2>Login</h2>
            <input onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={e=>setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
