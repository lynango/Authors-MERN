import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OneAuthor = (props) => {

    const { id } = useParams();
    const [oneAuthor, setOneAuthor] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); 

    return (
        <div>
            <header>{oneAuthor.name}</header>
            <Link to={`/`}>Home</Link>
        </div>
    );
};

export default OneAuthor;