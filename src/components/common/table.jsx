import React from 'react'
import TableHeader from './tableHeader';
import TableBody from './tableBody';
const Table = (props) => {

    const { sortColumn, columns, data, onSort } = props;
    return (
      <>
        <table class="table">
          <TableHeader
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody data={data} columns={columns} />
        </table>
      </>
    );
}
 
export default Table;