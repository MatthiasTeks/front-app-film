import React, { useContext } from 'react'

import { AuthContext } from "../../contexts/AuthContext";

import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

import './Login.css';

const Login = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext is not defined');
    }

    const { email, setEmail, password, setPassword, handleSubmit } = authContext;

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(e)
    }

    return (
        <>
            <div className='admin-log'>
                <h1>LES FILMS DE LA BANDE</h1>
                <h2>PANEL ADMINISTRATEUR</h2>
                <form className='admin-access flex column' onSubmit={handleFormSubmit}>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Mot de passe'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <Button isBlack={true} text="Connexion" type="submit"/>
                </form>
                <Footer isNewsletterOpen={false} />
            </div>
        </>
    )
}

export default Login