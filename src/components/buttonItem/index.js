/**
 *
 * ButtonItem
 * size:small/normal/middle/large
 * color:默认的颜色是#f83橙色
 * text:按钮显示的文字内容
 * href:需要跳转的页面，该参数会打开一个新的页面
 * */

import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './buttonItem.scss';


class ButtonItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            size:this.props.size ? this.props.size : 'normal',
            type:this.props.type ? this.props.type : 'primary',
            color:this.props.color ? this.props.color : '#f83',
            text:this.props.text ? this.props.text : 'button',
        }
    }
    handleClick(name){
        if(this.props.fn){
            this.props.fn(name);
        }
    }
    componentDidMount(){
        console.log(this.props.fn);
    }
    render(){
        const {href} = this.props;
        return (
            <div>
                <button className="button__item" type={this.state.type} style={{backgroundColor:this.state.color}} onClick={()=>this.handleClick(this.state.text)}>
                    {href ? <a href={`${href}`} target="_blank">{this.state.text}</a> : this.state.text}
                    </button>
            </div>
        )
    }
}

ButtonItem.propTypes = {
    size:PropTypes.string,
    type:PropTypes.string,
    color:PropTypes.string,
    //fn:PropTypes.function
}

export default ButtonItem;