const initialState = {
    data: [],
};

const todos = (state = initialState, action)=>{
    console.log("state-"+state.data)
    console.log("action-"+action.type)
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                data:[
                    ...state.data,
                    {
                        message:action.message,
                        id:action.id,
                    }
                ]
            };
        case 'DELETE_TODO':
            const todos = state.data.filter((todo) => todo.id !== action.id)
            return {
                ...state,
                data: todos,
            };
        default :
        return state;
        
    }
};

export default todos