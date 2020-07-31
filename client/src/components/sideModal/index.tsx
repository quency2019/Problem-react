import React, { useRef, useState, useEffect } from 'react'
import styles from './index.css'
import { Icon } from 'antd'
import { ProblemService } from '@/services/problemServices';
import { Link } from 'umi';
import userInfo from '@/pages/user/userInfo';
import { ShopService } from '@/services/shopServices';
import { connect } from 'dva'


const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1748829_ifxyo2yy7ll.js',
});

function showShopTagFun(user: any) {
    const [state, setstate] = useState(0)

    if (!user.shop_tags_name) {

        return null
    }
    console.log(user);
    const shopTags = user.shop_tags_name.split(',').map((it, index) => <button key={`${index}${it}`} className={`${styles.addbtn}  ${index === state ? styles.btnActive : styles.btnNormal}`} onClick={() => {
        setstate(index)
    }}><IconFont type="icon-ceshi" className={styles.icon}></IconFont>{it}</button>
    )
    return (
        <>
            {shopTags}
        </>
    )
}

function index(props: any) {
    const addRef = useRef()

    const addProjectRef = useRef()
    // const [shoppingNum, setShoppingNum] = useState(0);
    const [shopState, setShopState] = useState(false);
    const [shopData, setShopData] = useState([]);
    const [addProject, setAddProject] = useState(false);
    const [addCard, setAddCard] = useState(false);
    const showShopTag = showShopTagFun(props.user)


    useEffect(() => {

        if (Object.keys(props.user).length === 0) return

        console.log(props.user);
        if (props.shoppingNum === 0) {
            setAddCard(false)

            setShopState(false)
            return
        }

        const shopping = props.user.shopping.split(',').filter((it: any) => it)
        let shoplis = []
        setAddCard(true)
        shopping.map(async (it: any, index: number) => {
            console.log(it);
            const res = await ProblemService.FindById(it)
            let newList = (<li key={`sideMoadl${index}${res.data[0].id}${res.data[0].title}`}>
                {res.data[0].title}
                <div className={styles.del} onClick={() => {
                    let newData = shopData
                    newData.splice(index, 1)
                    setShopData(newData)
                    const newShopping = props.user.shopping.split(',').filter(it => it !== `${res.data[0].id}`).join(",")
                    console.log(newShopping);

                    props.changeShopping && props.changeShopping(newShopping)
                }}>
                    <IconFont className={styles.icon} type="icon-iconfontshanchu2" />
                </div>
            </li>)
            shoplis.push(newList)
            if (shoplis.length === props.shoppingNum) {
                setShopData(() => shoplis)
            }
            console.log(shoplis);
        })


        setShopState(true)
        // setShoppingNum(shopping.length)


    }, [props.shoppingNum])


    const show = () => {
        props.setIsShow && props.setIsShow(true);

    }
    const hide = () => {

        props.setIsShow && props.setIsShow(false);

    }

    return (
        <div className={styles.modalWrap} style={props.isShow ? { display: "block" } : { display: "none" }} >
            <div className={styles.modal} onClick={(e) => {
                console.log(e);
                e.stopPropagation()
                hide()
            }}></div>
            <div className={styles.aside}  >
                <div className={styles.asideHead}>
                    <div className={styles.back} onClick={(e) => {

                        e.stopPropagation()
                        hide()
                    }}><Icon type="left" /></div>
                    <span className={`iconfont ${styles.card}`}>&#xe606;</span>
                    <span className={styles.clear} onClick={() => {
                        props.editUserShopping && props.editUserShopping("")
                    }}><i className="iconfont">&#xe606;</i>一键清除</span>
                </div>
                <div className={styles.asideContent}>
                    {shopState ?
                        <ul className={styles.contain}>

                            {shopData}

                        </ul> : <div className={styles.empty}>
                            <h2>购物车为空</h2>
                            <span className={styles.imgWrap}><IconFont className={styles.icon} type="icon-MBEfenggeduosetubiao-gouwuche" />
                            </span>

                        </div>}

                </div>
                <div className={styles.asideFoot}>
                    {addCard ? (<button className={`${styles.btn} ${styles.btnNormal}`} onClick={(e) => {
                        addRef.current.style.display = "block"
                    }}>添加至题库</button>) : (<button className={`${styles.btn} ${styles.btnDisabled}`}>添加至题库</button>)}
                    <div className={styles.projectWrap} ref={addRef}>
                        {!addProject ? <div className={styles.projectContent}>
                            <div className={styles.title}><h2>加入题库</h2><IconFont className={styles.icon} type="icon-tianjia" onClick={() => {
                                setAddProject(true)

                            }} /></div>
                            {showShopTag}
                            {/* <button className={`${styles.addbtn} ${styles.btnNormal}`} ><IconFont type="icon-ceshi" className={styles.icon}></IconFont>题库名</button>
                            <button className={`${styles.addbtn} ${styles.btnActive}`}><IconFont type="icon-ceshi" className={styles.icon}></IconFont>题库名</button> */}
                        </div> : <div className={`${styles.projectContent} ${styles.addActive}`}>
                                <div className={styles.title}><h2>添加题库名</h2><IconFont className={styles.icon} type="icon-fanhui" onClick={() => {
                                    setAddProject(false)
                                }} /></div>
                                <input type="text" className={styles.addProjectText} ref={addProjectRef}></input>
                            </div>}


                        <div className={styles.footbtnWrap}>
                            <button className={`${styles.footbtn} `} onClick={async (e) => {
                                e.stopPropagation()
                                show()
                                if (addProject) {
                                    console.log(addProjectRef.current.value);
                                    await ShopService.add({

                                        user_id: props.user.id,
                                        shop_tag_name: addProjectRef.current.value,
                                        shop_content: props.user.shopping,
                                    })

                                }

                                props.editUserShopping("")
                                addRef.current.style.display = "none"
                                hide()

                            }}>确定</button>
                            <button className={`${styles.footbtn} `} onClick={(e) => {
                                e.stopPropagation()
                                addRef.current.style.display = "none"

                            }}>取消</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}


const mapStateToProps = (state: any) => ({
    user: state.loginUser.user,
})


const mapDispatchToProps = (dispatch: any) => ({
    addUserShop(shop_tags_name: string) {
        dispatch({
            type: "loginUser/addUserShop",
            payload: shop_tags_name,
        })
    },
    editUserShop(shop_tags_name: string) {
        dispatch({
            type: "loginUser/editUserShop",
            payload: shop_tags_name,
        })
    },
    editUserShopping(shopping: string) {
        dispatch({
            type: "loginUser/editUserShopping",
            payload: shopping,
        })
    },


})


export default connect(mapStateToProps, mapDispatchToProps)(index)
