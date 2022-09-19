import React, {Component} from "react";

class UserRegister extends Component {
  state = {
    register: {}
  };

  handleChange(e, name) {
    this.setState({
      register: {
        ...this.state.register,
        [name]: e.target.value
      }
    });
  }

  registerUser() {
    console.log("this.state", this.state)
    const { register } = this.state;
    if(!register.email) {
      alert("please enter email")
    } else if (!register.password) {
      alert("please enter password")
    } else if (!register.confirmPassword) {
      alert("please enter confirm password")
    } else if (register.password.trim() !== register.confirmPassword.trim()) {
      alert("Password doesnt match")
    } else {
      alert("success")
    }
  }

  render() {
    const {register} = this.state;
    console.log("register", register)
    return(
      <center>
        <h1>Register</h1>
        <input placeholder="Enter Email" value={register.email ?? ""} onChange={(e)=>this.handleChange(e, "email")} /><br /><br />
        <input placeholder="Enter Password" value={register.password ?? ""} onChange={(e)=>this.handleChange(e, "password")} /><br /><br />
        <input placeholder="Enter Confirm Password" value={register.confirmPassword ?? ""} onChange={(e)=>this.handleChange(e, "confirmPassword")} /><br /><br />
        <button onClick={this.registerUser.bind(this)}>Register</button>
      </center>
    )
  }
}

export default UserRegister;