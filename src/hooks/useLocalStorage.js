import { useEffect, useState } from "react"


export const useLocalStorage = ()=> {
    const [storageData, setStorageData] = useState(()=> JSON.parse(localStorage.getItem("ListCategoria")) || ['Demon slayer'])

    useEffect(()=>{
        console.log(storageData)
        localStorage.setItem("ListCategoria", JSON.stringify(storageData))        
    }, [storageData])

    return [storageData, setStorageData]
}