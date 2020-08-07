import React from "react";
import "./styleExamCard.css";
import {ExamCardStyled, ListItemStyled, ListStyled} from "./exam.styled";

function ExamCard({course, id, faculty, yearOfStudy, teacher}) {
    return(
        <ExamCardStyled to={`/exams/${id}`}>
            <ListStyled>
                <ListItemStyled important className="course">
                    Course:{course}
                </ListItemStyled>
                <ListItemStyled>
                    Faculty:{faculty}
                </ListItemStyled>
                <ListItemStyled>
                    Year of Study:{yearOfStudy}
                </ListItemStyled>
                <ListItemStyled>
                    Teacher:{teacher}
                </ListItemStyled>
            </ListStyled>
        </ExamCardStyled>
    );
}

export default ExamCard;
