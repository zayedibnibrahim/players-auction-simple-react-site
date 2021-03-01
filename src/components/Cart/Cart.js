import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const cartData = props.selectedPlayer;
    const totalCost = cartData.reduce((total, players) => total + players.price, 0);

    //Players List
    const [playersInCart, setPlayersInCart] = useState([]);
    useEffect(() =>{
        setPlayersInCart(cartData)
    })
    return (
        <div>
            <h5>Total Players Selected : {props.selectedPlayer.length}</h5>
            <p>Total Cost : ${totalCost}</p>
            <h5>Selected Players List:</h5>
                {
                    playersInCart.map(playerInCart => 
                        <div className="added-player">
                            <p key={playerInCart.id}>Name: {playerInCart.first} {playerInCart.last}</p>
                            <p key={playerInCart.id}>Price: ${playerInCart.price}</p>
                        </div>
                    )
                }
        </div>
    );
};

export default Cart;