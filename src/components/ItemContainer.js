import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item} </h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    );
}
// 'mapStateToProps' : it takes second argument as the prop that has been passed to component directly in App.js
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams;
    return {
        item: itemState,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream());
    return {
        buyItem: dispatchFunction
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

/*If we wish to pass only mapDispatchToProps and not the  mapStateToProps then we can use null as the first argument.*/
// export default connect(null, mapDispatchToProps)(ItemContainer);
