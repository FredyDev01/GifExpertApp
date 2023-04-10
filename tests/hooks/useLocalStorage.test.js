import { renderHook, waitFor } from "@testing-library/react"
import { useLocalStorage } from "../../src/hooks/useLocalStorage"


describe('Pruebas en useLocalStorage()', () => {
    const NewElement = 'Youjo senki'

    test('debe de obtener un array como elemento en el storage', ()=>{
        const {result} = renderHook(()=> useLocalStorage())
        const [storageData] = result.current
        expect(storageData).toEqual(expect.any(Array))
    })

    test('debe de agregar elementos al storage', async()=> {
        const {result} = renderHook(()=> useLocalStorage())
        const [, SetLocalstorage] = result.current
        SetLocalstorage([NewElement])        
        await waitFor(()=> expect(result.current[0]).toContain(NewElement))
        const [storageData] = result.current
        expect(storageData).toContain(NewElement)
    })

    test('debe de eliminar los elementos del storage', async()=> {
        const {result} = renderHook(()=> useLocalStorage())
        const [storageData, SetLocalstorage] = result.current        
        const DataLength = storageData.length
        SetLocalstorage(storageData.filter((e, ind) => ind != 0), true)
        await waitFor(()=> expect(result.current[0].length).toBe(DataLength - 1))
        expect(result.current[0].length).toBe(DataLength - 1)
    })
})