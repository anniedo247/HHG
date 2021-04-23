import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


function PaginationBar({ page, setPage, totalPages }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="d-flex justify-content-center mt-4 mb-4">
      <Pagination
        count={totalPages}
        variant="outlined"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationBar
