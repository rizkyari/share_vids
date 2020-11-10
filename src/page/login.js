import React, { Component } from "react";
import { connect } from 'react-redux';
import{Link,withRouter} from 'react-router-dom';
import * as action from './../redux/action/index';
import history from './../component/history';

class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            email:false,
            password:false,
            message:false
        }
    }

    handleSubmit(e){
        const{email,password} = this.state;
        const{userReducer} = this.props;
        e.preventDefault();
        if(email === userReducer.email && password === userReducer.password){
            this.props.handleLogin(true);
            history.push('/');
        }else{
            this.setState({message:true});
        }
    }

  render() {
    return (
      <div className="card bg-light">
        <article className="card-body mx-auto">
          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <p className="text-center">Get started with your free account</p>
          <form onSubmit={(e) => this.handleSubmit(e)}>
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
                onChange={(e) => this.setState({ email: e.target.value })}
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
                onChange={(e) => this.setState({ password: e.target.value })}
                required
              />
            </div>
            {this.state.message ? <div>Wrong username or password</div> : null}
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                {" "}
                Create Account{" "}
              </button>
            </div>
            <p className="text-center">
              Don't have an account? <Link to="/register">Register</Link>{" "}
            </p>
          </form>
        </article>
      </div>
    );
  }
}

const mapStateToProps = state =>{
    return{
         userReducer:state.register,
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleLogin: (input) => dispatch(action.postLogin(input)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));
