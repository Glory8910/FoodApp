const initialState = {
    user: {
        address:"",
        email:"",
        name:"",
        phone:""
    }
};

const userDetailsReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                user: action.payload,
            };
      
        default:
            return state;
    }
};

export default userDetailsReducer;