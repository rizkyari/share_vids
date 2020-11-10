import React, { Component } from "react";
import { connect } from 'react-redux';
import * as action from './../redux/action/index';
import{Link, withRouter} from 'react-router-dom';
import history from './../component/history';

class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            username:false,
            email:false,
            password:false,
            repeat:false,
            message:false
        }
    }

  

  handleSubmit(e){
      e.preventDefault();
      const{username,email,password} = this.state;
      console.log(this.state.username, this.state.email);
      if(this.state.password === this.state.repeat){
        this.props.handleRegister(username,email,password);
        history.push('/login');
        
      }else{
          console.log('password beda');
          this.setState({message:true})
      }
  }

  render() {
    return (
      <div className="card bg-light">
        <article className="card-body mx-auto" >
          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <p className="text-center">Get started with your free account</p>
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user"></i>{" "}
                </span>
              </div>
              <input
                name="username"
                className="form-control"
                placeholder="Full name"
                type="text"
                onChange={(e)=>this.setState({username:e.target.value})}
                required
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-envelope"></i>{" "}
                </span>
              </div>
              <input
                name="email"
                className="form-control"
                placeholder="Email address"
                type="email"
                onChange={(e)=>this.setState({email:e.target.value})}
                required
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Create password"
                type="password"
                onChange={(e)=>this.setState({password:e.target.value})}
                required
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Repeat password"
                type="password"
                onChange={(e)=>this.setState({repeat:e.target.value})}
                required
              />
            </div>
            {this.state.message ? (<div>Password doesn't match</div>) : null}
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" >
                {" "}
                Create Account{" "}
              </button>
            </div>
            <p className="text-center">
              Have an account? <Link to="/login">Log In</Link>{" "}
            </p>
          </form>
        </article>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
        handleRegister: (user,email,password) => dispatch(action.postRegister(user,email,password)),
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Register));