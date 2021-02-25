import React,{ useEffect,useState } from "react";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
// import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
import LORForm from './views/examples/LORForm'

export default function App() {

    var [user,SetUser]=useState({
        first_name:"",
        last_name:"",
    });

    var [token,SetToken]=useState("");



      function LogOut(){
          SetToken("");
      }


// check if already logged in
      useEffect(() => {
        if(localStorage.getItem('token') || null!=null)
        {
          SetToken(localStorage.getItem('token'));

        }
      
      
      }, [])

  useEffect(() => {
      
    //   console.log(`Token ${token}`);
 
      axios.get(`https://dbit-lor.herokuapp.com/api/loggedinuserdetails/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      })
      .then((res) => {
        SetUser(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(error)
      })
    }, [token])




    return (
        <BrowserRouter>
    <Switch>

      <Route path="/admin"   render={(props) => <AdminLayout {...props}  SetToken={SetToken} user={user} token={token} />} />
      <Route path="/admin/lor-request" render={(props) => <LORForm {...props} />} />
      <Route path="/" render={(props) => <AuthLayout {...props }  SetUser={SetUser}  SetToken={SetToken} />} />



        {/* <Route path="/admin/index" render={(props) => <Index {...props} token={token} />} /> */}

      {/* <Redirect from="/" to="/admin/index" user={user}  /> */}
    </Switch>
  </BrowserRouter>
    )
}
