import { db } from '../firebase'
export const halloWorld = "What"


export const fetchFoodList = async () => {
    new Promise(async (resolve, reject) => {
        try {
            const docs = await db.collection("rezepts").where("restaurant", "==", "Kali").get()
            let data: any = []
            docs.forEach(doc => {

                data.push(doc.data())
                console.log("Food fetched")

            })
            console.log("Food fetched stoli",data)
            resolve(data)
        } catch (error) {
            console.log(error, "Error")
            reject(error)
        }
    })

}