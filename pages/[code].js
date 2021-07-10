import {useRouter} from 'next/router'
import {useEffect} from 'react'

function Code ({code}) {
    const router = useRouter()
    useEffect(() => {
    router.replace(`api/${code}`)

    }, [])
    return (
        <div>
        </div>
    )
}

export default Code


export async function getServerSideProps(context) {
 const code = context.query.code
    return {
      props: {
        code,
      }
    }
  }
