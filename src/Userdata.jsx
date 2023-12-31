import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Userdata.scss";

const Userdata = () => {
  const [userData, setUserData] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://64aed2eec85640541d4dc54a.mockapi.io/practice"
      );
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `https://64aed2eec85640541d4dc54a.mockapi.io/practice/${id}`,
        updatedData
      );
      console.log(response.data); // Optional: Log the response data if needed
      fetchData(); // Refresh the data after successful edit
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsDeleting(true); // Set deleting state to true

      const response = await axios.delete(
        `https://64aed2eec85640541d4dc54a.mockapi.io/practice/${id}`
      );
      console.log(response.data); // Optional: Log the response data if needed
      fetchData(); // Refresh the data after successful delete
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false); // Set deleting state back to false
    }
  };

  return (
    <div className="userdata-container">
      <h1 id="hding">User Data</h1>
      <Link to="/" className="previous-button">
        ⬅ Previous page
      </Link>
      {isDeleting ? (
        <div className="loader">
          <p>Deleting...</p>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() =>
                      handleEdit(user.id, {
                        name: "Updated Name",
                        number: "Updated Number",
                        email: "Updated Email",
                      })
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Userdata;
