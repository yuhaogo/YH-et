import React,{ Component } from 'react'
import { render } from 'react-dom'
import { Input,Icon,Button } from 'antd'
import { post } from 'fetch/request'

class LoginMain extends Component {

    state = {
        loading: false,
        user:"",
        pwd:""
    }

    enterLoading = () => {
        this.setState({ loading:true })
        post('http://127.0.0.1:3000/login.do',{
            user:this.state.user,
            pwd:this.state.pwd
        }).then((res)=>{
            this.setState({ loading:false })
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