import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchExams,filter} from "../../actions/examActions";
import {CustomSearchInput, ExamText, SearchWrapper} from "./exams.styled";

export default function ExamsSearchForm() {

    const exams = useSelector(state => state.exams.exams);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchExams());
    }, []);


    function inputChangeHandler(event){
        dispatch(filter(exams,event));
    }



    return (
        <SearchWrapper>
            <ExamText>Search Exams</ExamText>
            <CustomSearchInput type="text"
                   className="searchInput"
                   required={true}
                   name="course"
                   placeholder="Ex: LSD"
                   onChange={inputChangeHandler}/>
        </SearchWrapper>
    );
}
