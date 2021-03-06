import { CHANGE_LOGIN_STATUS, CHANGE_USER_INFO } from "./constans";
import {loginByPhoneRequest} from '../../../../api/request';
export const saveUserInfo =data=>({//同步的
    type:CHANGE_USER_INFO,
    data
})
export const saveLoginStatus=data=>({
    type:CHANGE_LOGIN_STATUS,
    data
})
//api 两个action axios 只在action
export const loginByPhone=(phone,password)=>{
    return dispatch=>{
        //dispatch(saveUserInfo)
        //api 
        loginByPhoneRequest(phone,password)
            .then(res=>{
                dispatch(saveLoginStatus(true));
                console.log(res,'+++++++++');
                dispatch(saveUserInfo(res.data));
            })
    }
}