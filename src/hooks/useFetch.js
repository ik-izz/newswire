import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      console.log('I was called')
      try {
        const res = await fetch(url)
        const json = await res.json()

        setData(json);
        setLoading(false)
        console.log('I fetched the data')
      } catch (error) {
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