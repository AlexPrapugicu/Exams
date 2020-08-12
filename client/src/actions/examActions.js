import axios from "axios"
import {examsTypes} from "./examTypes";
import {authHeader} from "../shared/authHeader";
import {sorter} from "../shared/util";

function getExamsUrl() {
    return "http://localhost:8080/api/exams";
}

function getExamUrl(id) {
    return `http://localhost:8080/api/exams/${id}`;
}

function examsFetchFailure(error) {
    return {
        type: examsTypes.FETCH_EXAMS_FAILURE,
        payload: error
    }
}

function examFetchFailure(error) {
    return {
        type: examsTypes.FETCH_EXAM_FAILURE,
        payload: error
    }
}

function examAddFailure(error) {
    return {
        type: examsTypes.ADD_EXAM_FAILURE,
        payload: error
    }
}

function examDeleteFailure(error) {
    return {
        type: examsTypes.DELETE_EXAM_FAILURE,
        payload: error
    }
}

function examEditFailure(error) {
    return {
        type: examsTypes.EDIT_EXAM_FAILURE,
        payload: error
    }
}

export const startEditing = () => dispatch => {
    return dispatch({
        type: examsTypes.EDITING_ON,
        payload: true
    });
};

export const stopEditing = () => dispatch => {
    return dispatch({
        type: examsTypes.EDITING_OFF,
        payload: false
    });
};


export const fetchExams = () => async dispatch => {
    try {
        const response = await axios.get(getExamsUrl(), {
            headers: authHeader()
        });
        return await dispatch({
            type: examsTypes.FETCH_EXAMS,
            payload: response.data
        });
    } catch (error) {
        dispatch(examsFetchFailure(error));
    }
};

export const fetchExam = (id) => async dispatch => {
    try {
        const response = await axios.get(getExamUrl(id), {
            headers: authHeader()
        });

        return await dispatch({
            type: examsTypes.FETCH_EXAM,
            payload: response.data
        });
    } catch (e) {
        dispatch(examFetchFailure(e));
    }
};

export const addExam = (exam) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:8080/api/exams", exam, {
            headers: authHeader()
        });
        return await dispatch({
            type: examsTypes.ADD_EXAM,
            payload: response
        });
    } catch (e) {
        dispatch(examAddFailure(e));
    }
};


export const deleteExam = (id) => async dispatch => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/exams/${id}`, {
            headers: authHeader()
        });

        return await dispatch({
            type: examsTypes.DELETE_EXAM,
            payload: response
        });
    } catch (error) {
        dispatch(examDeleteFailure(error));
    }
};


export const editExam = (exam) => async dispatch => {
    try {
        const urlToPut = "http://localhost:8080/api/exams/" + exam.id;
        const response = await axios.put(urlToPut, exam, {
            headers: authHeader()
        });

        return await dispatch({
            type: examsTypes.EDIT_EXAM,
            payload: response
        });
    } catch (error) {
        console.log(error.response);
        dispatch(examEditFailure(error));
    }
};

export const filter = (array, event) => dispatch => {

    const {name, value} = event.target;
    console.log("Name ~ Value: ", name, value);
    return dispatch({
        type: examsTypes.FILTER_EXAMS,
        payload: value === "" ? array : array.filter(exam => exam[`${name}`].toLowerCase().includes(value.toLowerCase()))
    });
};


export const sort = (array, event) => dispatch => {
    const {name, value} = event.target;
    console.log("Name", name);
    console.log("Value: ",value);
    const sortingBy = value.split(' ').slice(0,-1).join(' ');
    const order = value.split(' ').slice(-1).join(' ');
    return dispatch({
        type: examsTypes.SORT_EXAMS,
        payload: value === "" ? array : array.sort(sorter(sortingBy,order))
    });
};




