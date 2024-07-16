'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const AddMovie = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState({
    title: '',
    actors: '',
    year: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'year') {
      const intValue = parseInt(value, 10)
      if (!isNaN(intValue)) {
        setInput((prevState) => ({ ...prevState, [name]: intValue }))
      }
    } else {
      setInput((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/movies', input)
      setInput({ title: '', actors: '', year: '' })
      setShowModal(false)
      router.refresh()
    } catch (err) {
      if (err.response) {
        alert('Error. Movie cannot be added.')
      }
    }
  }

  return (
    <div>
      <button className='bg-yellow-700 text-white p-3 rounded-md cursor-pointer' onClick={() => setShowModal(true)}>
        Add New Movie
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className='w-full px-5 pb-6' onSubmit={handleSubmit}>
          <h1 className='font-extrabold text-3xl text-center m-3'>Add a Movie</h1>
          <input type='text' placeholder='Title' name='title' className='p-3 my-2 w-full' value={input.title} onChange={handleChange} />
          <input type='text' placeholder='Actors' name='actors' className='p-3 my-2 w-full' value={input.actors} onChange={handleChange} />
          <input type='text' placeholder='Year' name='year' className='p-3 my-2 w-full' value={input.year} onChange={handleChange} />
          <button type='submit' className='bg-yellow-400 text-grey p-3 rounded-lg mt-5'>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddMovie
