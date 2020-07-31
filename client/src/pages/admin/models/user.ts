
import { UserService } from '@/services/userServices';
export default {
    state: {
        result: {
            count: 0,
            data: [],
        },
        search: {
            search: "",
            page: 1,
            limit: 10
        }

    },
    subscriptions: {
        querySearch({ dispatch, history }: any) {
            history.listen((newLocation: { pathname: string; query: any; }) => {

                if (newLocation.pathname !== '/admin/user/userList') {
                    return
                }
                let query = newLocation.query;
                query.limit && (query.limit = + query.limit);
                query.page && (query.page = + query.page);

                console.log(query, "query");
                dispatch({
                    type: "setSearch",
                    payload: query
                });
                console.log(query, "query");
                dispatch({
                    type: "fetchUser"
                })

            })

        }
    },
    reducers: {
        setSearch(state: any, { payload }: any) {
            return {
                ...state,
                search: {
                    ...state.search,
                    ...payload
                }
            }
        },
        setResult(state: any, { payload }: any) {
            return {
                ...state,
                result: payload
            }
        },
        delete(state: any, { payload }: any) {
            const newDatas = state.result.data.filter(it => it.id !== payload)
            return {
                ...state,
                result: {
                    ...state.result,
                    data: newDatas
                }
            }
        }



    },
    effects: {
        *fetchUser({ payload }: any, { put, select, call }: any) {
            const search = yield select((state: any) => (state.problem.search));
            const result = yield call(UserService.byPage, search)
            console.log(result);
            yield put({
                type: "setResult",
                payload: {
                    count: result.data.count,
                    data: result.data.result,
                }
            })
        },
        *deleteUser({ payload }: any, { put, select, call }: any) {
            yield call(UserService.delete, payload)
            yield put({
                type: "delete",
                payload
            })
        }

    }

}