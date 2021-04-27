import { initialize } from "workbox-google-analytics"

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = initialize, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;