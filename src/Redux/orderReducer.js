const initialState = {
    meal: {
        id:"",
        
        name:"",
        image:""
       
    }
};

const orderReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'ADD_MEAL':
            return {
                ...state,
                meal: action.payload,
            };
      
        default:
            return state;
    }
};

export default orderReducer;