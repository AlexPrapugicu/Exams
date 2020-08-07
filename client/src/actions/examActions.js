import axios from "axios"
import {examsTypes} from "./examTypes";

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

export const startEditing = () => dispatch =>{
    return dispatch({
        type: examsTypes.EDITING_ON,
        payload: true});
};

export const stopEditing = () => dispatch =>{
    return dispatch({
        type: examsTypes.EDITING_OFF,
        payload: false});
};


export const fetchExams = () => async dispatch => {
  try{
      const response = await axios.get(getExamsUrl());
      return await dispatch({
          type: examsTypes.FETCH_EXAMS,
          payload: response.data
      });
  }  
  catch (error) {
      dispatch(examsFetchFailure(error));
  }
};

export const fetchExam = (id) => async dispatch => {
  try {
      const response = await axios.get(getExamUrl(id));

      return await dispatch({
         type: examsTypes.FETCH_EXAM,
         payload: response.data
      });
  }
  catch (e) {
      dispatch(examFetchFailure(e));
  }
};

export const addExam = (exam) => async dispatch => {
  try {
      const response = await axios.post("http://localhost:8080/api/exams",exam);
      return await dispatch({
         type: examsTypes.ADD_EXAM,
         payload: response
      });
  }
  catch (e) {
      dispatch(examAddFailure(e));
  }
};


export const deleteExam = (id) => async dispatch => {
  try {
      const response = await axios.delete(`http://localhost:8080/api/exams/${id}`);

      return await dispatch({
          type: examsTypes.DELETE_EXAM,
          payload: response
      });
  }
  catch (error) {
      dispatch(examDeleteFailure(error));
  }
};


export const editExam = (exam) => async dispatch => {
    try {
        const urlToPut = "http://localhost:8080/api/exams/" + exam.id;
        const response = await axios.put(urlToPut,exam);

        return await dispatch({
            type: examsTypes.EDIT_EXAM,
            payload: response
        });
    }
    catch (error) {
        console.log(error.response);
        dispatch(examEditFailure(error));
    }
};
