import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import head from './head.js';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    //will only run once when app component in loaded.
    auth.onAuthStateChanged(
      authUser => {
        console.log('THIS USER IS :',authUser);

        if(authUser){
          //user just logged in/ user was logged in
          dispatch(
            {
              type: 'SET_USER',
              user: authUser
            }
          )

        }
        else{
          //user logged out
          dispatch(
            {
              type: 'SET_USER',
              user: null
            }
          )
        }
      }
    )

  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
                <Login />
              </Route>
          <Route path="/checkpoint">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <head />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
