import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addExam} from "../../actions/examActions";
import {useHistory} from "react-router-dom"

function ExamAddForm() {


    let exam = useSelector(state => state.exams.editedExam);
    const dispatch = useDispatch();

    const history = useHistory();

    console.log(history);

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addExam(exam));
        history.goBack("/exams");
    }

    function handleInputChange(event) {
        const {name, value} = event.target;
        exam = {
            ...exam,
            [name] : value
        };
    }

console.log(exam);
return(
    <div style={{textAlign: "center",margin: "5%"}}>
        <form onSubmit={handleSubmit}>
            <div style={{display: "flex", flexDirection:"column", width:"50%"}}>
                <label>Course</label>
                <input
                    type="text"
                    onChange={handleInputChange}
                    defaultValue={exam.course} name="course"/>
                <label>Faculty</label>
                <input type="text" onChange={handleInputChange} defaultValue={exam.faculty} name="faculty"/>
                <label>Year of Study</label>
                <input type="text" onChange={handleInputChange} defaultValue={exam.yearOfStudy} name="yearOfStudy"/>
                <label>Teacher</label>
                <input type="text" onChange={handleInputChange} defaultValue={exam.teacher} name="teacher"/>
                <label>Session</label>
                <input type="text" onChange={handleInputChange} defaultValue={exam.session} name="session"/>
                <label>Domain</label>
                <input type="text" onChange={handleInputChange} defaultValue={exam.domain} name="domain"/>
                <button type="button" onClick={() => console.log(exam)}>Check</button>
                <button type="submit">Add exam</button>
            </div>
        </form>
    </div>
);
}

export default ExamAddForm;
