import React from 'react';
import './PlayerBox.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const PlayerBox = (props) => {

    const {first, last, price, age, Position, picture} = props.playerData;
    const btnHandler = props.buttonHandler;
    return (
        <div className="card">
            <img src={picture} alt="Players"/>
            <div className="card-body">
                <h5 className="card-title">{first} {last}</h5>
                <p className="card-text">Position: {Position}</p>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Price: ${price}</p>
                <button onClick={() => btnHandler(props.playerData)} className="btn btn-danger">Add To Final List</button>
            </div>
        </div>
    );
};
//player box
export default PlayerBox;