import {useState} from "react"
const API_URL = (`https://fsa-jwt-practice.herokuapp.com/signup`)
const SignUpForm = ({ setToken }) => {
        const [username, setUsername] = useState("");
         /* const usernameInput = (event) =>{
            const typedInValue = event.target.value;
            setUsername(typedInValue)
         } */
        const [password, setPassword] = useState("");
         /* const passwordInput = (event) =>{
             const typedInValue = event.target.value;
             setPassword(typedInValue)
         } */
        const [error, setError] = useState(null);
         /* const errorInput = (event) =>{
             const typedInValue = event.target.value;
             setError(typedInValue) */
         
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
                    if (result && result.token) {
                        setToken(result.token);
                    }
            
                } catch (error) {
                    setError(error.message);
                }
            };
         
            return (
                <>
                    <h2>Sign Up</h2>
                    {error &&<p>{error}</p>}
                    <form onSubmit ={handleSubmit}>
                        <label>Username:{" "} <input value={username} onChange={(event)=> setUsername(event.target.value)} /></label>
                        <label>Password:{" "} <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} /></label>
                        <button>Submit</button>
                    </form>
                </>
            )

        }

export default SignUpForm