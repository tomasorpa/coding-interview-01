const GifGrid = ({ gifs }) => {
  return (
    <section className='content-container'>
      {gifs.map((gif) => (
        <div key={gif.id}>
          <p>{gif.title}</p>
          <img src={gif.imgUrl} alt='' />
        </div>
      ))}
    </section>
  )
}
export default GifGrid
