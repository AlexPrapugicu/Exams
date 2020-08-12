import React from "react";
import {ExamDetail, ExamDetailWrapper, FancyButton, ListItemStyled, ListStyled} from "./exam.styled";
import {ExamText} from "../../containers/ExamsContainer/exams.styled";

function ExamDetailCard({exam, startEdit,userRole}) {
    return (
        <ExamDetailWrapper>
            <ExamDetail>
            <ListStyled>
                <ListItemStyled>
                    <ExamText>The Course : {exam.course}</ExamText>
                </ListItemStyled>
                <ListItemStyled>
                    <ExamText>The Teacher : {exam.teacher}</ExamText>
                </ListItemStyled>
                <ListItemStyled>
                    <ExamText>Session : {exam.session}</ExamText>
                </ListItemStyled>
                <ListItemStyled>
                    <ExamText>Study Year: {exam.yearOfStudy}</ExamText>
                </ListItemStyled>
                <ListItemStyled>
                    <ExamText>Faculty : {exam.faculty}</ExamText>
                </ListItemStyled>
                <ListItemStyled>
                    <ExamText>Domain: {exam.domain}</ExamText>
                </ListItemStyled>
            </ListStyled>
                {
                    userRole() === "professor" || userRole() === "admin" ? <FancyButton onClick={startEdit}>Edit</FancyButton>
                        : <></>
                }
            </ExamDetail>
        </ExamDetailWrapper>
    );
}

export default ExamDetailCard;
