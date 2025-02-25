import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setListOfUsers(response.data)
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération des utilisateurs", error)
        })
    }, []);
    return (
        <div style={{
            padding: "20px",
            fontFamily: "Arial"
        }}>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {listOfUsers.map((user) => (
                    <li key={user.id}><strong>{user.name}</strong> - {user.email}</li>
                ))}
            </ul>
        </div>
    )
};

export default UserList;