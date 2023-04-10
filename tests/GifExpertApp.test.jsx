import { fireEvent, getAllByRole, getByRole, render, renderHook, screen } from "@testing-library/react"
import {GifExpertApp} from '../src/GifExpertApp'


describe('Pruebas en <GifExpertApp />', () => {
    const FirstCategory = 'Isekai ojisan'

    test('debe de hacer match en el snapshot', ()=> {
        const {container} = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()
    })

    test('debe de agregar nuevas categorias', ()=> {
        render(<GifExpertApp />)
        const input = screen.getByRole('searchbox')
        const form = screen.getByRole('form')        
        fireEvent.input(input, {target: {value: FirstCategory}})
        fireEvent.submit(form)
        expect(screen.getByText(FirstCategory)).toBeTruthy()
    })

    test('debe de eliminar la busqueda mas reciente', ()=> {
        render(<GifExpertApp />)
        const input = screen.getByRole('searchbox')
        const form = screen.getByRole('form')        
        fireEvent.input(input, {target: {value: FirstCategory}})
        fireEvent.submit(form)
        fireEvent.click(screen.getByText('Borrar busqueda'))        
        expect(screen.queryByText(FirstCategory)).toBeNull()
    })

    test('debe de eliminar todas las busquedas', ()=> {
        render(<GifExpertApp />)
        const input = screen.getByRole('searchbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value: FirstCategory}})
        fireEvent.submit(form)
        fireEvent.click(screen.getByText('Borrar todo'))                        
        expect(screen.queryAllByRole('heading', {level: 3}).length).toBe(0)
    })
})