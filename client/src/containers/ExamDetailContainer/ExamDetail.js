import React, {useEffect} from "react";
import ExamDetailCard from "../../components/exams/ExamDetailCard";
import {useParams,useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {deleteExam, fetchExam, startEditing, stopEditing} from "../../actions/examActions";
import Spinner from "../../shared/Spinner";
import ExamDetailEdit from "../../components/exams/ExamDetailEdit";
import {ExamDetailWrapper} from "./ExamDetail.styled";
import {getUserRole} from "../../shared/util";

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
        <ExamDetailWrapper>
            {
                !editMode ?
                    exam ? <ExamDetailCard exam={exam}
                                           startEdit={startEditingHandler}
                                           userRole={getUserRole}/>
                                           : <Spinner/>
                    : exam ? <ExamDetailEdit exam={exam}
                                             stopEdit={stopEditingHandler}
                                             deleteExam={deleteExamHandler}
                                             userRole={getUserRole}/> : history.goBack()
            }
        </ExamDetailWrapper>
    );
}

export default ExamDetail;
