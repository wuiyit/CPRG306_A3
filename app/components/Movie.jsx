'use client';
import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Movie = ({ movie }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [movietoedit, setMovieToEdit] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate year input to ensure it's an integer
    if (name === 'year') {
      const intValue = parseInt(value, 10);
      if (!isNaN(intValue)) {
        setMovieToEdit((prevState) => ({ ...prevState, [name]: intValue }));
      }
    } else {
      setMovieToEdit((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/movies/${id}`);
      console.log('Delete response:', response);
      setShowModalDelete(false);
      router.refresh();
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedMovie = { ...movietoedit, year: parseInt(movietoedit.year, 10) }; // Ensure year is integer

    try {
      const response = await axios.patch(`/api/movies/${movie.id}`, updatedMovie);
      console.log('Update response:', response.data);
      alert('Movie updated successfully.');
      setMovieToEdit(movie); // Reset to original movie data after successful update
      setShowModalEdit(false);
      router.refresh();
    } catch (error) {
      console.error('Update error:', error);
      alert('Error. Movie cannot be updated.');
      setMovieToEdit(movie); // Reset to original movie data after error
    }
  };

  const handleEditClick = () => {
    setMovieToEdit(movie); // Set the movie to edit when the edit button is clicked
    setShowModalEdit(true);
  };

  return (
    <li className="p-3 my-5 bg-slate-300" key={movie.id}>
      <h1>{movie.title}</h1>
      <p>{movie.actors}</p>
      <p>{movie.year}</p>
      <div className="px-1">
        <button
          className="bg-yellow-500 text-white p-3 rounded-lg mx-0.5"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
          <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
            <h1 className="font-extrabold text-3xl text-center mt-3">
              Update a Movie
            </h1>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="p-3 my-5 w-full"
              value={movietoedit.title}
              onChange={handleChange}
            />
            <input
              placeholder="Actors"
              name="actors"
              className="p-3 my-5 w-full"
              value={movietoedit.actors}
              onChange={handleChange}
            />
            <input
              placeholder="Year"
              name="year"
              className="p-3 my-5 w-full"
              value={movietoedit.year}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-yellow-500 text-grey p-3 rounded-lg mt-5"
            >
              Update
            </button>
          </form>
        </Modal>
        <button
          className="bg-red-500 text-white p-3 rounded-lg mt-5"
          onClick={() => setShowModalDelete(true)}
        >
          Delete
        </button>
        <Modal showModal={showModalDelete} setShowModal={setShowModalDelete}>
          <h1 className="font-extrabold text-3xl text-center mt-3">
            Are you sure you want to delete this Movie?
          </h1>
          <button
            className="bg-red-500 text-white p-3 rounded-lg mt-5"
            onClick={() => handleDelete(movie.id)}
          >
            Yes
          </button>
          <button
            className="bg-yellow-500 text-black p-3 rounded-lg mt-5"
            onClick={() => setShowModalDelete(false)}
          >
            No
          </button>
        </Modal>
      </div>
    </li>
  );
};

export default Movie;
