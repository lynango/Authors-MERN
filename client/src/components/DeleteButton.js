import React from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const DeleteButton = (props) => {
    const { id, successCallback } = props;
    const navigate = useNavigate();

    const deleteFilter = e => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                successCallback();
                navigate("/");  
            })
    }
    return (
        <button class="mx-2 mt-0 btn btn-danger" onClick={deleteFilter}>
            Delete
        </button>
    )
}
export default DeleteButton;

