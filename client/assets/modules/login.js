import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Input,Icon,Button,Alert } from 'antd'
import { post } from 'fetch/request'

class LoginMain extends Component {

    state = {
        loading: false,
        user:"",
        pwd:""
    }

    enterLoading = () => {
        this.setState({ loading:true })
        post('http://127.0.0.1:3000/api/User/Login',{
            Username:this.state.user,
            PassWord:this.state.pwd
        }).then(res=>{
            console.log(res);
            return res.json();
        }).then(data=> {
                var _data=data['success']['data'];
                this.setState({loading:false})
                if(_data=="isOK"){
                    render(
                        <Alert message="Success login" type="success" showIcon />,
                        document.getElementById('login-status')
                    )
                }
            })
    }
    handleUser=(e)=>{
        this.setState({user: e.target.value});
    }
    handlePwd=(e)=>{
        this.setState({pwd: e.target.value});
    }
    render(){
        return (
            <div className="user-login">
                <h1>electronic Trial Master File System</h1>
                <div id="login-status"></div>
                <div>
                    <Input addonBefore={<Icon type="user" />} value={this.state.user} placeholder="Username" onChange={this.handleUser} />
                </div>
                <div>
                    <Input type="password" addonBefore={<Icon type="lock" />} value={this.state.pwd} placeholder="Password" onChange={this.handlePwd} />
                </div>
                <div>
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading} >Login</Button>
                </div>
            </div>
        )
    }
}

render(
    <LoginMain />,
    document.getElementById('login-main')
)