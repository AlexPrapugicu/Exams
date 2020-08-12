import React, {useEffect} from "react";
import {fetchExams, sort} from "../../actions/examActions";
import {useDispatch, useSelector} from "react-redux";
import {FancyFilterWrapper, FancyLabel, FancySelect} from "./exams.styled";
import {timeout} from "../../shared/util";
import {useHistory} from "react-router";

export function ExamsSorter() {

    const exams = useSelector(state => state.exams.exams);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchExams());
    },[]);

    async function sortHandler(event) {
        dispatch(sort(exams,event));
        await timeout(200);
        history.push("/exams");
    }

    return(
        <FancyFilterWrapper>
            <FancyLabel>Filter</FancyLabel>
            <FancySelect name="filters" id="filters" defaultValue="" onChange={sortHandler}>
                <option disabled defaultValue=""> </option>
                <option value="course asc">By Exam Name Ascending</option>
                <option value="course des">By Exam Name Descending</option>
                <option value="teacher asc">By teacher Ascending</option>
                <option value="teacher des">By teacher Descending</option>
                <option value="session asc">By session Ascending</option>
                <option value="session des">By session Descending</option>
                <option value="faculty asc">By faculty Ascending</option>
                <option value="faculty des">By faculty Descending</option>
                <option value="domain asc">By Domain Ascending</option>
                <option value="domain des">By Domain Descending</option>
                <option value="yearOfStudy asc">By Year Of Study Ascending</option>
                <option value="yearOfStudy des">By Year Of Study Des</option>
            </FancySelect>
        </FancyFilterWrapper>
    );
}
