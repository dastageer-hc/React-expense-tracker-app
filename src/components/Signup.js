
import classes from './Signup.module.css'
import {useRef, useState} from 'react'

const SignupForm = (props)=>{
  const userNameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [invalidInput, setInvalidInput] = useState(false);


  const formSubmitHandler = (e)=>{
    e.preventDefault();
    if(userNameRef.current.value ==='' || passwordRef.current.value === '' || confirmPasswordRef.current.value ===''){
      setInvalidInput(true);
      return
    }
    
    setInvalidInput(false);
    const NewUser = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value
    }
    props.onCreateUser(NewUser)
    userNameRef.current.value= '';
    passwordRef.current.value= '';
    confirmPasswordRef.current.value= '';

  }

  return(
    <form className={classes.form}>
      <label>Create Username</label>
      <input ref={userNameRef}type='text'></input>

      <label>Enter Password</label>
      <input ref={passwordRef} type='password'></input>

      <label>Confirm Password</label>
      <input ref= {confirmPasswordRef}type='password'></input>

      <div className={classes.buttonContainer}>
      <button onClick={formSubmitHandler}>Create Account</button>
      <button onClick={props.onLogin}>Log in</button>
      </div>
      {invalidInput && <center><p style={{color: 'red'}}>Please Fill the form with correct details</p></center>}
    </form>
  )
}
export default SignupForm;