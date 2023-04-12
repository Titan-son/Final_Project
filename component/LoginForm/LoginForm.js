import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/Redux/authSlice";
import { useRouter } from 'next/router';
import Link from "next/link";
import styles from './LoginForm.module.css'

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (e) => {

        e.preventDefault();
        // Valider l'authentification de l'utilisateur (à implémenter)
        dispatch(login());

        router.push('/');
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className={styles.div_login}>
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
            { (password.length > 5 && email.length > 5 && email.includes('@'))? 
            <Link href="/">
            <button >Login</button>
            </Link>:
            <Link href="/login">
            <button >Login</button>
            </Link>}
            </div>
            
        </form>
    );


};

export default LoginForm;
