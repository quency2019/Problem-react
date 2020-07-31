import React from 'react'

export default function comments(props: any) {
    return (
        <div>
            <p>用户名:{props.data.user_name}</p>
            <p>:{props.data.message}</p>
        </div>
    )
}
