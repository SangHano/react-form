import React, { useState } from 'react';
const API_URL ="https://fsa-jwt-practice.herokuapp.com/signup"
const Authenticate =({ token })=>{
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const authenticate = async () => {
        try {
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Error during authentication.');
            }

            setSuccessMessage('Success Message');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Authentication</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={authenticate}>Authenticate Token</button>
        </div>
    );
}

export default Authenticate

