import { useEffect, useState } from "react"


export const useLocalStorage = ()=> {
    const [storageData, setStorageData] = useState(()=> {
        const Storage = localStorage.getItem("ListCategoria")
        return JSON.parse(Storage) || false        
    })

    const SetLocalstorage = (ArrayData, Delete = false)=>{        
        var Storage = localStorage.getItem("ListCategoria")            
        var NewArray = ArrayData
        if(Storage && !Delete){
            Storage = JSON.parse(Storage)
            NewArray = [...new Set([...NewArray, ...Storage])]            
        }
        localStorage.setItem("ListCategoria", JSON.stringify(NewArray))     
        setStorageData(NewArray)   
    }

    useEffect(()=>{
        storageData === false && SetLocalstorage(["Demon slayer"])        
    }, [])

    return [storageData, SetLocalstorage]
}