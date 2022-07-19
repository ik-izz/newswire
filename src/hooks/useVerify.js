import axios from "axios";
import { useState, useEffect } from "react";

const useVerify = (url, header) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      console.log('entering verify token hook')
      try {
        console.log('strapi call')
        const res = await axios.get(url, {
          headers: {
            Authorization:
              `Bearer ${header}` ,
          },
        })
        setStatus(res.status)
        setData(res);
        console.log('I fetched the data with useVerify')
        console.log(`status: ${res.status}`)
      } catch (error) {
        setError(error)
      }
    }

    fetchData();
  }, [url, header])
  return { data, error, status }
}

export default useVerify