import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";
import SideBarItem from '../sideBarItem';
import emitter from '../../util'
import './sidebar.scss';

class SideBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            uiComponents:['button','Input','icon','dialog','alert','loading']
        }
        this.handleClickUiComponent = this.handleClickUiComponent.bind(this);
        this.handleClickLogo = this.handleClickLogo.bind(this);
    }
    handleClickUiComponent(name){
        emitter.emit('click',name)
    }
    handleClickLogo(){
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="sidebar-container">
                <div>
                    <div className="side-bar-logo" onClick={this.handleClickLogo}>
                    </div>
                    <div>
                        <ul className="ui-list-wrap">
                            {
                                this.state.uiComponents.map((item,index)=>{
                                    return <li key={index} className="ui-list-item">
                                        <SideBarItem key={index} uiName = {item} click={this.handleClickUiComponent} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SideBar);