import { ShopDB } from '../db/db'
import { getNowTime } from '../utils/getTime'
import { writeResult } from '../utils/resultHelper'
import shopUserMapping from '../db/shopUserMappingDB'
import { UserService } from './userService'

export class ShopService {
    static async add(obj) {
        obj.user_id = Number(obj.user_id)
        obj.ctime = getNowTime()
        obj.utime = getNowTime()
        console.log(obj, "add");
        const res = await ShopDB.insertShop(obj)
        console.log(res, "ShopService add");
        obj.shop_id = res.insertId;


        delete obj.shop_tag_name;
        delete obj.shop_content;
        await shopUserMapping.insertShopUserMapping(obj)

        const shops = await shopUserMapping.searchByUser(obj.user_id)

        let shopTags = []
        shops.map(it => it.shop_id).map(async (it, index) => {
            const res = await ShopService.find(it)
            console.log(res, "shop_tags_name");
            shopTags.push(res.data[0].shop_tag_name)
            if (shops.length === shopTags.length) {
                await UserService.editShopTags(obj.user_id, { shop_tags_name: shopTags.join(",") })
            }

        })




        const result = writeResult("success", "添加成功", "")
        return result
    }
    static async find(id) {
        console.log(id, "find");
        id = Number(id)
        const res = await ShopDB.findShop(id)
        const result = writeResult("success", "查询成功", res)
        return result
    }
    static async findByUserId(id) {
        id = Number(id)
        const res = await ShopDB.findShopByUserId(id)
        const result = writeResult("success", "查询成功", res)
        return result
    }
    static async edit(id, obj) {
        id = Number(id)
        obj.utime = getNowTime()
        const res = await ShopDB.updataShopName(obj)
        const result = writeResult("success", "修改成功", res)
        return result
    }
    static async delete(id, ) {
        obj.id = Number(id)

        await ShopDB.deleteShop(id)
        await ShopUserMapping.delete(id)

        const shops = await ShopUserMapping.findByUserId(obj.user_id)


        const shopTags = shops.map(it => it.shop_id).join(",")
        console.log(shopTags, "shopTags");
        await UserService.editShopTags(obj.user_id, shopTags)
        ShopService.findByUserId(user_id)
        UserService.editShopTags(user_id)
        const result = writeResult("success", "删除成功", res)
        return result
    }



}

