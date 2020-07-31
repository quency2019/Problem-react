
import { ProblemService, IProblem } from '@/services/problemServices';
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
                console.log(newLocation.pathname);
                if (newLocation.pathname == '/problem/search' || newLocation.pathname === '/admin/problem/problemList') {
                    console.log(newLocation.pathname);
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
                        type: "fetchProblem"
                    })

                }

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
        *fetchProblem({ payload }: any, { put, select, call }: any) {
            const search = yield select((state: any) => (state.problem.search));
            const result = yield call(ProblemService.FindBySearch, search)
            console.log(result);
            yield put({
                type: "setResult",
                payload: {
                    count: result.data.count,
                    data: result.data.result,
                }
            })
        },
        *editViews({ payload }: any, { put, call }: any) {
            yield call(ProblemService.addViews, payload.problem_id)
            yield put({
                type: "fetchProblem",

            })

        },
        *editGood({ payload }: any, { put, call }: any) {
            console.log(payload);
            yield call(ProblemService.editGood, payload.problem_id, payload.user_id)
            yield put({
                type: "fetchProblem",

            })

        },
        *editLove({ payload }: any, { put, call }: any) {
            yield call(ProblemService.editLove, payload.problem_id, payload.user_id)

            yield put({
                type: "fetchProblem",

            })

        },
        *deleteProblem({ payload }: any, { put, select, call }: any) {
            yield call(ProblemService.delete, payload)
            yield put({
                type: "delete",
                payload
            })
        }
    }

}