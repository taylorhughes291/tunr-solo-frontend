import React, {useState} from "react"

const AddSong = (props) => {

    /////////////////////////////
    // Constants
    /////////////////////////////
    const emptyForm = {
        title: "",
        artist: "",
        time: ""
    }
    const [formData, setFormData] = useState(emptyForm)

    /////////////////////////////
    // Functions
    /////////////////////////////

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        setFormData(emptyForm)
    }

    /////////////////////////////
    // Render
    /////////////////////////////

    return (
        <>
            <h2>ADD A NEW SONG</h2>
            <form
                onSubmit={props.handleSubmit()}
            >
                <p>TITLE</p>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                ></input>
                <p>ARTIST</p>
                <input
                    type="text"
                    name="artist"
                    onChange={handleChange}
                    value={formData.artist}
                ></input>
                <p>TIME</p>
                <input
                    type="text"
                    name="time"
                    onChange={handleChange}
                    value={formData.time}
                ></input>
                <input
                    type="submit"
                    value="ADD NEW SONG"
                ></input>
            </form>
        </>
    )
}

export default AddSong