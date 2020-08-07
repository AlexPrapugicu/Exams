import React from "react";

function ExamDetailCard({exam,startEdit}) {

    return(
        <div>
            <button onClick={startEdit}>Edit</button>
            <p>What the fufu id: {exam.id}</p>
            <p>What the course : {exam.course}</p>
            <p>What the teacher : {exam.teacher}</p>
            <p>What the session : {exam.session}</p>
            <p>What the yearOfStudy : {exam.yearOfStudy}</p>
            <p>What the faculty : {exam.faculty}</p>
            <p>What the domain : {exam.domain}</p>
        </div>
    );
}
export default ExamDetailCard;
