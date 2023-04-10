import { getGifs } from "../../src/hellpers/getGifs"


describe('Pruebas en getGifs()', () => {
    test('debe de retornar un arreglo de gifs', async()=> {
        const gifs = await getGifs('Boku no hero')
        //console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})