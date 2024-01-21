"use client"

import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if(
            hostname.includes('amazon.com') || 
            hostname.includes('amazon.') || 
            hostname.endsWith('amazon')
        )   {
            return true;
        } 
    } catch (error) {
      return false;  
    }

    return false;
}

const Searchbar = () => {
    const [ searchPrompt, SetsearchPrompt ] = useState('');
    const [ isLoading, SetIsLoading ] = useState(false);
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const isValidLink = isValidAmazonProductURL(searchPrompt);

        alert(isValidLink ? 'Valid link' : 'Invalid link')

        if(!isValidLink) return alert('Please provide a valid Amazon link')

        try {
            SetIsLoading(true);

        // Scrape our first product for product page
        const product = await scrapeAndStoreProduct
        } catch (error) {
            console.log(error);
        } finally {
            SetIsLoading(false);  
        }
    }

  
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

            <button 
                type="submit" 
                className='searchbar-btn'
                disabled={searchPrompt === ''}
            >
                {isLoading ? 'Searching...' : 'search'}
            </button>
        </form>
    )
}

export default Searchbar