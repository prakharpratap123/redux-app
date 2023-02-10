import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    // const numOfCakes = useSelector(state => state.numOfCakes)
    /*For combined root reducer use the key also (start) */
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    /*For combined root reducer use the key also (end) */
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes (Using Hooks)-{numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
            {/* <button>Buy Cake</button> */}
        </div>
    )
}

export default HooksCakeContainer