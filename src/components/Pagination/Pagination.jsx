import React from 'react';
import style from "./Pagination.module.css"
const Pagination = ({currentPage, onChangePage}) => {

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onChangePage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
            onChangePage(currentPage + 1);
    };

    return (
        <div className={style.btns}>
            <button className={style.btn} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
            <button className={style.btn} onClick={handleNextPage}>Next</button>
        </div>
    );
};

export default Pagination;
