const i = {
    result: 0
}
export const Reducer = (state = i, action) => {
    switch (action.type) {
        case "deposite":
            return {
                ...state,
                result: state.result + action.payload,

            }
        case "withdraow":
            return {
                ...state,
                result: state.result - action.payload,
            }
        default:
            return state;

    }
}