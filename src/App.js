
// import blob from './assets/blob.svg'
// import classes from  './App.module.css';
// import SignupForm from './components/Signup';
// import LoginForm from './components/LoginForm';

import Card from './components/UI/Card';
import classes from'./App.module.css'
import logo from './logo192.png'

import {useState, useRef, useReducer} from 'react'


const reducerFunc =(preState, action)=>{
  if(action.action==='income')

    return [...preState, action.payload ]
  if(action.action==='expense')
    return [...preState, parseInt(action.payload)]

}

function App() {
  console.log('re rendered');

  const [transactions, updateTransactions] = useReducer(reducerFunc, []);
  const inputRef = useRef();

  const incomeBtnHandler = (e)=>{
    e.preventDefault()
    if(inputRef.current.value===''){
      alert('Please Enter a number')
      return
    }
    updateTransactions({action: 'income', payload: parseInt(inputRef.current.value)});
    inputRef.current.value = ''
  }
  
  const expenseBtnHandler= (e)=>{
    e.preventDefault()
 
    if(inputRef.current.value===''){
      alert('Please Enter a number')
      return
    }
     
      updateTransactions({action: 'expense', payload: parseInt(inputRef.current.value)});
    inputRef.current.value = ''
  }

  const transactionList = transactions.map((el, index)=>{return<li className={el<0?classes.expenseListItem : classes.incomeListItem}key={index}>₹{el}</li>})
  transactions.forEach((el)=>{console.log(typeof el); console.log(el);});

// income calc
  const totalIncome = transactions.filter((el)=>{
    if(el>0)
    return el;
  }).reduce((acc, el)=>{return acc+el},0)

  //expense calc
  const totalExpense = transactions.filter((el)=>{
    if(el<0)
    return el;
  }).reduce((acc, el)=>{return acc+el},0)

const balance = transactions.reduce((acc,el)=>acc+el,0)

  return(
    <>
      <Card>

        <aside>
          <h3 className={classes.balance_label}>Balance</h3>
          <h1 className={classes['total-balance']}>₹{balance}</h1>
        </aside>

        <section className={classes.transaction_container}>
          <aside>
          <h3 className={classes.transaction_label}>Income</h3>
          <h1 className={classes.income}>₹{totalIncome}</h1>
          </aside>
          <aside>
          <h3 className={classes.transaction_label}>Expenses</h3>
          <h1 className={classes.expense}>₹{totalExpense}</h1>
          </aside>
        </section>

        {/* Expense List */}
        
        {/*  */}

        {/* add expenses */}

        <section className={classes['addTransaction-container']}>
          <form>
            <div>
            <label>Add Transaction</label>
            <input ref={inputRef}className={classes.input} type='number'></input>
            </div>
            <div>
            <button onClick={incomeBtnHandler}>Income</button>
            <button onClick={expenseBtnHandler}>expense</button>
            </div>
          </form>
        </section>
      
      </Card>
      <Card>
      <section className={classes.transaction_list}>
          <h3>Transction History</h3>
          <ul>
            {transactions.length !==0 ? transactionList : <p>No transaction to diplay</p>}
          </ul>
        </section>
      </Card>
      <Card>
        <center style={{color:'white'}}><p>Designed By <a style={{textDecoration: 'none', color: "yellow"}}href='www.instagram.com/dastageer_hc'>Dastageer HC</a> <br/> Made with <br/>React JS <span><img width='15px'src={logo}/></span></p></center>
      </Card>
    </>
  )
}

export default App;






















// -----------------------------loginForm-------------

  // const [users, CreateUser] = useState([]);
  // const [isRegisterd, setisRegisterd ] = useState(false);
  // const [loginFrom, setLoginForm] = useState(false);

  // const AddUsser=(user)=>{
  //   CreateUser([...users, user]);
  //   // console.log(users)
  // }

  // const onLogin=()=>{
  //   setLoginForm(true);
  //   setisRegisterd(true)
  // }
  // return (<>
  //       {!isRegisterd && <SignupForm onLogin={onLogin} onCreateUser= {AddUsser}/>}
  //       {/* {isRegisterd } */}

  //       {loginFrom && <LoginForm users={users}/>}
  //       );
        
        
  























// import Particles from "react-tsparticles";

// const App = () => {
//   const particlesInit = (main) => {
//     console.log(main);

//     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   };

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };
//   return (
//     <div>
//       <form>
//         <lable>TT</lable>
//       </form>
//       <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         background: {
//           color: {
//             value: "#0d47a1",
//           },
//         },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             resize: true,
//           },
//           modes: {
//             bubble: {
//               distance: 100,
//               duration: 2,
//               opacity: 0.8,
//               size: 40,
//             },
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#ffffff",
//           },
//           links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outMode: "bounce",
//             random: false,
//             speed: 6,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             random: true,
//             value: 5,
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//     </div>

//   );
// };

// export default App