import React,{ useEffect,useState } from "react";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

export default function App() {

    var [user,SetUser]=useState({
        first_name:"",
        last_name:"",
    });

    var [token,SetToken]=useState("");

    function GetUserToken(){

        const article = { username:"hayden",password:"XYZ@1234" };
        const headers = { 
            // 'Authorization': 'Bearer my-token',
            // 'My-Custom-Header': 'foobar'
        };
        axios.post('https://dbit-lor.herokuapp.com/token/login/', article, { headers })
        .then(
            (response)=>{
                SetToken(response.data.auth_token);
            }  
            );
        
      }

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



      GetUserToken();

    return (
        <BrowserRouter>
    <Switch>
      <Route path="/admin"   render={(props) => <AdminLayout {...props}  user={user}/>} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" user={user} />
    </Switch>
  </BrowserRouter>
    )
}
