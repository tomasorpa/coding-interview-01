export const getGifs = (query) => {
  const API_KEY = '70XR5ABCX7j2N4sYZPOoUA8BgAX84aN6'
  const URL_API_GIPHY = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

  return fetch(URL_API_GIPHY)
    .then(res => res.json())
    .then(({ data }) => {
      console.log(data)

      // Corrección: Eliminar el bloque {} innecesario y asegurarse de que la función map retorne correctamente
      const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        imgUrl: gif.images.original.url || '' // Usar optional chaining y un fallback vacío
      }))

      // Asegurarse de retornar el array de gifs
      return gifs
    })
}
