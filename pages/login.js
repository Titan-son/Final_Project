import Head from "next/head";
import LoginForm from "@/component/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <>
        <Head>
        <title>Login</title>
        </Head>
        <h1>Login</h1>
        <LoginForm/>
        </>
    );
};

export default LoginPage