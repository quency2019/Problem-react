export interface IResponse<T> {
    status: 'error' | 'success',
    msg: string,
    data: T
}

export interface IResponseByPage<T> {
    status: 'error' | 'success',
    msg: string,
    data: {
        count: number,
        result: T[]
    }
}
export interface IResponseBySize<T> {
    status: 'error' | 'success',
    msg: string,
    data: T[]
}