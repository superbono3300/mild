//로그인 상단 텍스트  변하지 않음
//id입력창 
//pw입력창
//입력을 눌렀을때 동작되는 버튼
//로그인
import React , {Component, createRef} from 'react';
import Main from './Main';
import './style.css';


class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            idInputText : "",
            pwInputText : "",
            isValid : false,
            deFaultId :"test",
            deFaultPw :"1234"

        }
    }

    inputRefId = createRef();
    inputRefPw = createRef();

    onChangeId = (e) =>{
        this.setState({
            idInputText : e.target.value
        })

    }

    onChangePw = (e) =>{
        this.setState({
            pwInputText : e.target.value
        })
    }

    onSubmitLogin = (e) =>{
        e.preventDefault();
        
       
        const {deFaultId,deFaultPw,idInputText,pwInputText,isValid} = this.state;

        if(deFaultId === idInputText && deFaultPw  === pwInputText ){

            this.setState({
                isValid : true

            })
        alert(`${this.state.deFaultId}님, 로그인 되셨습니다.`)
         

        }else if( deFaultId === idInputText && deFaultPw !=  pwInputText ){
        alert("비밀번호가 틀렸습니다 확인해 주세요");
        this.inputRefPw.current.focus()
        this.setState({
            pwInputText : ""
        })

       
       }else if(deFaultPw === pwInputText && deFaultId != idInputText ){
        alert("아이디가 틀렸습니다 확인해 주세요")
        this.inputRefId.current.focus()
        this.setState({
            idInputText : ""
        })
       
        }else if(idInputText === "" || idInputText === null ){
            alert("아이디를 입력해 주세요 ")
        }else if(pwInputText === "" || pwInputText === null ){
            alert("패스워드를 입력해 주세요 ")

        }else{
            alert("정보가 다릅니다 ")
            this.setState({
                idInputText : "",
                pwInputText : ""
            })
        }
    }

    
    logOut = (prram) =>{
        
        this.setState({
            isValid : false,
            idInputText : "",
            pwInputText : ""
        }) 

        alert("로그아웃 되셨습니다.")
    }

   
 
    //prod = {this.changeLogin}


    render(){
        const {idInputText,pwInputText,isValid} = this.state
        return(
            <div>
                <h1 className ="loginTest">Mild 로그인</h1>
                <form onSubmit={this.onSubmitLogin}>

                {(isValid ===false)
                
                ?
                <div>
                    <span className="id">아이디</span> 
                    <div>
                        <input value={idInputText} onChange={this.onChangeId} ref={this.inputRefId} /><br/> 
                    </div>
                   
                    <span className="pw">패스워드</span> 
                    <div>
                        <input value={pwInputText} onChange={this.onChangePw} type="password" ref={this.inputRefPw} />    
                    </div>
                    <div  id ="button"><button><span>로그인</span></button></div>        
                </div>

                :  
                <Main id ={this.state.idInputText} pw = {this.state.pwInputText}  isValid  ={this.state.isValid}  logOut ={this.logOut} />
                }




                </form>
            </div>
            )
    }



}

export default Login;
