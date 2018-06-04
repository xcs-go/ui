import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class SideBarItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(name){
        if(this.props.click){
            this.props.click(name)
        }
    }
    render(){
        return(
            <div className="sidebar-item">
                <Link to={`/${this.props.uiName}`}><span>{this.props.uiName}</span></Link>
            </div>
        )
    }
}

export default SideBarItem;