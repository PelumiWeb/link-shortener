import Url from '../../urlModel/urlSchema'


export default async (req, res) => {
    if (req.method === 'GET' ) {
        const {code} = req.query
     try {
        const url = await Url.findOne({urlCode: code })
        if (url) {
            return res.redirect(url.longUrl)
        } else {
            return res.status(404).json('No url found')
        }
    }catch(e){
        console.log(e.message)
        return res.status(500).json('Server error')
    }
    }
   
}