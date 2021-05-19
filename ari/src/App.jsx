import React, { createRef } from 'react'
import Login from './Login'
import './style.css'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      userName:'admin',
      userPw:'test12',
      message:'',
      isLoginOK:false,
      value:''
    }
  }
  
  inputIdRef = createRef();
  inputPwRef = createRef();

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      userName:'',
      userPw:''
    }) 
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleChange = (e) => {
    this.setState ({
        [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {userName,userPw} = this.state
    if(userName === 'admin' && userPw === 'test12') {
        alert('로그인 되었습니다.')
        this.setState ({
            isLoginOK:true,
            message:'환영합니다'
        })
    } else if (userName === '') {
        alert('아이디를 입력해주세요.')
        this.inputIdRef.current.focus();
    } else if (userPw === '') {
        alert('비밀번호를 입력해주세요.')
        this.inputPwRef.current.focus();
    } else if (userName === 'admin' && userPw !== 'test12') {
        alert('비밀번호가 틀립니다.')
        this.setState ({
          userPw:''
        })
        this.inputPwRef.current.focus();
    } else if (userName !== 'admin' && userPw !== 'test12') {
        alert('회원정보가 없습니다.')
        this.setState ({
          userName:'',
          userPw:''
        })
        this.inputIdRef.current.focus();
    }
  }

  handleLogout = () => {
    alert('로그아웃 되었습니다.')
    this.setState ({
        isLoginOK:false,
        message:'',
        userName:'',
        userPw:''
    })
  }

  handleReset = (e) => {
    e.preventDefault()
    this.setState ({
      userName : '',
      userPw:''
    })
    this.inputIdRef.current.focus();
  }

  render() {
    const {userName,userPw,message,isLoginOK,value} = this.state
    return (
      <>
        <div id="wrapper">
          <form className="loginForm">
            <div className="message">
              <h1>안녕하세요</h1>
              <h1>마일드입니다.</h1>
              <h1>로그인페이지입니다.</h1>
            </div>
            {
              (isLoginOK === false)
              ?
              <>
              <div>
                <div>
                  <label htmlFor="userName">아이디</label>
                </div>
                <input
                id="userName" 
                type="text"
                name="userName"
                onChange={this.handleChange}
                value={userName}
                ref={this.inputIdRef}
                placeholder="아이디를 입력하세요."
              />
              </div>
              <div>
                <div>
                  <label htmlFor="userPw">비밀번호</label>
                </div>
                <input
                id="userPw"
                type="password"
                name="userPw"
                onChange={this.handleChange}  
                value={userPw}
                ref={this.inputPwRef}
                placeholder="비밀번호를 입력하세요."
              />
            </div><br />
              <div className="btnWrapper">
                  <button id="loginBtn" className="clickBtn" onClick={this.handleSubmit}>로그인</button>
                  <button id="ResetBtn" className="clickBtn" onClick={this.handleReset}>취소</button>
              </div>
              </>
              :  
              null
            }
            {
              (isLoginOK === false)
              ?
              null
              :
              <>
                  <Login user={userName}  message={message} handleLogout={this.handleLogout}/>
              </>
            }
          </form>   
        </div>   
      </>
    )
  }

}


// <p>{message}</p>
export default App