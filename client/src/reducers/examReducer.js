import initialState from "./initialState";
import {examsTypes} from "../actions/examTypes";

export default function (state = initialState.examsObj, action) {
    switch (action.type) {

        case examsTypes.FETCH_EXAMS:
            console.log("FETCH_EXAMS TEST: ",action.payload);
            return {
            ...state,
          exams: action.payload
        };
        case examsTypes.FETCH_EXAMS_FAILURE:
            console.log("FETCH_EXAMS_FAILURE TEST : ",action.payload);
            return {
                ...state,
                error: action.payload
            };

          case examsTypes.FETCH_EXAM:
            console.log("FETCH EXAM TEST : ",action.payload);
            return {
                ...state,
                exam: action.payload,
                editedExam: action.payload
            };
            case examsTypes.FETCH_EXAM_FAILURE:
            console.log("FETCH EXAM TEST : ",action.payload);
            return {
                ...state,
                error: action.payload
            };

        case examsTypes.EDITING_ON:
            console.log("EDITING ON: ",action.payload);
            return {
                ...state,
                editMode: action.payload
            };
        case examsTypes.EDITING_OFF:
            console.log("EDITING OFF: ",action.payload);
            return {
                ...state,
                editMode: action.payload
            };

        case examsTypes.ADD_EXAM:
            console.log("ADDING EXAM: ",action.payload);
            return {
                ...state,
            };
        case examsTypes.ADD_EXAM_FAILURE:
            console.log("ADDING EXAM FAILED: ",action.payload);
            return {
                ...state,
                error: action.payload
            };

            case examsTypes.DELETE_EXAM:
            console.log("DELETING EXAM: ",action.payload);
            return {
                ...state,
                editMode: false,
            };
        case examsTypes.DELETE_EXAM_FAILURE:
            console.log("DELETING EXAM FAILED: ",action.payload);
            return {
                ...state,
                error: action.payload
            };

          case examsTypes.EDIT_EXAM:
            console.log("EDITING EXAM : ",action.payload);
            return {
                ...state,
                editMode: false,
            };

            case examsTypes.EDIT_EXAM_FAILURE:
            console.log("EDITING EXAM FAILED: ",action.payload);
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
