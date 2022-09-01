const initialState = {
    books: [ ],
    loading: true,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                error: false,
                books: action.payload,
            };
        case "FETCH_BOOKS_FAILURE":
            return{
                ...state,
                error: action.payload,
            }
        case "FETCH_BOOKS_FINALLY":
            return{
                ...state,
                loading: false
            }
        case "FETCH_BOOKS_REQUEST":
            return{
                ...state,
                loading: true,
                error: false,
            }
        default: 
        return state;
    }
}

export default reducer;