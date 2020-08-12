import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editExam} from "../../actions/examActions";
import {
    ExamDetail,
    ExamDetailWrapper, FancyButton, FancyEditForm,
    FancyInput,
    ItemWrapper,
    ListItemStyled,
    ListStyled,
    Separator
} from "./exam.styled";
import {ExamText} from "../../containers/ExamsContainer/exams.styled";

function ExamDetailEdit({exam, stopEdit, deleteExam}) {

    let editedExam = useSelector(state => state.exams.editedExam);
    const dispatch = useDispatch();


    function inputChangeHandler(event) {
        const {name, value} = event.target;
        editedExam = {
            ...editedExam,
            [name]: value
        };
    }

    function submitHandler(event) {
        event.preventDefault();

        dispatch(editExam(editedExam));
    }


    return (
        <ExamDetailWrapper>
            <ExamDetail>
                    <FancyButton onClick={stopEdit}>Stop edit</FancyButton>
                    <FancyButton onClick={deleteExam}>DeleteExam</FancyButton>
                <FancyEditForm onSubmit={submitHandler}>
                    <ListStyled>
                        <Separator>
                            <ListItemStyled>
                                <ExamText>course</ExamText>
                                <ItemWrapper>
                                    <FancyInput type="text"
                                                defaultValue={exam.course}
                                                name="course"
                                                onChange={inputChangeHandler}/>
                                </ItemWrapper>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ExamText>yearOfStudy</ExamText>
                                <ItemWrapper>
                                    <FancyInput type="text"
                                                name="yearOfStudy"
                                                defaultValue={exam.yearOfStudy}
                                                onChange={inputChangeHandler}/>
                                </ItemWrapper>
                            </ListItemStyled>
                        </Separator>
                        <Separator>
                            <ListItemStyled>
                                <ExamText>session</ExamText>
                                <ItemWrapper>
                                    <FancyInput type="text"
                                                name="session"
                                                defaultValue={exam.session}
                                                onChange={inputChangeHandler}/>
                                </ItemWrapper>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ExamText>teacher</ExamText>
                                <ItemWrapper>
                                    <FancyInput type="text"
                                                name="teacher"
                                                defaultValue={exam.teacher}
                                                onChange={inputChangeHandler}/>
                                </ItemWrapper>
                            </ListItemStyled>
                        </Separator>
                        <Separator>
                            <ListItemStyled>
                                <ExamText>domain</ExamText>
                                <ItemWrapper>
                                    <FancyInput type="text"
                                                name="domain"
                                                defaultValue={exam.domain}
                                                onChange={inputChangeHandler}/>
                                </ItemWrapper>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ExamText>faculty</ExamText>
                                <ItemWrapper>
                                    <FancyInput type="text"
                                                name="faculty"
                                                defaultValue={exam.faculty}
                                                onChange={inputChangeHandler}/>
                                </ItemWrapper>
                            </ListItemStyled>
                        </Separator>
                        <ListItemStyled>
                            <FancyButton submit onClick={() => console.log("editing done")}>Submit</FancyButton>
                        </ListItemStyled>
                    </ListStyled>
                </FancyEditForm>
            </ExamDetail>
        </ExamDetailWrapper>
    );
}

export default ExamDetailEdit;
