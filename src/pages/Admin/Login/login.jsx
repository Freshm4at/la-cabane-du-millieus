
import React, { Component } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";
import { images } from "../../../constants";
import axios from "axios";
class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
        islogged: false,
        loginParams: {
        user_id: "",
        user_password: ""
        },
        token:'',
        auth:false
    };
    }
    handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
        loginParams: loginParamsNew
    });
    };
    
    login = event => {
    const Base_URL = process.env.REACT_APP_ROUTE
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    axios.post(`${Base_URL}/login`, {
        user:user_id,password:user_password
    })
    .then(res => {
      console.log('Axios response: ', res)
      if(res.data.auth==='true'){
        this.setState({
            token: res.data.token
            });
        this.setState({
            auth: true
            });
      }
    })
    if (this.state.auth===true) {
        console.log('auth true')
        localStorage.setItem("token", this.state.token);
        this.setState({
        islogged: true
        });
    }
    event.preventDefault();
    };
    render() {
    if (this.state.islogged===true) {
        return <Navigate to="/YWRtaW4gcGFuZWwgZm9yIHN1cGVyIGRldiBsb2wuIFBTOmpzIHN1Y2tz" />;
    }
    return (
        <div className="app__login">
            <img src={images.fishPhoto} alt='img_fish' style={{height:"300px",width:'100%'}}></img>
            <div className="flex__center">
            <form onSubmit={this.login} className="form-signin">
                <h1 className="headtext__cormorant">Connexion</h1>
                    <div className="app__login-form app__wrapper_info flex__center">
                        <input
                        type="text"
                        name="user_id"
                        onChange={this.handleFormChange}
                        placeholder="Utilisateur"
                        />
                        <input
                        type="password"
                        name="user_password"
                        onChange={this.handleFormChange}
                        placeholder="Mot de passe"
                        />
                        <input type="submit" value="Login" />
                    </div>
            </form>
            </div>
        </div>
    );
    }
}
export default Login;