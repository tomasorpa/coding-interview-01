import React, { useEffect, useState } from 'react'
import { getFact } from '../helpers/getFact'
import { getGifs } from '../helpers/getGifs'
import GifGrid from './GifGrid'

const RandomFact = () => {
  const [randomFact, setRandomFact] = useState('')

  const [gifs, setGifs] = useState([])

  // Función para manejar la obtención de datos
  const fetchData = () => {
    getFact().then((fact) => {
      const words = fact.split(' ', 3).join(' ')
      setRandomFact(fact)

      // Pasamos threeFirstWords a getGifs para obtener los GIFs
      getGifs(words).then(setGifs)
    })
  }

  // Llamada inicial de datos
  useEffect(() => {
    fetchData()
  }, [])

  // Función para manejar el click del botón
  const handleClick = () => {
    fetchData() // Reutilizamos la función fetchData para mantener la consistencia
  }
  return (
    <>
      <h1>Coding Interview</h1>
      {randomFact && <p className='p_randomFact'>{randomFact}</p>}
      <button onClick={handleClick}>Fetch again</button>
      <GifGrid gifs={gifs} />
    </>
  )
}
export default RandomFact
