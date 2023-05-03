function GameOverModal({ result, color, setGameOverModal }) {
    switch (result) {
        case 'CHECKMATE':
            return (
                <>
                    <div onClick={() => { setGameOverModal(false) }} className="modalBackground">
                        <div onClick={(e) => { e.stopPropagation() }} className="modalContainer" id="aboutModal">
                            <button className="closeBtn" onClick={() => { setGameOverModal(false) }}>&times;</button>
                            <div className="modal-title">{color === 'white' ? 'Black' : 'White'} Zafer !</div>
                            <button onClick={() => { window.location.reload(true); }}>Yeni Oyun</button>
                        </div>
                    </div>
                </>
            )
        case 'STALEMATE':
            return (
                <>
                    <div onClick={() => { setGameOverModal(false) }} className="modalBackground">
                        <div onClick={(e) => { e.stopPropagation() }} className="modalContainer" id="aboutModal">
                            <button className="closeBtn" onClick={() => { setGameOverModal(false) }}>&times;</button>
                            <div className="modal-title">Oyun bir çıkmazda sona erdi</div>
                            <button onClick={() => { window.location.reload(true); }}>Yeni Oyun</button>
                        </div>
                    </div>
                </>
            )
        default:
            return "404 Hata";
    }
}

export default GameOverModal;