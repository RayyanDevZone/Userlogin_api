import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Userlogin.scss';

const Userlogin = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();

  function inputName(e) {
    setName(e.target.value);
  }

  function inputNumber(e) {
    setNumber(e.target.value);
  }

  function inputEmail(e) {
    setEmail(e.target.value);
  }

  const postData = async () => {
    try {
      // Check if any of the fields are empty
      if (!name || !number || !email) {
        alert("Please enter all details.");
        return;
      }
  
      setIsLoading(true); // Set loading state to true
  
      const response = await axios.post(
        "https://64aed2eec85640541d4dc54a.mockapi.io/practice",
        {
          name: name,
          number: number,
          email: email,
        }
      );
  
      console.log(response.data); // Optional: Log the response data if needed
  
      // Navigate to '/Userdata' after successful post
      navigate("/Userdata");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };
  

  return (
    <div className="main">
      <nav id="navbar">
        <img src="https://www.shutterstock.com/image-vector/spy-agent-hacker-anonymous-white-600w-1722014434.jpg" />
        <h1 id="logo">The WhiteHat</h1>
      </nav>
  
      {isLoading ? (
        <div className="loader">
          <p>Submitting...</p>
        </div>
      ) : (
      <form>
        <div>
          <img src="https://w0.peakpx.com/wallpaper/991/317/HD-wallpaper-hacker-black-hat-code-computer-hack-hacking-mask-script-virus-thumbnail.jpg" id="formImg" alt=""/>
        </div>
        <div id="inpdetails">
          <h1 id="head">Sign up...</h1>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required // Make the field required
            onChange={inputName}
          />
          Contact:
          <input
            type="number"
            name="number"
            placeholder="Enter your Number"
            required // Make the field required
            onChange={inputNumber}
          />
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required // Make the field required
            onChange={inputEmail}
          />
          <button type="button" onClick={postData}>
            Submit
          </button>
        </div>
      </form>)}
    </div>
  );
};

export default Userlogin;
