import React, { Component } from "react";
import { Navigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import "./LogIn.css"


const LogIn = () =>{
    let [urlSearchParams] = useSearchParams() // get access to the URL query string parameters

    //const [credentials, setCredentials] = React.useState("");
    //const [password, setPassword] = React.useState("");

    // create state variables to hold username and password
    const [response, setResponse] = useState({}) // the API will return an object with a JWT token, if the user logs in successfully
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const qsError = urlSearchParams.get("error") // get any 'error' field in the URL query string
        if (qsError === "protected")
          setErrorMessage("Please log in to view our fabulous protected content.")
    }, [])

    useEffect(() => {
        // if the user is logged-in, save the token to local storage
        if (response.success && response.token) {
          console.log(`User successfully logged in: ${response.username}`)
          localStorage.setItem("token", response.token) // store the token into localStorage
        }
    }, [response])
    const handleSubmit = (event) => {
        event.preventDefault();
        try{
            const requestData={
                username: e.target.username.value,
                password: e.target.password.value,
            }
        
        
        //POST request to for authentication
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND}/login`,
            requestData
        )

        //store the post request in the data state variable
        console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`)
        setResponse(response.data)
        } catch(err){
            setErrorMessage(" Username or Password is incorrect. Try Again! Check out the usernames in the server's user_data.js")
        }

    }

    if (!response.success)
        return (
            <div id="Challenge" style={{ backgroundImage: "url('/images/background.png')" }}>
                {errorMessage ? <p className="error">{errorMessage}</p> : ""}
                <h1>Log in</h1>

                <form onSubmit={handleSubmit}>
                    
                    <label>
                        Username:
                        <input
                        name="name"
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required />
                    </label>
                    
                    <label>
                        Password:
                        <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                    </label>
                    <button id="login_button">Log In</button>


                </form>
        
            </div>
            );
            else return <Navigate to="/protected" />
        }

export default LogIn;