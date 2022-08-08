import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import axios from 'axios'
import fileDownload from 'js-file-download'
import {generateZip, generateZipFromCloud} from '../components/GenerateZip';
import { useCookies } from 'react-cookie'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../static/styles/story.module.css'

import Download from '../static/download.png'

export const zipUrl = []

export default function Story() {
  const aws_url = 'http://ec2-34-227-193-48.compute-1.amazonaws.com'
  const {id} = useParams() ;
  const [cookies] = useCookies(['token']);
  const { loading, error, data } = useFetch(`${aws_url}/api/stories/${id}?populate=Media`, cookies.token);
  const { data:fullData } = useFetch(`${aws_url}/api/stories/?populate=Media`, cookies.token);

  if (loading) return <p>Loading...</p>

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
    <div  className={`m-5 ${styles.storyCard}`}>
          <div className={styles.rating}>{data.data.id}</div>
          <h2>{data.data.attributes.Title}</h2>
          <small>published: {data.data.attributes.Date}</small>
          <p>{data.data.attributes.Description}</p>

          <div className={styles.imgWrapper}>
            {data.data.attributes.Media.data.map( (img, index) => {
              
              img.attributes.mime.includes('video')
                  ?
                    zipUrl.push(img.attributes.url)
                  :
                    zipUrl.push(img.attributes.url)
              return(
                <div className={styles.imgContainer} key={img.id}>
                  {img.attributes.mime.includes('video')
                  ?
                    <video 
                    className={styles.img}
                    controls 
                    src={img.attributes.url}
                    />
                  :
                    <img 
                    className={styles.img}
                    src={img.attributes.url}
                    />
                  }
                  
                  <img 
                    src={Download} 
                    className={styles.downloadIcon}
                    onClick={() => 
                      {img.attributes.mime.includes('video')
                      ?
                        (handleclick(data.data.attributes.Media.data[index].attributes.url,
                        `video.webm`))
                      :
                        (handleclick(data.data.attributes.Media.data[index].attributes.url,
                        `${data.data.attributes.Media.data[index].attributes.alternativeText}`))
                      }
                    }/>
                </div>
              )
            })}
          </div>
          
          {/* <a href={url} download={'media.jpg'} target={'blank'}> */}
          <div className={styles.buttonContainer}>
            <button 
              className={styles.download}
              // onClick={() => 
              //   {handleclick
              //     (`http://localhost:1337${data.data.attributes.media.data[0].attributes.formats.thumbnail.url}`,
              //      "media.jpg")}}
              onClick={generateZipFromCloud}
              >Dowload Media
            </button>
          </div>
          {/* </a> */}
      </div>
  ) 
}
