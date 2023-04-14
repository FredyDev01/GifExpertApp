import PropTypes from 'prop-types'
import { GifItem } from "./"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({categ})=> {
    const {images, isLoading} = useFetchGifs(categ)   

    return(        
        <>
            <h3>{categ} <hr/></h3>
            {
                isLoading ? 
                    ( <h2 style={{marginTop: "30px"}}>Cargando...</h2> )
                : images.length ?
                    <div className="card-grid">                                
                        {                    
                            images.map(image => (
                                <GifItem key={image.id} {...image}/>
                            ))                                                            
                        }                
                    </div>
                :
                    <p className="infoData">La busqueda ingrezada no tiene ningun dato registrado.</p>
            }
        </>                
    )
}


GifGrid.propTypes = {
    categ: PropTypes.string.isRequired
}