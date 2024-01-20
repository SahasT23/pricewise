"use client"

import React, { useState } from 'react'

const Searchbar = () => {
    const [ searchPrompt, SetsearchPrompt ] = useState('');
    
    const handleSubmit = (event: FormEvent) => {}

  
    return (
        <form 
            className='flex flex-wrap gap-4 mt-12' 
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={searchPrompt}
                onChange={(e) => SetsearchPrompt(e.target.value)}
                placeholder='Enter product link'
                className='searchbar-input'
            />

            <button type="submit" className='searchbar-btn'>
                Search
            </button>
        </form>
    )
}

export default Searchbar