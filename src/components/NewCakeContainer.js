import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes : {props.numOfCakes}</h2>
            <input value={number} type='text' onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    );
}

const mapStateProps = (state) => {
    return {
        // numOfCakes: state.cake.numOfCakes,
        /*For combined root reducer use the key also (start) */
        numOfCakes: state.cake.numOfCakes,
        /*For combined root reducer use the key also (end) */
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number)),
    };
};

export default connect(mapStateProps, mapDispatchToProps)(NewCakeContainer);


//The 'connect' function connects react app with redux store 