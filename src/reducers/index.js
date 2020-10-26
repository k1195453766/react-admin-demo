// //创建Store
// import { createStore } from 'redux'
// /* 
// Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
// */
// import reducers from './reducers'


// export default createStore(reducers)



//统一管理所有的reducers，方便后期扩展维护
import { combineReducers } from 'redux'

import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    loginReducer
})

export default rootReducer;