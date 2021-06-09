import './App.css';
import React, {useState, useEffect} from "react"
import AddSong from "./components/AddSong"
import Favorites from "./components/Favorites"
import Playlist from "./components/Playlist"

function App() {

  ////////////////////////
  // Constants
  ////////////////////////

  const url = "https://tunr-solo.herokuapp.com/songs"
  const [songs, setSongs] = useState([])

  ////////////////////////
  // Functions
  ////////////////////////

  const handleSubmit = async (data) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    handleGet()
  }

  const handleGet = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setSongs(data)
  }


  ////////////////////////
  // Render
  ////////////////////////

  useEffect(() => {
    handleGet()
  }, [])



  return (
    <div className="App">
      <div className="header">
        <h1>TUNR.</h1>
        <h3>FOR ALL YOUR PLAYLIST NEEDS</h3>
      </div>
      <div className="playlist">
        <Playlist 
          songs={songs}
        />
      </div>
      <div className="favorites">
        <Favorites />
      </div>
      <div className="add-song">
        <AddSong 
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
