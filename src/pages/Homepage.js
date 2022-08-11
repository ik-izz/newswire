import React, {CSSProperties} from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import MediaCarousel from '../components/Carousel/Carousel'
import SimpleSlider from "../components/HeaderCar/Carrousel";
import { motion } from "framer-motion"
import styles  from '../static/styles/homepage.module.css'
import RingLoader from "react-spinners/RingLoader";

export const override = {
    position: 'absolute',
    top: '35vh',
    left: '45vw',
  };

export default function Homepage() {
  const aws_url = 'http://ec2-54-90-149-122.compute-1.amazonaws.com'
  const [cookies] = useCookies(['token']);
  const { loading, error, data } = useFetch(`${aws_url}/api/stories?populate=Media`, cookies.token)

  if (loading) return <RingLoader color={'#ffcc35'} cssOverride={override} size={'10rem'}/>;

  let direction = ''
  return (
    <div className={`p-5 ${styles.homeBody}`}  >
      <h1 className={styles.storyHeader}>Top Stories</h1>
      <SimpleSlider data={data}/>
      {/* <Header/> */}
      <h1 className={styles.storyHeader}>Stories</h1>
      <div className={styles.storyContainer}>
        {data?.data?.map( (story, index) => (

          direction = index % 2 == 0 ? '-100vw' : '200vw',

          <motion.div key={story.id} className={styles.storyCard} 
            initial={{x:direction}} //left
            animate={{x:0,y:0}} 
            transition={{duration: 1.3}}>

            <h2>{story.attributes.Title}</h2>
            <small>published: {story.attributes.Date}</small>
            <p>{story.attributes.Description.substring(0, 200)}...</p>
            
            <div className={styles.imgWrapper}>
              <MediaCarousel items={story} id='hello' />
            </div>

            <Link to={`/story/${story.id}`} >Read more</Link>
          </motion.div>
          
        ))}
      </div>
    </div>

  )

}