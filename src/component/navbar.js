import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from './../redux/action/index';

class Navbar extends Component {
  render() {
    const { status, user, handleLogout } = this.props;
    return (
      <nav
        className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
        id="main-nav"
      >
        <div className="container">
          <a href="index.html" className="navbar-brand">
            You'll Never Walk Alone
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li> */}
            {status.input ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <p style={{ marginTop: "9px", color: "#fff", marginRight:'30px' }}>
                    Hi,{user.user}
                  </p>
                </li>
                <li className="nav-item">
                  <Link to="/share" className="nav-link">
                    Share Movie
                  </Link>
                </li>
                <li className="nav-item">
                  <button type='button'  className='btn btn-primary' onClick={()=> handleLogout(false)}>
                    Log out
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.login,
    user: state.register,
  };
};

function mapDispatchToProps(dispatch){
    return{
        handleLogout : (input) => dispatch(action.postLogin(input)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
