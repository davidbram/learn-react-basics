const redux = require('redux');
const combineReducers = redux.combineReducers;
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () => (
    {
        type: BUY_CAKE,
        info: 'First redux store'
    }
)

const buyIceCream = () => (
    {
        type: BUY_ICECREAM,
        info: 'Second redux store'
    }
)

const initialState = {
    numOfCakes: 10
}

const cakeState = {
    numOfCakes: 10
}

const iceCreamState = {
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes: state.numOfCakes - 1
            };
    
        default:
            return state;
    }
}

const cakeReducer = (state = cakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes: state.numOfCakes - 1
            };
    
        default:
            return state;
    }
}

const iceCreamReducer = (state = iceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                numOfIceCreams: state.numOfIceCreams - 1
            };
    
        default:
            return state;
    }
}

const rootReducer = combineReducers(
    {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
);

const store = redux.createStore(rootReducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();