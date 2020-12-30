export const ADD = 'add'
export const REMOVE = 'remove'
export const CLEAR = 'clear'
export const REFRESH = 'refresh'

export const initialState = []
export const reducer = (state, action) => {
    switch ( action.type ) {
        case ADD:
            if( !state.includes(action.payload)){
                return [...state, action.payload]
            }
            return state
        case REMOVE:
            return state.filter((i) => i !== action.payload)
        case CLEAR:
            return initialState
        case REFRESH:
            return action.payload
        default:
            throw new Error('No action type!')
        }
}