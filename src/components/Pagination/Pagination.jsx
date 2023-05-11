
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

export default function Pagination({onChangePage}) {
    return (
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={5}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
    );
}