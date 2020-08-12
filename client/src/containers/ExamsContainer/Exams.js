import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchExams, sort} from "../../actions/examActions";
import ExamCard from "../../components/exams/ExamCard";
import Spinner from "../../shared/Spinner";
import {
    ExamContainerWrapper,
    ExamsWrapper,
    FancyFilterWrapper, FancyLabel, FancySelect,
    FancySelectWrapper,
    SearchBarWrapper,
    Wrapper
} from "./exams.styled";
import ExamsSearchForm from "./ExamsSearchForm";
import {FancyLink} from "../Home.styled";
import {FancyButton} from "../../components/exams/exam.styled";
import {ExamsSorter} from "./ExamsSorter";


function Exams() {

    const exams = useSelector(state => state.exams.filteredExams);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchExams());
    }, []);



    return (
        <ExamContainerWrapper>
            <Wrapper>
                <SearchBarWrapper>
                    <ExamsSearchForm/>
                    <FancySelectWrapper>
                        <ExamsSorter/>
                    </FancySelectWrapper>
                    <FancyLink to={"/add"}>
                        <FancyButton>Add exam</FancyButton>
                    </FancyLink>
                </SearchBarWrapper>
                <ExamsWrapper>
                    {exams ? exams.map(exam => <ExamCard key={exam.id}
                                                         id={exam.id}
                                                         faculty={exam.faculty}
                                                         yearOfStudy={exam.yearOfStudy}
                                                         teacher={exam.teacher}
                                                         course={exam.course}/>)
                        : <Spinner/>}
                </ExamsWrapper>
            </Wrapper>
        </ExamContainerWrapper>
    );
}

export default Exams;
