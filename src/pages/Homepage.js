import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import Header from "../components/header/Header";
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../static/logo.png';
import { Container, Row } from 'react-bootstrap';
import styles  from '../static/styles/homepage.module.css'

export default function Homepage() {
  const aws_url = 'http://ec2-34-227-193-48.compute-1.amazonaws.com'
  const [cookies] = useCookies(['token']);
  const { loading, error, data } = useFetch(`${aws_url}/api/stories?populate=Media`, cookies.token)

  if (loading) return <p>Loading...</p>;

  // console.log(data.data[0].attributes.media.data[0].attributes.formats.thumbnail.url)
  console.log(data)
  return (
    <div className='p-5'>
      <Header/>

    {/* <div className='d-flex justify-content-center'>
      <Carousel className='carousel w-50 justify-content-center'>
      {data.data.map( (story, index) => (
      <Carousel.Item key={story.id}>
        <img
          className="d-block w-100"
          src={story.attributes.Media.data[1].attributes.url}
          alt="First slide"
        />
        <Carousel.Caption>
        <h2>{story.attributes.Title}</h2>
          <small>published: {story.attributes.Date}</small>
          <p>{story.attributes.Description.substring(0, 200)}...</p>
          <Link to={`/story/${story.id}`}>Read more</Link>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      </Carousel>
      </div> */}

      <div className={styles.storyContainer}>
      {data.data.map( (story, index) => (
        
        <div key={story.id} className={styles.storyCard}>
          {/* <img className='img-background' src={story.attributes.Media.data[0].attributes.url}/> */}
          {/* <div className="rating">{story.id}</div> */}
          <h2>{story.attributes.Title}</h2>
          <small>published: {story.attributes.Date}</small>
          <p>{story.attributes.Description.substring(0, 200)}...</p>
          
          <div className={styles.imgWrapper}>
            {story.attributes.Media.data.map( img => {
              console.log(img)
              return(
                <div key={img.id} className={styles.imgContainer}>
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
                </div>
              )
            })}
          </div>

          <Link to={`/story/${story.id}`}>Read more</Link>
          {/* <img src={`http://localhost:1337${data.data[index].attributes.media.data[0].attributes.url}`}/> */}
        </div>
        
      ))}
      </div>
    </div>

  )

}