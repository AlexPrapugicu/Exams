import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editExam} from "../../actions/examActions";

function ExamDetailEdit({exam,stopEdit,deleteExam}) {

    let editedExam = useSelector(state => state.exams.editedExam);
    const dispatch = useDispatch();


    function inputChangeHandler(event) {
        const {name, value} = event.target;
        editedExam = {
            ...editedExam,
            [name] : value
        };
    }

    function submitHandler(event) {
        event.preventDefault();

        dispatch(editExam(editedExam));
    }


return (
    <div style={{margin: "10%"}}>
        <button onClick={stopEdit}>Stop edit</button>
        <button onClick={deleteExam}>DeleteExam</button>
        <button onClick={() => console.log(editedExam)}>Show edited</button>
    <form onSubmit={submitHandler} style={{ display: "flex", flexDirection: "column", width:"50%"}}>
        <label>course</label>
        <input type="text"
               defaultValue={exam.course}
               name="course"
               onChange={inputChangeHandler}/>
        <label>yearOfStudy</label>
        <input type="text"
               name="yearOfStudy"
               defaultValue={exam.yearOfStudy}
               onChange={inputChangeHandler}/>
        <label>session</label>
        <input type="text"
               name="session"
               defaultValue={exam.session}
               onChange={inputChangeHandler}/>
        <label>teacher</label>
        <input type="text"
               name="teacher"
               defaultValue={exam.teacher}
               onChange={inputChangeHandler}/>
        <label>domain</label>
        <input type="text"
               name="domain"
               defaultValue={exam.domain}
               onChange={inputChangeHandler}/>
        <label>faculty</label>
        <input type="text"
               name="faculty"
               defaultValue={exam.faculty}
               onChange={inputChangeHandler}/>
               <button onClick={() => console.log("editing done")}>Submit</button>
    </form>
    </div>
);
}

export default ExamDetailEdit;
