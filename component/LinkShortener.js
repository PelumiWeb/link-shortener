import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react';


function LinkShortener() {
const [longUrl, setLongUrl] = useState('')
const [shortUrl, setShortUrl] = useState('')

const handleInput  = (e) => {
    e.preventDefault()
    setLongUrl(e.target.value)
}
const sayHello = async () => {
    console.log(longUrl)
    const url = {
        longUrl
      };
 const res =  await axios.post('/api/shortner', url)
setShortUrl(res.data.shortUrl)

}


    return (
        <div> 
            <div className='flex items-center justify-between'>  
            <input placeholder='Place the link to be shorten' type='text'
            onChange={handleInput}
             className='bg-gray-200 p-2 border-gray-500 focus-within:shadow-md focus:outline-none rounded-md' />
            <button onClick={sayHello} className='ml-5 flex-1 bg-blue-700 p-2 rounded-md hover:cursor-pointer'>Shorten</button>
            </div>
            <p>Here is the url that will be shorten</p>
            <Link href={!shortUrl ? '/' : shortUrl}>
                <a>{shortUrl ? shortUrl : 'This is the link'}</a>
            </Link>
        </div>
    )
}

export default LinkShortener

