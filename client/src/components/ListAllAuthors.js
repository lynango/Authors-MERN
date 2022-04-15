import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';

const ListAllAuthors = (props) => {
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => console.log(err));
    }, []); 

    // Delete Method
    const deleteFilter = id => {
        setAuthorList(authorList.filter(author => author._id !== id))
    }

    return (
        <div>
            <header>Favorite Authors: </header>
            <Link to={`/new`}> Add an Author</Link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {authorList?
                    authorList.map((author, index)=>(
                    <tr key={index}>
                        <td><Link to={`/${author._id}`}>{author.name}</Link></td>
                        <td>
                            <button class="mx-2 mt-0 btn btn-light"><Link to={`/edit/${author._id}`}> Edit</Link></button>
                            <DeleteButton id={author._id} successCallback={()=>deleteFilter(author._id)}/>
                        </td>
                    </tr>
                    ))
                    :null
                }
                </tbody>
            </table>
        </div>
    );
};

export default ListAllAuthors;