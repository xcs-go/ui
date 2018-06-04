import React,{Component} from 'react';
import {BrowserRouter as Router, Route,withRouter} from 'react-router-dom';
import Button from '../button';
import MainHome from '../mainHome';
import emitter from '../../util';
import './mainWrap.scss';

class MainWrap extends Component{
    constructor(props){
        super(props);
        this.state= {
            componentName: ''
        }

    }
    componentDidMount(){
        this.eventEmitter = emitter.addListener('click',name=>{this.setState({componentName:name})})
    }
    render(){
        return(
            <div className="main-wrap">
            </div>
        )
    }
}
export default MainWrap;