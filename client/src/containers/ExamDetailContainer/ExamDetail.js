import React, {useEffect} from "react";
import ExamDetailCard from "../../components/exams/ExamDetailCard";
import {useParams,useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {deleteExam, fetchExam, startEditing, stopEditing} from "../../actions/examActions";
import Spinner from "../../shared/Spinner";
import ExamDetailEdit from "../../components/exams/ExamDetailEdit";

function ExamDetail() {
    const {id} = useParams();

    const history = useHistory();
    const exam = useSelector(state => state.exams.exam);
    const editMode = useSelector(state => state.exams.editMode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExam(id));
    }, []);


    function startEditingHandler() {
        dispatch(startEditing());
    }

    function stopEditingHandler() {
        dispatch(stopEditing());
    }

    function deleteExamHandler() {
        dispatch(deleteExam(exam.id));
    }

    return (
        <div>
            {
                !editMode ?
                    exam ? <ExamDetailCard exam={exam} editMode={editMode} startEdit={startEditingHandler}/> : <Spinner/>
                    : exam ? <ExamDetailEdit exam={exam} editMode={editMode} stopEdit={stopEditingHandler} deleteExam={deleteExamHandler}/> : history.goBack()
            }
            {/*{exam ? <ExamDetailCard exam={exam} editMode={editMode} startEdit={startEditingHandler}/> : <Spinner/>}*/}

        </div>
    );
}

export default ExamDetail;
