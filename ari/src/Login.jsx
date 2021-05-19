import React from 'react'
import './style.css'

class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {handleLogout,message,user} = this.props
        return (
            <>
                <p>{`${user}님, ${message}`}</p>
                <div className="wrapper">
                  <button id="logoutBtn" className="clickBtn" onClick={handleLogout}>로그아웃</button>
                </div>
            </>
        )
    }
}

export default Login