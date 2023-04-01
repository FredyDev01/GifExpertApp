export const getGifs = async(categ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6l8NFZaB4gEbRK2Vj7HnwJ0KIBBa0fGL&q=${categ}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img => ({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url 
    }))
    return gifs
}
