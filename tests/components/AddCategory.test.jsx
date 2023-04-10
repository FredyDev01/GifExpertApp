import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en <AddCategory />', () => {
    const inputValue = 'Black clover'
    
    test('debe de cambiar el valor de la caja de texto', ()=> {
        render(<AddCategory onNewCategory={()=> {}} />)                
        const input = screen.getByRole('searchbox')
        fireEvent.input(input, {target: {value: inputValue}})        
        expect(input.value).toBe(inputValue)
        //screen.debug()
    })

    test('debe de llamar onNewCategory si el input tiene un valor', ()=> {
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)                
        const input = screen.getByRole('searchbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value: inputValue}})      
        fireEvent.submit(form) 
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('No debe de llamar onNewCategory si el input esta vacio', ()=> {
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(onNewCategory).toHaveBeenCalledTimes(0)
    })
})