import { useState } from "react";
import Loginservice from "../../Services/LoginService";

function Auth() {

    const [username , setUsername] = useState(null);
    const [password , setPassword] = useState(null);
    const [email , setEmail] = useState();

    async function handleSubmit(e){
        e.preventDefault();
        console.log(username , email , password)
        if(username && password){
            const userLoginObject = {
                "email":email,
                "username":username,
                "password":password
            };

            const response = await Loginservice(userLoginObject);
            console.log(response)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="Email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="Email"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}      
                        />
                    </div>

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
                                setUsername(e.target.value);
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
