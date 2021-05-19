import React, {Component} from 'react'

class Main extends Component{

    constructor(props){
        super(props)


    }

    LogOut =() =>{
        
        this.props.logOut() 
        
    }
 

    render(){
        return (
            <div>
                <span>{this.props.id}님,</span>
                <span className="login">로그인 중</span> 
                <div className="logoutBox">
                    <button onClick={this.LogOut}>로그아웃</button>
                </div>
            </div>

           
        )
    }
}

export default Main;