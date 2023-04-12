import Head from "next/head";
import LoginForm from "@/component/LoginForm/LoginForm";
import styles from '../styles/Home.module.css'

const LoginPage = () => {
    return (
        <div className={styles.contain_login}>
        <Head>
        <title>Login</title>
        </Head>
        <div className={styles.div_log}>
        <h1>Login</h1>

            <LoginForm/>
        </div>
        
        </div>
    );
};

export default LoginPage