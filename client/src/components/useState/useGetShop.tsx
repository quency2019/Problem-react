import React, { useEffect, useState } from 'react'
import { ShopService } from '@/services/shopServices'



export default function useGetShop(user = {}) {
    const [state, setState] = useState([])


    useEffect(() => {
        ShopService.findByUserId(user.id).then(res => {
            setState(res.data);
        })

    }, [user])
    console.log(state);
    return state
}
