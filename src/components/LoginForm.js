import classes from './Signup.module.css';
import {useRef} from 'react'

const LoginForm =(props)=>{
  const userName = useRef();
  const pass = useRef();

const logInhandler = ()=>{
  
}
  return ( 
      <form className={`${ classes.form} ${classes.logInForm}`}>
        <label>
          Enter UserName
        </label>
        <input ref={userName}type='text'>
        </input>
        <label>
          Enter Password
        </label>
        <input ref={pass}type='password'>
        </input>
        <div className={classes.buttonContainer}>

        <button onClick={logInhandler}>Log in</button>
        </div>
      </form>
  
  );
}
export default LoginForm;