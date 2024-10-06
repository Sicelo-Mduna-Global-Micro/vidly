import React, { Component } from 'react'
import TableHeader from './common/tableHeader';
import Like from './common/like';
import TableBody from './common/tableBody';

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key : "like"},
    { key : "delete"}
  ];

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn} = this.props;
    return (
      <>
        <table class="table">
          <TableHeader
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody data ={movies} columns = {this.columns}/>
        </table>
      </>
    );
  }
}
 
 
export default MoviesTable;