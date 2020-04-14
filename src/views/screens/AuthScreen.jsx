import React from 'react'

class AuthScreen extends React.Component{

    state = {
        // arrData: [],
        arrUsername: [],
        arrPass : [],
        username : "",
        password : "",
        confirmPass : "",
        loginUsername : "",
        loginPass : "",
        userLogin: ""
    }

    
    render(){
        const {username, password, confirmPass, loginUsername, loginPass, userLogin} = this.state
        const inputHandler = (e, field) => {
            this.setState({[field]: e.target.value})
            
        }

        const registerHandler = () => {
            if(!(username && password && confirmPass)){
                alert("fields tidak boleh ada yang kosong")
            } else if (password !== confirmPass){
                alert("password tidak sesuai")
            } else {
                // this.setState({arrData : this.state.arrData.concat({username : username, password: password})})
                this.setState({arrUsername : this.state.arrUsername.concat(username), arrPass : this.state.arrPass.concat(password)})
                alert('berhasil mendaftar')
                this.setState({username: "", password: "", confirmPass: ""})
            }   
        }
        
        const loginHandler = () => {
            // this.state.arrData.map((val) => (val.username == loginUsername) ? alert('masuk') : alert("tidak"))
            let usernameIndex = this.state.arrUsername.indexOf(loginUsername)
            console.log(usernameIndex)
            if(!(loginUsername && loginPass)){
                alert("fields tidak boleh ada yang kosong")
            } else if((usernameIndex !== -1) && (this.state.arrPass[usernameIndex] == loginPass)){
                this.setState({userLogin: loginUsername, loginUsername: "", loginPass: ""})
            } else{
                alert("cek kembali username dan password anda")
            }
        }

        return(
            <div className="container ">
                <h1>Auth Screen</h1>
                <div className="border p-5 d-inline-block" style={{width: "350px"}}>
                    <h3>Register</h3>
                    <input className="form-control m-1" type="text" value={username} placeholder="Username" onChange ={(e)=> inputHandler(e, "username")}/>
                    <input className="form-control m-1" type="text" value={password} placeholder="Password"onChange ={(e)=> inputHandler(e, "password")}/>
                    <input className="form-control m-1" type="text" value={confirmPass} placeholder="Repeat Password" onChange ={(e)=> inputHandler(e, "confirmPass")}/>
                    <input className="btn btn-primary mt-2" type="button" value="Register" onClick ={registerHandler}/>
                </div>
                <br/>
                <div className="border p-5 d-inline-block" style={{width: "350px"}}>
                    <h3>Login</h3>
                    <input className="form-control m-1" type="text" value={loginUsername} placeholder="Username" onChange ={(e)=> inputHandler(e, "loginUsername")}/>
                    <input className="form-control m-1" type="text" value={loginPass} placeholder="Password" onChange ={(e)=> inputHandler(e, "loginPass")}/>
                    <input className="btn btn-primary mt-2" type="button" value="Login" onClick={loginHandler}/>
                </div>
                {
                    userLogin > 0 ?
                    <h2>Welcome {userLogin}</h2>
                    : null 
                }
            </div>
        )
    }
}

export default AuthScreen;