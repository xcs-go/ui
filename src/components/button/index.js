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
import './button.scss'

// 两个中文的正则规则
const twoCNCharRlue = /^[\u4e00-\u9fa5]{2}$/;

/***
 * 该函数用于检测是否是两个字符的中文
 * @param char {string} 需要检测的字符串
 * @returns {boolean} true表示是两个字符的中文。false表示不是
 */
function isTwoCNChar(char) {
    return twoCNCharRlue.test(char);
}
/***
 * 该函数用于插入空格
 * @param child  {string}  检测是否需要插入空格的文本元素
 * @param isNeedInserted  {boolean} 是否需要插入空格
 * @returns 将展示的文字用span标签包裹起来
 */
function insertSpaceAndEllipsis(child, isNeedInserted,isEllipsis,width) {
    const space = isNeedInserted ? ' ' : '';
    if(typeof child === 'string' && isTwoCNChar(child)){
        child = child.split('').join(space);
        if(isEllipsis){
            return <span style={{maxWidth:width + 'px'}}>{child}</span>
        }
        return <span>{child}</span>
    }
    return isEllipsis ?  <span style={{maxWidth:width + 'px'}}>{child}</span> : <span>{child}</span>
}

class Button extends Component{
    static defaultProps = {
        prefixCls:'xcs-btn',
        size:'default',
        text:'正常按钮',
        hover:false,
        onClick:()=>{},
    }
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        if(this.props.disabled) return;
        this.props.onClick && this.props.onClick(e);
    }

    render(){
        const {text,size,className,href,shap,prefixCls,disabled,isActive,ellipsis,icon,hover,maxWidth} = this.props;
        // 判断解构赋值是否成功，如果成功，则使用a标签来模拟按钮，点击跳转到相应的链接
        const ComponentProp =  href ? 'a' : 'button';
        const classes = classNames(prefixCls,className,{
            [`${prefixCls}-${size}`]:size,
            [`${prefixCls}-${shap}`]:shap,
            [`${prefixCls}-disabled`]:disabled,
            [`${prefixCls}-isActive`]:isActive,
            [`${prefixCls}-hover`]:hover,
            [`${prefixCls}-ellipsis`]:ellipsis && maxWidth
        });
        const isNeedInsert = text && text.length >= 2;
        const isEllipsis = maxWidth && ellipsis;
        const renderText = insertSpaceAndEllipsis(text,isNeedInsert,isEllipsis,maxWidth);
        return(
            <ComponentProp className={classes} href={href ? href : undefined} onClick={this.handleClick}>{icon ? icon : renderText}</ComponentProp>
        )
    }
}

Button.propTypes = {
    icon:PropTypes.node,
    text:PropTypes.string,
    size:PropTypes.oneOf(['small','default','large']),
    href:PropTypes.string,
    className:PropTypes.string,
    shap:PropTypes.string,
    disabled:PropTypes.bool,
    isActive:PropTypes.bool,
    onClick:PropTypes.func.isRequired,
    ellipsis:PropTypes.bool,
    hover:PropTypes.bool,
    maxWidth:PropTypes.number
}

export default Button;