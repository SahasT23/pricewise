"use client"

import React from 'react'

const Searchbar = () => {
    const handleSubmit = () => {}
  
  
    return (
        <form 
            className='flex flex-wrap gap-4 mt-12' 
            onSubmit={handleSubmit}
        >
            <input
                type="text"
            />
        </form>
    )
}

export default Searchbar