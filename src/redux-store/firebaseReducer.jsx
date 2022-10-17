const defaultState = {
    jsonObj: "hello",
}

export const firebaseReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_DATA":
            return {...state, jsonObj: state.jsonObj + action.firebaseData}
        default:
            return state
    }
 }