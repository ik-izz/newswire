import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import axios from 'axios'
import fileDownload from 'js-file-download'
import {generateZipFromCloud} from '../components/GenerateZip';
import { useCookies } from 'react-cookie'

import styles from '../static/styles/story.module.css'
import Carousel from '../components/Carousel/Carousel'
import { motion } from "framer-motion"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GridLoader from "react-spinners/GridLoader";

import Download from '../static/download.png'

export const zipUrl = []

export default function Story() {
  const aws_url = 'http://ec2-54-209-146-242.compute-1.amazonaws.com'
  const {id} = useParams() ;
  const [cookies] = useCookies(['token']);
  const { loading, error, data } = useFetch(`${aws_url}/api/stories/${id}?populate=Media`, cookies.token);

  if (loading) return <div className={styles.loader}><GridLoader color={'#ffcc35'} size={'50px'}/></div>;

  const handleclick = (url, media) => {
    console.log(url)
    axios.get(url, {
      responseType: 'blob',
    })
    .then((response) => {

      fileDownload(response.data, media)
    })
  }

  return (
    <div className={`${styles.storyBody}`}>
      <div  className={`m-5 ${styles.storyCard}`}>
        {/* <div className={styles.rating}>{data.data.id}</div> */}
            <h1 className='text-capitalize'>{data.data.attributes.Title}</h1>
            <small>published: {data.data.attributes.Date}</small>
            <p>{data.data.attributes.Description}</p>
        <Carousel items={data.data}/>
        {data.data.attributes.Media.data.map( (img, index) => {
          
          img.attributes.mime.includes('video')
              ?
                zipUrl.push(img.attributes.url)
              :
                zipUrl.push(img.attributes.url)
          return
        })}
            
        {/* <a href={url} download={'media.jpg'} target={'blank'}> */}
        <div className={styles.buttonContainer}>
          <motion.button 
            className={styles.download}
            whileHover={{scale:1.1}}
            // onClick={() => 
            //   {handleclick
            //     (`http://localhost:1337${data.data.attributes.media.data[0].attributes.formats.thumbnail.url}`,
            //      "media.jpg")}}
            onClick={generateZipFromCloud}
            >Dowload Media
          </motion.button>
            </div>
          {/* </a> */}
        </div>
      </div>
      

  ) 
}
