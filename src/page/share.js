import React, { Component } from "react";
import Navbar from "./../component/navbar";
import { connect } from 'react-redux';
import * as action from './../redux/action/index';

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: false,
      id: false,
    };
  }

  filters(url) {
    // let url = "https://www.youtube.com/watch?v=e5EIB=DNdfi0";
    let res = url.substring(url.indexOf("="));
    let resp = res.replace(/&.*=/, "");
    let filt = resp.replace(/=/, "");
    console.log(this.state.id);
    this.setState({ id: filt });
  }

  handleSubmit(e) {
    e.preventDefault();
    // if (this.state.link !== false) {
    //   this.filters(this.state.link);
    // }
    this.props.handlePost(this.state.id)
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div
            className=" justify-content-center "
            style={{ marginTop: "200px" }}
          >
            <div style={{ textAlign: "center" }}>
              <h1>Share your favorite youtube video</h1>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group input-group">
                  <input
                    name="share"
                    className="form-control"
                    placeholder="input link here"
                    type="text"
                    onChange={(e) => this.filters(e.target.value )}
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary ">
                    Submit Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
        handlePost : (video) => dispatch(action.postVideo(video))
    }
}

export default connect(null,mapDispatchToProps)(Share);
