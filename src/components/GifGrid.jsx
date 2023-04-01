import { GifItem } from "./"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({categ})=> {
    const {images, isLoading} = useFetchGifs(categ)   

    return(        
        <>
            <h3>{categ} <hr/></h3>
            {
                isLoading && ( <h2>Cargando</h2> )
            }
            <div className="card-grid">                                
                {
                    images.length ?
                    images.map(image => (
                        <GifItem key={image.id} {...image}/>
                    ))
                    :
                    <p className="infoData">La busqueda ingrezada no tiene ningun dato registrado.</p>                    
                }                
            </div>
        </>                
    )
}