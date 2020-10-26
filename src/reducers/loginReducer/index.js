import * as actionTypes from '../../actions/login/actionTypes.js'

const initialData = {
    username: '请通过点击提交姓名',
    loginstate: 0, // 0未登录  1登录成功  -1 正在登录
    userInfo: null,
}

export default function (state = initialData, action) {
    switch (action.type) {
        case actionTypes.LOG_SUCCESS:
            return {
                loginstate: 1,
                username: action.username
            }
        case actionTypes.LOG_ING:
            return {
                loginstate: -1,
                username: '正在登录'
            }
        case actionTypes.USER_NAME:
            return {
                username: action.name
            }
        case actionTypes.LOG_OUT:
            return initialData
        default:
            return initialData
    }
}