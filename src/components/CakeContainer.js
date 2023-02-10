import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes : {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake()),
    };
};

export default connect(mapStateProps, mapDispatchToProps)(CakeContainer);


//The 'connect' function connects react app with redux store 