import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas en <GifGrid />', () => {
    const category = 'Overlord'

    test('debe de mostrar el loading inicialmente', ()=> {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid categ={category}/>)
        expect(screen.getByText('Cargando...')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()        
    })

    test('debe de mostrar items cuando ser cargan las imagenes useFetchGifs', ()=> {
        const gifs = [
            {id: 'AAA', title: 'Ainz ooal gown', url: 'http://imagen-overlord-Ainz.jpg'},
            {id: 'BBB', title: 'Platinum Dragon Lord', url: 'http://imagen-overlord-Platinum.jpg'}
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })        
        render(<GifGrid categ={category}/>)    
        expect(screen.getAllByRole('img').length).toBe(2)
    })
}) 