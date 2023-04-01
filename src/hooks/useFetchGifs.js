import { useEffect, useState } from "react"
import { getGifs } from "../hellpers/getGifs"


export const useFetchGifs = (categ)=> {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async()=> {
        const newImages = await getGifs(categ)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(()=> {
        getImages()
    }, [])    

    return {
        images,
        isLoading
    }
}