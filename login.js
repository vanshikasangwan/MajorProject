import React from "react";
import "./login.css";
 
function Login() {
    return ( 
        
        <div style={{display: "flex", height: "550px"}} className="App">
        <div style={{flex: 6, background: "#ff0000"}}>
          <img className='img-fill' src="https://t4.ftcdn.net/jpg/06/28/66/35/240_F_628663555_iQh85QYcflRtYWxuewfriZzxwhgy1LJk.jpg"/>
        </div>
        <div style={{flex:  4, background: "white"}}>
          <div className='img-parent'>
          <img className='img-contain' src="https://www.123shoot.com/wp-content/uploads/2022/03/20220321_RPS_AutismBlog_Spectrum-1024x489.png"/>
          </div>
          <div className='test'>
            <label>Autism Spectrum Disorder Test </label>
            
          </div>
          <div className='user'>
          <label for="username"></label>
        <input className='input' type="username" id="username" name="username" placeholder="username" 
                value={this.state.username}
                onChange={this.handleUsernameChange}></input>
          </div>
          <div className='password'>
          <label for="password"></label>
        <input className='input' type="password" id="password" name="password" placeholder="password" 
                value={this.state.password}
                onChange={this.handlePasswordChange}></input>
          </div>
          <div className='check'>
          <input type="checkbox" id="check" name="check" value="yes"/>
            <label for="check"> I Agree To Get Updates On Whatsapp</label>
          </div>
          <div>
          <button  className='login' type="button" onClick={this.handleLogin}>LOGIN</button>
          </div>
          <div className='button'>
            <a href='gmail.com'>Forgot password?</a>
          </div>
        </div>
      </div>

    );
}
 
export default Login;