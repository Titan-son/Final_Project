import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "@/Redux/authSlice"

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();
        // Valider l'authentification de l'utilisateur (à implémenter)
        dispatch(login());
    };

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
            />
            <br />
            <button type="submit">Login</button>
        </form>
    );


};

export default LoginForm;
