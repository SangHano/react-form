import { useState } from "react";


const API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`;

const SignUpForm = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
     
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('There was an issue with signing up.');
            }

            const result = await response.json();
            console.log({Response: result, Username: username});  

            if (result && result.token) {
                setToken(result.token);
                setUsername("");
                setPassword("");
            }

        } catch (error) {
            setError(error.message);
        }
    };
 
    return (
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Username: <input value={username} onChange={(event) => setUsername(event.target.value)} /></label>
                <label>Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
                <button>Submit</button>
            </form>
        </>
    );
}

export default SignUpForm;