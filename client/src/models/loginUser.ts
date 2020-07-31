import { UserService } from '@/services/userServices';
import { Select } from 'antd';
import { ShopService } from '@/services/shopServices';

export default {
    state: {
        user: {}
    },
    //仓库同步本地存储
    subscriptions: {
        syncLocalStorage({ dispatch }: any) {
            const user_name = localStorage.getItem("user_name")
            console.log(user_name);
            if (user_name) {
                dispatch({
                    type: "reLogin",
                    payload: user_name
                })
            }

        }
    },
    reducers: {
        setLogin(state: any, { payload }: any) {
            return {
                user: payload
            }
        },
        editUserShopping(state: any, { payload }: any) {
            return {
                user: {
                    ...state.user,
                    shopping: payload
                }
            }
        },
        editUserShop(state: any, { payload }: any) {
            return {
                user: {
                    ...state.user,
                    shop_tags_name: payload
                }
            }
        },
    },
    effects: {
        *login({ payload }: any, { put, call }: any) {
            const { user_name, user_password } = payload;
            const result = yield call(UserService.vilidationName, user_name)
            if (!result) return false
            if (user_password === result.data.user_password) {
                localStorage.setItem("user_name", user_name)
                return true
            }

            return false
        },
        *reLogin({ payload }: any, { put, call }: any) {
            console.log(payload);
            const result = yield call(UserService.vilidationName, { user_name: payload })
            console.log(result);
            yield put({
                type: "setLogin",
                payload: result.data
            })

            return true
        }
        ,
        *logout(action: any, { put }: any) {
            localStorage.removeItem("user_name")
            yield put({
                type: "setLogin",
                payload: null
            })
        },
        *editUserShopping({ payload }: any, { put, call, select }: any) {
            console.log(payload);
            const user = yield select((state: any) => state.loginUser.user)
            console.log(user);
            yield call(UserService.editShopping, user.id, user)
        },
        *editUserShop({ payload }: any, { select, call }: any) {
            const user = yield select((state: any) => state.loginUser.user)
            yield call(ShopService.add, user.id, user)
            yield call(UserService.editPhoto, user.id, user)
        },


    }
}