import { useEffect, useState } from "react"


export const useLocalStorage = ()=> {
    const [storageData, setStorageData] = useState(()=> {
        const Storage = localStorage.getItem("ListCategoria")
        return JSON.parse(Storage) || []        
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
        if(!storageData.length) SetLocalstorage(["Demon slayer"])        
    }, [])

    return [storageData, SetLocalstorage]
}