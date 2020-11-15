export const ADD_QUESTION = "ADD_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const EDIT_QUESTION = "EDIT_QUESTION";

export const addQuestion = question => {
    return {
        type: ADD_QUESTION,
        data: question
    }
};

export const removeQuestion = question => {
    return {
        type: REMOVE_QUESTION,
        data: question
    }
};

export const editQuestion = question => {
    return {
        type: EDIT_QUESTION,
        data: question
    }
};