import React from 'react'
import { connect } from 'react-redux'
import { log_out } from '../../actions/login/login.js'


class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTips: false
        }
    }
    goLogout() {
        // const {dispatch} = this.props;
        // dispatch(log_out())
        this.setState({
            showTips: true
        })
    }
    okAction() {
        const { dispatch } = this.props;
        dispatch(log_out())
    }
    cancelAction() {
        this.setState({
            showTips: false
        })
    }
    render() {
        return (
            <div className="input-box">
                <p className="username">{this.props.username}</p>
                <button className="login-btn" onClick={this.goLogout.bind(this)}>注销用户</button>
                {this.state.showTips && <h1>确定要退出么?</h1>}
            </div>
        )
    }
}

function mapStateToProps(userinfo) {
    let { login } = userinfo
    return login
}

export default connect(mapStateToProps)(UserInfo)