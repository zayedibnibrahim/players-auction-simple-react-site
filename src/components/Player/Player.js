import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import PlayerBox from '../PlayerBox/PlayerBox';
import './Player.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Player = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch("https://zayedibnibrahim.github.io/player-data/player-data.json")
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
            <div className="players-container col-md-9 player-grid">
                {
                players.map(player => <PlayerBox key={player.kye} playerData={player}></PlayerBox>)
                }
            </div>
            <div className="player-cart col-md-3">
                <Cart></Cart>
            </div>
            </div>
        </div>
    );
};

export default Player;