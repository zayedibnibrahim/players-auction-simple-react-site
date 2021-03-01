import React from 'react';
import './PlayerBox.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const PlayerBox = (props) => {
    console.log(props.playerData)
    const {first, last, price, age, position, picture} = props.playerData;
    return (
        <div className="card">
            <img src={picture} alt="players Image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
};

export default PlayerBox;