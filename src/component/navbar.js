import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
        id="main-nav"
      >
        <div class="container">
          <a href="index.html" class="navbar-brand">
            You'll Never Walk Alone
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#home" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <Link to="/register" class="nav-link">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <a href="#create-head-section" class="nav-link">
                  Create
                </a>
              </li>
              <li class="nav-item">
                <a href="#share-head-section" class="nav-link">
                  Share
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
