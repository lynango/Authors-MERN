import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from "react-router-dom";
import DeleteButton from './DeleteButton';

const UpdateAuthor = (props) => {
    const { id } = useParams(); 
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const [oneAuthor, setOneAuthor] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setOneAuthor(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // Delete method
    const deleteFilter = id => {
        setOneAuthor(oneAuthor.filter(oneAuthor => oneAuthor._id !== id))
    }

    const updateAuthor = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/"); // this will take us back to the Home page
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <div>
            <header>Edit this Author</header>
            <form onSubmit={updateAuthor}>
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

                <button class="mx-2 mt-2 btn btn-primary" type="submit" value="UpdateAuthor">Update</button>
                <button class="mx-2 mt-2 btn btn-outline-secondary"><Link to={`/`}>Cancel</Link></button>
                <DeleteButton id={oneAuthor._id} successCallback={()=> navigate("/")} />
            </form>
        </div>
    )
}
export default UpdateAuthor;