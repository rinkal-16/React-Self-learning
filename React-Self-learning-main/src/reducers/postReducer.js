import { FETCH_POSTS, NEW_POSTS, DELETE_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

// export default function postReducer(state = initialState, action) {
//     switch (action.type) {
//         case FETCH_POSTS:
//             console.log('reducer');
//             return {
//                 ...state,
//                 items: action.payload
//             }
//         case NEW_POSTS:
//             return {
//                 ...state,
//                 item: action.payload
//             }
//         case DELETE_POST:
//             return {
//                 ...state,
//                 items: state.items.filter((item, id) => id !== action.payload)
//             }

//         default:
//             return state;
//     }
// }

const postReducer = (state = initialState, action) => {
    if(action.type === FETCH_POSTS) {
        console.log('reducer');
        return {
            ...state,
            items: action.payload
        }
    } 
    if(action.type === NEW_POSTS) {
        return {
            ...state,
            item: action.payload
        }
    } 
    if(action.type === DELETE_POST) {
        return {
            ...state,
            items: state.items.filter((item, id) => id !== action.payload)
        }
    }
    else {
        return state
    }
}
export default postReducer;