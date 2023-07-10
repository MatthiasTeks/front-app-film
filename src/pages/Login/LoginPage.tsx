import React, { FC, useContext } from 'react'
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "../../components/Button/Button";
import { InputComponent } from "../../components/Input/InputComponent";
import './LoginPage.css';

export const LoginPage: FC = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext is not defined');
    }

    const { email, setEmail, password, setPassword, handleSubmit } = authContext;

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
                    <div className="holder-input">
                        <InputComponent
                            type="email"
                            label="email"
                            value={email}
                            onChange={(value) => setEmail(value)}
                            required={true}
                            autoComplete="username"
                        />
                        <InputComponent
                            type="password"
                            label="password"
                            value={password}
                            onChange={(value) => setPassword(value)}
                            required={true}
                            autoComplete="current-password"
                        />
                    </div>
                    <Button text="Connexion" type="submit" category='primary-btn' />
                </form>
            </div>
        </>
    )
}