import React,{Component} from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

// 引入iconfont样式
import '../../assets/iconfont/icon-font/iconfont.css';
import './icon.scss';


export default class Icon extends Component{
    static defaultProps = {
        prefixCls:'xcs-icon',
        iconClass:'iconfont',
        className:'',
        type:'icon-search',
        size:'16px'
    }
    constructor(props){
        super(props);
    }
    render(){
        const {prefixCls,iconClass,type,size,color,className} = this.props;
        const style = {};
        const newSize = parseInt(size);
        style.fontSize = newSize ? `${newSize}px` : '16px';
        style.color = color ? color.color && color.color : null;
        const classnames = classNames(prefixCls,iconClass,className,type,{});
        return (
            <i className={classnames} style={style}></i>
        )
    }
}

Icon.propTypes = {
    className:Proptypes.string,
    type:Proptypes.string.isRequired,
    size:Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number
    ]),
    color:Proptypes.object  // {color:'#f00'}
}