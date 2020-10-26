// 'use strict'

// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from '../reducers'


// const middlewares = [thunk]
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

// export default function configureStore(initialState) {
//     return createStoreWithMiddleware(rootReducer, initialState)
// }

// //创建Store
// import { createStore } from 'redux'
// /* 
// Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
// */
// import rootReducer from '../reducers'

// export default createStore(rootReducer)

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

// const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            // loggerMiddleware
        )
    )
}
