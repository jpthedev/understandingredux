import { ICE_CREAM } from './iceCreamType';

const initialState = {
    numOfCounts: 20
};

const iceCreamReducer = ((state = initialState, action) => {
    switch(action.type) {
        case ICE_CREAM:
            return {
                ...state,
                numOfCounts: state.numOfCounts - 1
            }
        default:
            return state
    }
});

export default iceCreamReducer;

