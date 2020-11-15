import { ADD_QUESTION } from "../actions/actions"

const initialState = { 
    questions: 
    [{question:"val", answer:"true", category: "french", subcategory: "girl"},
    {question:"thib", answer:"false", category: "french", subcategory: "boy"}] 
}

const submitQuestion = (state = initialState , action) => {
    let nextState
    switch (action.type) {
        case ADD_QUESTION:
            nextState= [
                ...state,
                action.data
            ]
            return nextState || state;
        default:
            return state;
    }
}

export default submitQuestion;