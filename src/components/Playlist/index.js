import React from "react"

const Playlist = (props) => {

  //////////////////////////
  // Constants
  //////////////////////////

  //////////////////////////
  // Functions
  //////////////////////////

  const handleDelete = (index) => {
    props.handleDelete(index)
  }

  const handleFavorite = (item) => {
    const data = {
      ...item,
      isFavorite: true
    }
    props.handleFavorite(data)
  }

  //////////////////////////
  // Render
  //////////////////////////

  const songsRender = () => {
      return (
        props.songs.map((item, index) => {
          return (
            <div 
              className="song" 
              key={index} 
            >
              <p>{item.title}</p>
              <i 
                className="far fa-heart"
                onClick={() => handleFavorite(item)}
              ></i>
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
          <h2>Loading...</h2>
      )
  }

  return props.songs.length > 0 ? loaded() : loading()
}

export default Playlist