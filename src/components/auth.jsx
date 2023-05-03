import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import '../css/Auth.css';

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signUp = async () => {
        try {
            // Check if the email address is already in use
            const existingUser = await auth.fetchSignInMethodsForEmail(email);
            if (existingUser.length) {
                alert('Bu e-posta adresi zaten kullanımda.');
                return;
            }

            // Create a new user with the provided email and password
            await createUserWithEmailAndPassword(auth, email, password);

            setTimeout(() => {
                navigate('/game');
            }, 2000);
        } catch (err) {
            alert('Lütfen tekrar kontrol ediniz: ' + err);
        }
    };

    const signUpWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            setTimeout(() => {
                navigate('/game');
            }, 2000);
        } catch (err) {
            alert(err);
        }
    };

    const loginPagePush = () => {
        navigate('/login');
        location.reload();
    };

    return (
        <div className="auth-container">
            <h2>Kayıt Ol </h2>
            <input className="auth-input" type="email" placeholder="E-posta" onChange={(e) => setEmail(e.target.value)} />
            <input className="auth-input" type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
            <button className="auth-button" onClick={signUp}>
                Kayıt Ol
            </button>
            <button className="auth-button" onClick={signUpWithGoogle}>
                Google ile Kayıt Ol
            </button>
            <button className="auth-button" onClick={loginPagePush}>
                Mevcut hesaba giriş yap
            </button>
        </div>
    );
};
