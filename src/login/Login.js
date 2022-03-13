import css from "./login.css"
import { useNavigate } from "react-router-dom";

 const  Login = ()=>{
 let navigate = useNavigate();
return(
   
   <div className="loginbox">
   <form > 
      
      <picture className="loginlogobox"> <img onClick={()=>{ navigate('/')  }} className="loginimage" src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="disneylogo"/></picture>
      
      
      <label>   Log in with your email     </label>
     
     <input className="mail" type="email" placeholder="EMAIL@" name="mail" required></input> <br/>
     
     <input className="pass"  type="password" placeholder="PASSWORD"name="pass"  required></input> <br/>
     
     <button  className="bt-next" type="submit" >CONTINUE </button>
     
     <div className="newdisneybox">
      <h2>New to Disney+?    </h2> 
      
    <h2> <a> Signup </a> </h2>
      
      </div> 
  </form>
  </div>
)


}

export default Login;