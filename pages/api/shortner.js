import dbConnect from '../../utils/dbConnect'
import shortid from 'shortid'
import validUrl from 'valid-url'
import Url from '../../urlModel/urlSchema'

//Connecting to the Db
dbConnect()

export default async (req, res) => {
 
  if (req.method === 'POST') {
    const {longUrl} = req.body
    if (validUrl.isUri(longUrl)) {
      try {
    const urlCode = await shortid.generate() 
        let url = await Url.findOne({longUrl})
        if (url) {
          console.log(url)
          return res.status(200).json(url)
        } else {
          const shortUrl = `${process.env.BASE_URL}/api/${urlCode}` 
          url = {
                  longUrl,
                  shortUrl,
                  urlCode,
                  date: new Date()
                  }
            Url.create(url)      
            return res.status(201).json({success: true , data: url })
        }
      }catch(e){
        return res.status(400).json({success: false })
      }
    }      
     return res.status(200).json({connected: 'true' })
  }

  return res.status(200).json({connected: 'true' })

}
