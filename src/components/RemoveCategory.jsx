export const RemoveCategory = ({onDeleteCategory})=> {
    const onClickBtn = (val)=> {
        onDeleteCategory(val)
    }

    return(
        <div className="ContentOptions">
            <button className="BtnDel" onClickCapture={()=> {onClickBtn(false)}}>Borrar busqueda</button>
            <button className="BtnDelAll" onClickCapture={()=> {onClickBtn(true)}}>Borrar todo</button>
        </div>
    )
}