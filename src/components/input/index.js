/***
 * 输入框的类型：大输入框、正常输入框、小型输入框
 * 输入框的状态:正常状态、hover状态、focus状态、空错误状态、输入内容错误状态、禁止输入(disable)状态
 */

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button';
import './input.scss';

export default class Input extends Component{
    static defaultProps = {
        prefixCls:'xcs-input',
        type:'text',
        size:'default',
        maxLength:12,
        errorState:false,
        isDisable:false,
        searchBtn:true,
        //width:200,
       // errorText:'错误提示',
        placeholder:'请输入内容',
        isAutoFocus:false,
        onChange:v => {},
        onKeyDown:v=>{},
        onSearch:v=>{}
    }
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.input = React.createRef();
        this.state = {
            value:props.value || ''
        }
    }

    handleClick(e){
        const {onChange} = this.props;
        const value = e.target.value;
        this.setState({
            value:value
        });
        onChange && onChange(value);
    }

    handleKeyDown(e){
        const keyCode = e.keyCode || e.which;
        const {onKeyDown} = this.props;
        const value = e.target.value;
        if (!value) return;
        this.setState({
            value:value
        });
        keyCode === 13 && onKeyDown && onKeyDown(value);
    }

    handleSearch(){
        const {onSearch} = this.props;
        if(!this.input.current.defaultValue) return;
        this.setState({
            value:this.input.current.defaultValue
        })
        onSearch && onSearch(this.input.current.defaultValue);
    }

   /* componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }*/

    render(){
        const {prefixCls,className,type,size,placeholder,maxLength,errorState,isDisable,isAutoFocus,searchBtn,width,errorText,searchBtnText,...other} = this.props;
        const classess = classNames(prefixCls,className,{
            [`${prefixCls}-${size}`]:size,
            [`${prefixCls}-disabled`]:isDisable
        });
        const wrapClass = classNames({
            [`${prefixCls}-wrapper`]:true,
            [`${prefixCls}-error-state`]:errorState,
            [`${prefixCls}-disabled`]:isDisable
        })
        const style = {width:`${width}px`};
        return(
            <div className={wrapClass}>
                <input type={type}
                       maxLength={maxLength}
                       className={classess}
                       disabled={isDisable}
                       placeholder={placeholder}
                       autoFocus={isAutoFocus}
                       value={this.state.value}
                       onChange={this.handleClick}
                       onKeyDown={this.handleKeyDown}
                       style={style}
                       ref={this.input} />
                {searchBtn ? <Button text={searchBtnText} disabled={isDisable} onClick={this.handleSearch} /> : null}
                {errorState && errorText ? <div><span className={`${prefixCls}-error-tip`}>{errorText}</span></div>: null}
            </div>
        )
    }
}

Input.propTypes = {
    type:PropTypes.string,
    size:PropTypes.oneOf(['small','default','large']),
    placeholder:PropTypes.string,  // 提示文案
    width:PropTypes.number, // 用户自定义宽度
    isDisable:PropTypes.bool,
    addLeftIcon:PropTypes.node,
    addRightIcon:PropTypes.node,
    searchBtn:PropTypes.bool,
    searchBtnText:PropTypes.string,
    isAutoFocus:PropTypes.bool,  // 是否自动获取焦点
    value:PropTypes.any,
    maxLength:PropTypes.number,
    errorState:PropTypes.bool,
    errorText:PropTypes.string,
    onKeyDown:PropTypes.func,
    onChange:PropTypes.func,
    onSearch:PropTypes.func
}