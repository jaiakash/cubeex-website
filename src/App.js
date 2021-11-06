import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home"
 
function App() {
  return (
   <Router>
   <Switch>
     <Route exact path ="/"  component={Home} />
     <Route exact path ="/user/:id"  component={Home} />
     </Switch>
   </Router>
  );
}

export default App;
