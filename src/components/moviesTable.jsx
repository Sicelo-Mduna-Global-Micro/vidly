import React, { Component } from 'react'
import Like from './common/like';
const MoviesTable = (props) => {
    const { movies, onLike, onDelete } = props;
    return ( 
        <>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <th scope="row">{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => onLike(movie)}
                      ></Like>
                    </td>
                    <td>
                      <button
                        onClick={() => onDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </>
     );
}
 
export default MoviesTable;