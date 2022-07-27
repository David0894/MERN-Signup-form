import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'; 

class App extends React.Component{

    constructor(){
        super()
        this.state={
            firstName:"",
            userName:"",
            emailId:"",
            password:""
        }
        this.changeFirstName =this.changeFirstName.bind(this)
        this.changeUserName =this.changeUserName.bind(this)
        this.changeEmail =this.changeEmail.bind(this)
        this.changePassword =this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }

    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            emailId:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const register ={
            firstName: this.state.firstName,
            userName: this.state.userName,
            emailId: this.state.emailId,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signup', register)
        .then(response => console.log(response.data))

        this.setState({
            firstName:"",
            userName:"",
            emailId:"",
            password:""
        })
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text" 
                            placeholder="Full Name"
                            onChange={this.changeFirstName}
                            value={this.state.firstName} 
                            className="form-control form-group"></input>

                            <input type="text"
                             placeholder="User Name"
                             onChange={this.changeUserName}
                             value={this.state.userName}
                             className="form-control form-group"></input>

                            <input type="text"
                             placeholder="E-mail"
                             onChange={this.changeEmail}
                             value={this.state.emailId}
                             className="form-control form-group"></input>

                            <input type="password"
                             placeholder="password"
                             onChange={this.changePassword}
                             value={this.state.password}
                             className="form-control form-group"></input>

                             <input type="submit" className="btn btn-primary btn-block form-control form-group" value="Submit"></input>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;