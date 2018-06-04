/***
 *  Button按钮需要实现的功能点如下:
 *  1:size；size表示的是按钮的大小，可选值为small.middle,large,如果不传参数的话默认为middle.
 *  2:href;href表示的是点击按钮需要跳转的地址,可选， string ，默认不存在
 *  3:disable;disabled表示当前按钮是否可以点击，可选，Boolean，默认不传为false
 *  4:shap;表示当前按钮的形状，可选值为circle,表示为圆形，默认为带圆角的长方形
 *  5:onClick;点击事件的处理函数
 *  6:ellipsis,maxWidth;表示超过固定宽度的话显示省略号,需要同时传入ellipsis和maxWidth才有效
 *  7:text;按钮展示的文字
 */

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonItem from '../buttonItem';
import './button.scss'

class Button extends Component{
    static defaultProps = {
        prefixCls:'xcs-btn',
        size:'default',
        disabled:false,
        text:'default',
        onClick:()=>{}
    }
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this.props.onClick);
    }
    componentWillMount(){
        console.log(11);
    }
    componentDidMount(){}
    render(){
        const {text,size,className,href,shap,prefixCls,disabled,ellipsis,maxWidth,...others} = this.props;
        // 判断解构赋值是否成功，如果成功，则使用a标签来模拟按钮，点击跳转到相应的链接
        const ComponentProp =  href ? 'a' : 'button';
        const classes = classNames(prefixCls,className,{
            [`${prefixCls}-${size}`]:size,
            [`${prefixCls}-${shap}`]:shap,
            [`${prefixCls}-disabled`]:disabled,
            [`${prefixCls}-ellipsis`]:ellipsis && maxWidth
        });
        return(
            <ComponentProp className={classes} onClick={this.handleClick}>{text}</ComponentProp>
        )
    }
}

Button.propTypes = {
    text:PropTypes.string,
    size:PropTypes.oneOf(['small','default','large']),
    href:PropTypes.string,
    shap:PropTypes.string,
    disabled:PropTypes.bool,
    onClick:PropTypes.func.isRequired,
    ellipsis:PropTypes.bool,
    maxWidth:PropTypes.number
}

export default Button;