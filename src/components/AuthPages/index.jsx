import "./authpages.css"
import logo from "./img/logo.png"

export function AuthPages ({children}) {
return (
    <div className="login">
       <div className="login-logo">
          <img
             src={logo}
             alt="MdLockLogin App"
          />
       </div>
       {children}
    </div>
  )  
}