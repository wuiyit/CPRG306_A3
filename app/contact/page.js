import React from 'react'

const page = () => {
  return (
    <div className=' mx-auto '>
        <h1 className='text-3xl font-bold text-center mt-10'>Contact Us</h1>
        <div className='mt-10'>
            <form>
                <div className='flex flex-col'>
                    <label>Name</label>
                    <input type='text' className='p-3 my-5' placeholder='Name'></input>
                </div>
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input type='email' className='p-3 my-5' placeholder='Email'></input>
                </div>
                <div className='flex flex-col'>
                    <label>Message</label>
                    
                    <textarea className='p-3 my-5' placeholder='Message'></textarea>
                </div>
                <button className='bg-blue-500 text-white p-3 rounded-lg mt-5'>Submit</button>

            </form>
            </div>
            </div>
  )
}

export default page