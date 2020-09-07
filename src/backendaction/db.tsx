import { db } from '../firebase'
export const halloWorld = "What"


export const fetchFoodList = async () => {
    new Promise(async (resolve, reject) => {
        try {
            const docs = await db.collection("rezepts").where("restaurant", "==", "Kali").get()
            let data: any = []
            docs.forEach(doc => {

                data.push(doc.data())
        
            })
          
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })

}