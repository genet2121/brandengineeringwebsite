import React, { useEffect, useState } from "react";

function PaginationComponent(
    {totalCount, pageSize, onChange}: {
        totalCount: number,
        pageSize: number,
        onChange: (page_number: number) => Promise<void>
    }
) {

    const [pages, setPages] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    
    useEffect(() => {
        let temp_total_pages = Math.ceil(totalCount/pageSize);
        let temp_pages: number[] = [];

        setTotalPages(temp_total_pages);
        if(currentPage < 3) {
            for(let i = 1; i <= 4; i++) {
                if(i <= temp_total_pages) {
                    temp_pages.push(i)
                }
            }
            setPages(temp_pages);
        } else {
            for(let i = (currentPage - (currentPage == temp_total_pages ? 3 : 2)); i <= (currentPage + 2); i++) {
                if(i <= temp_total_pages) {
                    temp_pages.push(i)
                }
            }
            setPages(temp_pages);
        }
    }, [currentPage, totalCount, pageSize]);

    const changePage = (add_page: number) => {

        if((add_page > 0 && currentPage <= totalPages) || (add_page < 0 && currentPage >= 0)) {
            setCurrentPage(currentPage + add_page);
            onChange(currentPage + add_page);
        }

    }

    return (
        <div className="d-flex justify-content-center mt-5 mb-3">
                {<button className="btn zbtn me-3" disabled={currentPage == 1} onClick={() => {changePage(-1)}}>Prev</button>}
                {pages.map((num) => (
                    <button 
                        className={`btn ${num == currentPage ? "zbtn" : "deactive_zbtn"} mx-1`}
                        onClick={() => {setCurrentPage(num); onChange(num); }}
                    >
                        {num}
                    </button>
                ))}
                <button className="btn zbtn ms-3" disabled={currentPage == totalPages} onClick={() => {changePage(1)}}>Next</button>
            {/* <div className="d-flex">
            </div> */}
        </div>
    );
}

export default PaginationComponent;