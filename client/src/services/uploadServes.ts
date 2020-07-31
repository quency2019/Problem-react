import axios from 'axios'




export class UploadService {

    // id查找题库
    public static async  Upload(obj: any) {
        const res = await axios.post("/api/upload", obj, {
            headers: { "Content-Type": "multipart/form-data" },

        })
        return res.data

    }

}
