import { AddCategory, RemoveCategory, GifGrid } from "./components"
import { useLocalStorage } from "./hooks/useLocalStorage"


export const GifExpertApp = () => {   
    
    const [categories, setCategories] = useLocalStorage()
    
    const onAddCategory = (newCategory)=> {
        if(categories.length && categories.find(e => e.toUpperCase() == newCategory.toUpperCase())) return;        
        setCategories([newCategory, ...categories])
    }

    const onRemoveCategory = (DeleteAll)=> {               
        setCategories(DeleteAll ? [] : categories.filter((e, id)=> id != 0), true)             
    }

    return (
        <>
            <header>
                <h1>GifExpertApp</h1>
                <AddCategory onNewCategory={value => onAddCategory(value) }/>
                <RemoveCategory onDeleteCategory={value => onRemoveCategory(value)}/>
            </header>
            <ol>
                {
                    categories.length ?  
                    categories.map(categ => (
                        <GifGrid key={categ} categ={categ}/>
                    )) 
                    :
                    <p className="infoData">Al parecer no tiene ninguna categoria de busqueda registrada.</p>
                }
            </ol>
            
        </>
    )
}