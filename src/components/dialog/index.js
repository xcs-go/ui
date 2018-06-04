import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ButtonItem from '../buttonItem';

import './dialog.scss';

class Dialog extends Component{
    constructor(props){
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.sureFn = this.sureFn.bind(this);
        this.closeFn = this.closeFn.bind(this);
        this.state={
            title:this.props.title ? this.props.title : '标题',
            ok:this.props.ok ? this.props.ok : '确定',
            cancel:this.props.cancel ? this.props.cancel : '取消',
            text:this.props.text ? this.props.text : '这里是dialog提示文字框',
            modalState:this.props.modalState ? this.props.modalState : false
        }
    }
    closeModal(){
        this.setState({
            modalState:!this.state.modalState
        })
    }
    sureFn(name){
        if(name === '确定'){
            alert('这里可以执行确定的业务逻辑');
        }
        this.setState({
            modalState:!this.state.modalState
        })
    }
    closeFn(name){
        if(name === '取消'){
            if(this.props.fn){
                this.props.fn()
            }else {
                this.setState({
                    modalState:!this.state.modalState
                })
            }
        }
    }
    render(){
        const isShowModal = this.state.modalState ? 'hide-modal' : '';
        return(
            <div className="dialog">
                <div className={`xcs__dialog ${isShowModal}`}>
                    <div className="xcs__dialog__modal">
                        <div className="xcs__dialog__content">
                            <div className="xcs__dialog__header">
                                <div className="xcs__dialog__title">{this.state.title}</div>
                                <span className="xcs__dialog__close" onClick={this.closeModal}></span>
                            </div>
                            <div className="xcs__dialog__wrap">
                                <p>{this.state.text}</p>
                            </div>
                            <div className="xcs__dialog__bottom">
                                <ButtonItem text={this.state.ok} className="sure" fn = {this.sureFn}/>
                                <ButtonItem text={this.state.cancel} className="cancel" fn = {this.closeFn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dialog.props = {
    title:PropTypes.string,
    ok:PropTypes.string,
    cancel:PropTypes.string,
    fn:PropTypes.function
}

export default Dialog;