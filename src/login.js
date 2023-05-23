import {useState} from 'react'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const getUsername = (e) =>{
        setUsername(e.target.value)
    }
    const  getPassword= (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`)
      };

    return (
    <div className="contain">
        <form>
            <h3>Login</h3>
            <label>Email or Username</label><br/>
            <input type="text" onChange={getUsername} placeholder="Enter e-mail or username" />
            <br/>
            <label>Password</label><br/>
            <input  id='inp' type="password" onChange={getPassword} placeholder="Enter Password" />
            <br/>
            <a href="#">Forgot Password</a>
            <br/>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>

    </div>
    );
};


export default Login