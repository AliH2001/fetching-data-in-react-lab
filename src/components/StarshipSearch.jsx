import { useState } from "react"

const StarshipSearch = (props) => {
    const [formData, setFormData] = useState('')

    const handleChange = (e) => {
        setFormData(e.target.value)
    }
    const handleSubmit = (e) => {
        //this takes it to the App.jsx
        e.preventDefault()
        props.handleSearch(formData)
    }

    return (

        <>
            <form onSubmit={handleSubmit}>

                <label> Search for starship </label>
                <input type="text"
                    onChange={handleChange}

                />
                <button type="submit"> submit </button>

            </form>



        </>

    )


}

export default StarshipSearch