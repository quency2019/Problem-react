import React from 'react'
import { connect } from 'dva'
import useGetShop from '../../components/useState/useGetShop'
import styles from './shop.css'
function shop(props: any) {

    console.log(props.user);
    const shopDatas = useGetShop(props.user)

    if (!shopDatas || shopDatas.length === 0) return null
    const shopLists = shopDatas.map((it, index) => {
        return (<a className={styles.shopBtn} key={index} onClick={() => {
            props.history.push(`/user/${it.id}`)
        }}>{it.shop_tag_name}</a>)
    })

    return (
        <div className={styles.shopWrap}>
            {shopLists}

        </div>
    )
}


const mapStateToProps = (state: any) => ({
    user: state.loginUser.user,
})
const mapDispatchToProps = (dispatch: any) => ({



})

export default connect(mapStateToProps, mapDispatchToProps)(shop)
