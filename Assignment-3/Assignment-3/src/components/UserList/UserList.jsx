import React, { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    // Fetch users
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Users List</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {users.map((user) => (
                    <li
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                        style={{
                            padding: "10px",
                            margin: "5px 0",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            cursor: "pointer",
                            width: "200px",
                            display: "inline-block",
                            backgroundColor:
                                selectedUser && selectedUser.id === user.id
                                    ? "#e0f7fa"
                                    : "#fff",
                        }}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>

            {selectedUser && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        border: "1px solid #007BFF",
                        borderRadius: "10px",
                        backgroundColor: "#f0f8ff",
                    }}
                >
                    <h2>{selectedUser.name}</h2>
                    <p>
                        <strong>Username:</strong> {selectedUser.username}
                    </p>
                    <p>
                        <strong>Email:</strong> {selectedUser.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {selectedUser.phone}
                    </p>
                    <p>
                        <strong>Website:</strong> {selectedUser.website}
                    </p>
                    <p>
                        <strong>Company:</strong> {selectedUser.company.name}
                    </p>
                    <p>
                        <strong>Address:</strong>{" "}
                        {`${selectedUser.address.street}, ${selectedUser.address.city}`}
                    </p>
                </div>
            )}
        </div>
    );
};

export default UserList;
