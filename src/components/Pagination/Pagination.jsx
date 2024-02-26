import React from 'react';

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
        <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
            <button onClick={handleNextPage}>Next</button>
        </div>
    );
};

export default Pagination;
