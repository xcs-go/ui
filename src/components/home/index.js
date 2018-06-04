import React,{Component} from 'react';
import SideBar from '../sideBar';
import MainWrap from '../mainWrap';
import './home.scss'

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="home">
                <SideBar/>
            </div>
        )
    }
}

export default Home