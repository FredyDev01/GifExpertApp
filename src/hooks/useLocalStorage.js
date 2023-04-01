import { useEffect, useState } from "react"


export const useLocalStorage = ()=> {
    const [storageData, setStorageData] = useState(()=> {
        const Storage = localStorage.getItem("ListCategoria")
        const ListData = JSON.parse(Storage) || []
        return [...ListData, "Demon slayer"]
    })

    const SetLocalstorage = (ArrayData, Delete = false)=>{        
        var Storage = localStorage.getItem("ListCategoria")            
        var NewArray = ArrayData
        if(Storage && !Delete){
            Storage = JSON.parse(Storage)
            NewArray = [...new Set([...NewArray, ...Storage])]            
        }
        if(NewArray.length > 0) localStorage.setItem("ListCategoria", JSON.stringify(NewArray))
        else localStorage.removeItem("ListCategoria")                        
        setStorageData(NewArray)
    }

    return [storageData, SetLocalstorage]
}