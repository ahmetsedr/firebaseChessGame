import React from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from './GitHubIcon';
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    const outPagePush = () => {
        navigate('/');
        window.location.reload(true);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-title">Chess Game</div>
                <div className="navbar-buttons">
                    <button className="navbar-button" onClick={() => window.open("https://github.com/ahmetsedr")}><GitHubIcon /> REPO</button>
                    <button className="navbar-button" onClick={() => { window.location.reload(true); }}>Yeni Oyun</button>
                    <button className="navbar-button" onClick={outPagePush}>Çıkış Yap</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
