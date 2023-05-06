const defaultState = {
    num:20
}

const reducer = (state = defaultState,)=>{
    return JSON.parse(JSON.stringify(state))
}

export default reducer