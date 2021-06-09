import React from "react"

const Favorites = (props) => {

  //////////////////////////
  // Constants
  //////////////////////////

  const favorites = props.songs.filter((item, index) => {
    return(item.isFavorite)
    })

  //////////////////////////
  // Functions
  //////////////////////////

  const handleDelete = (index) => {
    props.handleDelete(index)
  }

  const handleFavorite = (item) => {
    const favorite = item.isFavorite ? false : true
    const data = {
      ...item,
      isFavorite: favorite
    }
    props.handleFavorite(data)
  }

  //////////////////////////
  // Render
  //////////////////////////

  const songsRender = () => {
      return (
        favorites.map((item, index) => {
          return (
            <div 
              className="song" 
              key={index} 
            >
              <p>{item.title}</p>
              {!item.isFavorite && <i 
                className="far fa-heart"
                onClick={() => handleFavorite(item)}
              ></i>}
              {item.isFavorite && <i 
                className="fas fa-heart"
                onClick={() => handleFavorite(item)}
              ></i>}
              <p>{item.artist}</p>
              <p>{item.time}</p>
              <i 
                className="far fa-window-close"
                onClick={() => handleDelete(item.id)}
              ></i>
  
            </div>
          )
        })
      )
    }

  const loaded = () => {
      return (
          <div className="songs">
              {songsRender()}
          </div>
      )
  }

  const loading = () => {
      return (
          <h3>Please add a song as a favorite.</h3>
      )
  }

  return favorites.length > 0 ? loaded() : loading()
}

export default Favorites