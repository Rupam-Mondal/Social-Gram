import { useState } from "react";
import Signupservice from "../../Services/Signupservice";
import { useNavigate } from "react-router";

function Signup() {
    const [email , setEmail] = useState(null);
    const [username , setUsername] = useState(null);
    const [password , setPassword] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(email && username && password){
            const userObject = {
                "username": username,
                "email": email,
                "password": password
            }
            const response = await Signupservice(userObject);
            console.log(response);
            if(response.success){
                navigate('/');
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
                            required
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}  
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
                            required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;