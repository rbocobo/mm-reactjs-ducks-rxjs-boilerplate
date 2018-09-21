export const FETCH_WHISKIES = 'FETCH_WHISKYS';
export const FETCH_WHISKIES_SUCCESS = 'FETCH_WHISKYS_SUCCESS';
export const FETCH_WHISKIES_FAILURE = 'FETCH_WHISKYS_FAILURE';

const initialState = {
    whiskies: [],
    isLoading: false,
    error: false
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_WHISKIES:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_WHISKIES_SUCCESS:
            return {
                whiskies: [...action.payload],
                isLoading: false,
                error: null
            }
        case FETCH_WHISKIES_FAILURE:
            return {
                whiskies: [],
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const fetchWhiskies = () => ({
    type: FETCH_WHISKIES,
});

export const fetchWhiskiesSuccess = (whiskies) => ({
    type: FETCH_WHISKIES_SUCCESS,
    payload: whiskies
});

export const fetchWhiskiesFailure = (message) => ({
    type: FETCH_WHISKIES_FAILURE,
    payload: message
});
