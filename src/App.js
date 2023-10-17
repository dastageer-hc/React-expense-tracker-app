// import blob from './assets/blob.svg'
// import classes from  './App.module.css';
// import SignupForm from './components/Signup';
// import LoginForm from './components/LoginForm';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "./components/UI/Card";
import classes from "./App.module.css";
import logo from "./logo192.png";

import { useState, useRef, useReducer } from "react";
import PopUp from "./components/popup/PopUp";

const reducerFunc = (preState, action) => {
  if (action.action === "income") return [...preState, action.payload];
  if (action.action === "expense")
    return [...preState, parseInt(action.payload)];
};

function App() {
  console.log("re rendered");

  const [popup, setPopup] = useState({
    show: false,
    message: "",
  });
  const [transactions, updateTransactions] = useReducer(reducerFunc, []);
  const inputRef = useRef();

  const incomeBtnHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      setPopup({
        show: true,
        message: "Please Enter a number",
      });
      return;
    }
    updateTransactions({
      action: "income",
      payload: parseInt(inputRef.current.value),
    });
    inputRef.current.value = "";
  };

  const expenseBtnHandler = (e) => {
    e.preventDefault();

    if (inputRef.current.value > balance) {
      setPopup({
        show: true,
        message: "Low Balence",
      });
      return;
    }

    if (inputRef.current.value === "") {
      // alert("Please Enter a number");
      setPopup({
        show: true,
        message: "Please Enter a number",
      });
      return;
    }

    updateTransactions({
      action: "expense",
      payload: parseInt(-inputRef.current.value),
    });
    inputRef.current.value = "";
  };

  const transactionList = transactions.map((el, index) => {
    return (
      <li
        className={el < 0 ? classes.expenseListItem : classes.incomeListItem}
        key={index}
      >
        ₹{el}
      </li>
    );
  });
  transactions.forEach((el) => {
    console.log(typeof el);
    console.log(el);
  });

  // pop up handler

  const handlePopUp = () => {
    setPopup({
      show: false,
      message: "",
    });
  };
  // income calc
  const totalIncome = transactions
    .filter((el) => {
      if (el > 0) return el;
    })
    .reduce((acc, el) => {
      return acc + el;
    }, 0);

  //expense calc
  const totalExpense = transactions
    .filter((el) => {
      if (el < 0) return el;
    })
    .reduce((acc, el) => {
      return acc + el;
    }, 0);

  const balance = transactions.reduce((acc, el) => acc + el, 0);

  return (
    <>
      {popup.show && <PopUp message={popup.message} setPopup={handlePopUp} />}
      <Card>
        <aside>
          <h3 className={classes.balance_label}>Balance</h3>
          <h1 className={classes["total-balance"]}>₹{balance}</h1>
        </aside>
        <section className={classes.transaction_container}>
          <aside>
            <h3 className={classes.transaction_label}>Income</h3>
            <h1 className={classes.income}>₹{totalIncome}</h1>
          </aside>
          <aside>
            <h3 className={classes.transaction_label}>expenditure</h3>
            <h1 className={classes.expense}>₹{totalExpense}</h1>
          </aside>
        </section>

        {/* Expense List */}

        {/*  */}

        {/* add expenses */}

        <section className={classes["addTransaction-container"]}>
          <form>
            <div>
              <label>Add Transaction</label>
              <input
                ref={inputRef}
                className={classes.input}
                type="number"
              ></input>
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
            {transactions.length !== 0 ? (
              transactionList
            ) : (
              <p>No transaction to diplay</p>
            )}
          </ul>
        </section>
      </Card>
      <Card>
        <center style={{ color: "white" }}>
          <p>
            Designed By{" "}
            <a
              style={{ textDecoration: "none", color: "yellow" }}
              href="www.instagram.com/dastageer_hc"
            >
              Dastageer HC
            </a>{" "}
            <br /> Made with <br />
            React JS{" "}
            <span>
              <img width="15px" src={logo} />
            </span>
          </p>
        </center>
      </Card>
    </>
  );
}

export default App;
