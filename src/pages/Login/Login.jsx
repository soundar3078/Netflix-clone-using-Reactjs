import React, {useState} from 'react'
import './login.css'
import logo from '../../assets/netbanner.png'
import { login,signup } from '../../firebase'
import netflix_loader from '../../assets/netflixloader.gif'

const Login = () => {
  
  const [signState,setSignState] = useState("Sign In");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
      await login(email, password);
    }else{
      await signup(name,email,password);
    }
    setLoading(false);
  }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_loader} alt="" />
    </div>:
    <div className="login">
      <img src={logo} className="login-logo" alt="" width="20%"/>
      <div className="loginform">    
        <form>
        <h1>{signState}</h1>
        {signState==="Sign Up"?
        <input value = {name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Your name"/>:<></>}
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Your email"/>
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Your password"/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="formhelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          <div className="formswitch">
            {
              signState==="Sign In"?
              <p>New to Netflix<span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span></p>:
              <p>Already have account?<span onClick={() => {setSignState("Sign In")}}>Sign In Now</span></p>
            }
      
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login