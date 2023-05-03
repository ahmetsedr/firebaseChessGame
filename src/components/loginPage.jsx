import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import '../css/Auth.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/game');
        } catch (err) {
            alert('Lütfen tekrar kontrol ediniz: ' + err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate('/game');
        } catch (err) {
            alert(err);
        }
    };

    const singupPagePush = () => {
        navigate('/');
        location.reload();
    }

    return (
        <div className="auth-container">
            <h2>Giriş Yap </h2>
            <input className="auth-input" type="email" placeholder="E-posta" onChange={(e) => setEmail(e.target.value)} />
            <input className="auth-input" type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
            <button className="auth-button" onClick={signIn}>
                Giriş Yap
            </button>
            <button className="auth-button" onClick={signInWithGoogle}>
                Google ile Giriş Yap
            </button>
            <button className="auth-button" onClick={singupPagePush}>
                Üye Ol 🎉
            </button>
        </div>
    );
};
