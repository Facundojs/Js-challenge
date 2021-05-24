import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewOperation from './pages/NewOperation'
import NotFound from './pages/NotFound'
import ModifyOperation from './components/ModifyOperation'
export default function App() {
  return (
    <Router>
      <div id="app-div-container" className="container-fluid p-0 text-center">
        <Header />
        <div className="container-xl min-vh-100">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/newoperation" component={NewOperation}/>
              <Route path="/modifyoperation/:id" component={ModifyOperation}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}