import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom";


const AddAuthor = (props) => {
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", {
            name
        })
        .then((res) => {
            console.log(res.data);
                setName("");
                navigate("/"); 
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        });
    }

    return (
        <div>
            <header>Add an Author</header>
            <form onSubmit={submitHandler}>
                <div className='form-fields'>
                    <label htmlFor='name'>Name: </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        type="text"
                        />
                </div>
                
                {errors.name ? <span>{errors.name.message}</span> : null}

                <button class="mx-2 mt-4 btn btn-primary" type="submit" value="AddAuthor">Submit</button>
                <button class="mx-2 mt-4 btn btn-outline-secondary"><Link to={`/`}>Cancel</Link></button>
            </form>
        </div>
    )
}

export default AddAuthor;