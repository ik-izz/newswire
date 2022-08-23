import React from 'react'
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
// Hooks
import useFetch from '../hooks/useFetch'
// Zips file provider
import {generateZipFromCloud} from '../components/GenerateZip';
// Carousel
import Carousel from '../components/Carousel/Carousel'
// Animation
import { motion } from "framer-motion"
import GridLoader from "react-spinners/GridLoader";
// Styles
import styles from '../static/styles/story.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Array to store the url's to be downloaded
export const zipUrl = []


export default function Story() {
  //Url needs to be changed to the proper server url and it needs to be stored in env file for best practice
  const aws_url = 'http://ec2-34-207-151-192.compute-1.amazonaws.com'

  const {id} = useParams() ;

  // Using the react cookie library https://github.com/reactivestack/cookies/tree/master/packages/react-cookie
  const [cookies] = useCookies(['token']);

   // Uses the custom fetch hook to request the data, passes the server url and the token stored in the cookies as a second param
  const { loading, error, data } = useFetch(`${aws_url}/api/stories/${id}?populate=Media`, cookies.token);

  //Displays loader while data is being fetched
  if (loading) return <div className={styles.loader}><GridLoader color={'#ffcc35'} size={'50px'}/></div>;


  return (
    <div className={`${styles.storyBody}`}>
      <div  className={`m-5 ${styles.storyCard}`}>
            <h1 className='text-capitalize'>{data.data.attributes.Title}</h1>
            <small>published: {data.data.attributes.Date}</small>
            <p>{data.data.attributes.Description}</p>
        <Carousel items={data.data}/>
        {data.data.attributes.Media.data.map( img => {
          // Pushes media url's into array
          img.attributes.mime.includes('video')
              ?
                zipUrl.push(img.attributes.url)
              :
                zipUrl.push(img.attributes.url)
          return
        })}
            
        <div className={styles.buttonContainer}>
          <motion.button 
            className={styles.download}
            whileHover={{scale:1.1}}
  
            onClick={generateZipFromCloud}
            >Download Media
          </motion.button>
            </div>
        </div>
      </div>
      

  ) 
}
