import axios from 'axios'
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {CheckIcon} from  '@heroicons/react/outline'
import isUrl from 'is-url';


function LinkShortener() {
const [longUrl, setLongUrl] = useState('')
const [shortUrl, setShortUrl] = useState('')
const [copied, setCopied] = useState(false)
const [loading, setLoading] = useState(false)



const handleInput  = (e) => {
    e.preventDefault()
    setLongUrl(e.target.value)
}
const handleCopyInput  = (e) => {
    setCopied(false)
}
const shortenUrl = async () => {
    setLoading(true)
    if (isUrl(longUrl)) {
        const url = {
            longUrl
        };
        const res =  await axios.post('/api/shortner', url)
        setLoading(false)
        setShortUrl(res.data.shortUrl)
        console.log(res.data.shortUrl)
    }else {
        setShortUrl('Not a valid link')
        setLoading(false)

    }


}


    return (
        <div className='bg-gray-300 md:w-3/4  p-10 rounded-md m-auto '> 
            <div className='flex items-center justify-between '>  
            <input placeholder='Place the long link to here' type='text'
            onChange={handleInput}
             className='bg-gray-200 p-2 shorten flex-1 border-gray-500 focus-within:shadow-md focus:outline-none rounded-md' />
             <button onClick={shortenUrl} className='w-40 ml-5 bg-blue-700 p-2 rounded-md hover:cursor-pointer flex-none hover:bg-blue-600 text-white'>{!loading ? 'Shorten' : 'Loading...'}</button>
            </div>
            <div className='flex mt-5'> 
                <input 
                onChange={handleCopyInput}
                value={shortUrl}
                className='p-2 flex-1 focus:outline-none rounded-md ' />
            <CopyToClipboard text={shortUrl}
              onCopy={() => setCopied(true)}>
               {copied ? <button className='bg-red-400 text-white w-40 ml-5 p-2 flex justify-evenly rounded-md hover:cursor-pointer flex-none'>Copied <CheckIcon className='h-7 text-white '/></button> :  <button className='w-40 ml-5 bg-blue-700 p-2 rounded-md hover:cursor-pointer flex-none text-white hover:bg-blue-600'> Click to copy </button>}
           </CopyToClipboard>
            </div>
        </div>
    )
}

export default LinkShortener

