import React from 'react'
import { connect } from 'react-redux'
//import * as actions from '../../actions/login/actionTypes.js'
import * as loginAction from '../../actions/login/loginAction.js'
import { Router, Route, Link } from 'react-router-dom'

import Home from '../home/Home'
import { Button } from 'antd'

const mapStateToProps = (state) => ({
    loginReducer: state.loginReducer
})

const mapDispatchToProps = {
    ...loginAction
}


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null
        }
    }

    componentDidMount() {
        console.log('componentDidMount', this.props);
    }

    goLogin() {
        if (!this.state.password || !this.state.username || !this.state.password.replace(/\s/g, '') || !this.state.username.replace(/\s/g, '')) {
            alert("请输入用户名和密码")
            return
        }
        const {
            log_in,
            dispatch
        } = this.props;
        log_in({
            username: this.state.username,
            password: this.state.password
        })
    }

    linkToHome = () => {
        this.props.history.push('/home')
    }

    linkToUser = () => {
        this.props.history.push('/user')
    }
    render() {
        const {
            loginReducer: {
                username
            }
        } = this.props;
        return (
            <div className="input-box">
                <input placeholder="用户名：随便输入" type="text" onInput={(e) => { this.setState({ username: e.target.value }) }} />
                <input placeholder="密码：随便输入" type="password" onInput={(e) => { this.setState({ password: e.target.value }) }} />
                <button className="login-btn" onClick={this.goLogin.bind(this)}>{this.props.loginstate === 0 ? '登录' : '正在登录'}</button>
                {this.props.loginstate !== 0 && <h1>Mask</h1>}
                <h1>这里是用户姓名：{username}</h1>
                <Button onClick={this.linkToHome}>点击跳转home</Button>
                <Button onClick={this.linkToUser}>点击跳转user</Button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);