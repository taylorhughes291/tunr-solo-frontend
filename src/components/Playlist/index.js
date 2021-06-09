import React from "react"

const Playlist = (props) => {

    const songsRender = () => {
        return (
          props.songs.map((item, index) => {
            return (
              <div 
                className="song" 
                key={index} 
              >
                <p>{item.title}</p>
                <p>{item.artist}</p>
                <p>{item.time}</p>
                <i class="far fa-window-close"></i>
    
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