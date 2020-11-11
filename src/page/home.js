import React, { Component } from "react";
import Navbar from "./../component/navbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as action from './../redux/action/index';

class Home extends Component {
  render() {
    const { userVideo, thumbnail,handleDelete } = this.props;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div
            className=" justify-content-center "
            style={{ marginTop: "100px" }}
          >
            <div style={{ textAlign: "center" }}>
              {userVideo.length < 1 ? (
                <div>You don't have any video to share</div>
              ) : (
                <div>
                  {userVideo.map((item, i) => (
                    <div
                      key={i}
                      style={{ border: "1px solid black", borderRadius: "5px", margin: "15px" }}
                    >
                      <div style={{ padding: "5px" }}>
                        <div style={{ display: "inline-block" }}>
                          <img
                            src={thumbnail[i].high.url}
                            style={{ height: "100px", width: "100px" }}
                            alt="thumbnail video"
                          />
                        </div>
                        <div style={{ display: "inline-block" }}>
                          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                            {item.snippet.title}
                          </p>
                          <div>{item.snippet.description}</div>
                        </div>
                        <div>
                          <button style={{marginLeft:'5px',marginRight:'5px'}} type='button'  className='btn btn-primary'>
                            <a
                              href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{color:'#fff', textDecoration:'none'}}
                            >
                              Watch It
                            </a>
                          </button>
                          <button 
                          style={{marginLeft:'5px',marginRight:'5px'}} 
                          type='button'  
                          className='btn btn-danger'
                          onClick={()=>handleDelete(i)}
                          >
                              Delete
                        </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userVideo: state.video,
    thumbnail: state.thumbnail,
  };
};

function mapDispatchToProps(dispatch){
return{
    handleDelete: (index) => dispatch(action.deleteVideo(index)),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
