import React from 'react'
import _ from 'lodash'; 

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages =_.range(1, pagesCount + 1);
    return (
      <>
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            {pages.map((page) => (
              <li key={page} className= {page === currentPage ? "page-item active" : "page-item"}>
                <a
                  className="page-link"
                  onClick={() => onPageChange(page)}
                  tabindex="-1"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
}
 
export default Pagination;

