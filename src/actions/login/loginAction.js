import * as actionTypes from './actionTypes.js'
import { deleteStore, setTimeStore, getTimeStore } from '../../api/baseStore.js'


export const setUserName = (name) => {
    return {
        type: actionTypes.USER_NAME,
        name,
    }
}

//注销 同步
export function log_out() {
    //删除登录信息
    deleteStore('userInfo')
    return {
        type: actionTypes.LOG_OUT
    }

}

//登入 异步
export function log_in(obj) {
    return async (dispatch) => {
        console.log("in")
        let res = await fetch('http://interface.sidama.work/blog/showLikeData')
        console.log('res', await res.json());
        dispatch(
            setUserName(
                obj.username
            )
        );
        // .then(response => response.json())
        // .then(res => {
        //     console.log('res', res);
        //     dispatch(
        //         setUserName(
        //             obj.username
        //         )
        //     );
        // });

        //console.log('response', res.Response);
        return;
        //pending  正在进行登录的状态


        //开始发送异步请求登录
        new Promise((resolve, reject) => {
            console.log("ok")
            setTimeout(() => {
                setTimeStore('userInfo', {
                    username: obj.username
                })
                resolve({
                    type: actionTypes.LOG_SUCCESS,
                    username: obj.username
                })
            }, 1000)
        }).then(res => {
            //dispatch(res)
        })
    }
}

//获取登录信息
export function log_state() {
    console.log(actionTypes.LOG_OUT)
    let result = getTimeStore('userInfo')
    if (result.username) {
        return {
            type: actionTypes.LOG_SUCCESS,
            username: result.username
        }
    } else {
        return {
            type: actionTypes.LOG_OUT
        }
    }

}