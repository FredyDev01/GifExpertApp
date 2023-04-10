import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en <GifItem />', () => {
    const title = 'Gato bailarin'
    const url = 'https://media.tenor.com/5Jingks2rHAAAAAM/%D1%84%D0%BB%D0%B5%D0%BA%D1%81%D0%BA%D0%BE%D1%82%D0%B0-catflex.gif'

    test('debe de hacer match en el snapshot', ()=> {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar la imagen con URL indicado y el ALT indicado', ()=> {
        render(<GifItem title={title} url={url} />)
        console.log('url de la imagen', screen.findByRole('img').src)
        //expect(screen.getByRole('img').src).toBe(url)
        //expect(screen.getByRole('img').alt).toBe(title)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('debe de haber un parrafo con el title', ()=>{
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
})