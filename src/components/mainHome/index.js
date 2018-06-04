import React,{Component} from 'react';

class MainHome extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>使用React尝试编写UI组件</h2>
                <h3>主要包含以下几个组件</h3>
                <ul>
                    <li>Button:按钮组件</li>
                    <li>Input:输入框组件</li>
                    <li>loading:加载组件</li>
                </ul>
            </div>
        )
    }
}

export default MainHome;