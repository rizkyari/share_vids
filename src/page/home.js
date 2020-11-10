import React,{Component} from 'react';
import Navbar from './../component/navbar';
import{ withRouter} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <p>This is Home</p>
            </div>
        )
    }
}

export default withRouter(Home);