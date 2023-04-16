import React,{useEffect} from"react"
import './App.css';
import Headupar from  './Headupar';
import Home from './Home';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";







function App() {
  const [ dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    
    <div className="app">
    <Router>
        <Routes>
        
      <Route path="/Checkout" element={[<Checkout/>,<h1> </h1>]}/>
      <Route path="/" element={[<Headupar/>,<Home/>]}/>
      <Route path="/login" element={[<Login/>]}/>
   
       

        

      
        </Routes>
        
      
       </Router>
        </div> 
 
      
      
    
   
  );
}

export default App;
