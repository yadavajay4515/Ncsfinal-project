import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Navbar1 from "./component/Navbar1";
import "./App.css";
import Registration from "./component/Registration";
// import FormMessage from "./component/FormMessage";

export default class App extends React.Component {



  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar1 />
            
          <Routes>
            <Route
              path="/login"
              element={
                <Login />
              }
            />
            <Route
              path="/addstudent"
              element={
                <Registration />
              }
            />
          </Routes>
        </BrowserRouter>

        {/* <Router>
          <Navbar1 mode={this.state.mode} toggle={this.toggleMode}/>              
          <Switch>
          
            <Route exact path="/login" component={() => <Login  mode={this.state.mode}/> }  />  
             <Route exact path="/addstudent" component={() => <Registration  mode={this.state.mode}/>} />
           
          </Switch>
        </Router> */}
      </>
    );
  }
}
