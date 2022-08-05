import { useEffect, useState } from "react"
//import {useNavigate, useLocation} from 'react-router-dom'

const useFetch = (url,token) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(true)
  //const navigate = useNavigate();
  // const location = useLocation();
  //const path =  '/';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      console.log('I was called')
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const json = await res.json()

        setData(json);
        setLoading(false)
        console.log(json)
        console.log('I fetched the data')
      } catch (error) {
        //FIXME error block never executes even if there is an error in the fetch
        console.log(error)
        //navigate(path, {replace : true});
        setError(error)
        console.log('oops error')
        setLoading(false)
      }
    }

    fetchData();
  }, [url])

  return { loading, error, data }
}

export default useFetch