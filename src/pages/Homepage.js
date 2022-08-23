import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
// Hooks
import useFetch from '../hooks/useFetch'
// Carousels
import MediaCarousel from '../components/Carousel/Carousel'
import HeaderCarousel from "../components/HeaderCarousel/Carrousel";
// Animation
import { motion } from "framer-motion"
import GridLoader from "react-spinners/GridLoader";
// Styles
import styles  from '../static/styles/homepage.module.css'



export default function Homepage() {
  //Url needs to be changed to the proper server url and it needs to be stored in env file for best practice
  const aws_url = 'http://ec2-34-207-151-192.compute-1.amazonaws.com'

  // Using the react cookie library https://github.com/reactivestack/cookies/tree/master/packages/react-cookie
  const [cookies] = useCookies(['token']);

  // Uses the custom fetch hook to request the data, passes the server url and the token stored in the cookies as a second param
  const { loading, error, data } = useFetch(`${aws_url}/api/stories?populate=Media&sort=Date:DESC`, cookies.token)

  //Displays loader while data is being fetched
  if (loading) return <div className={styles.loader}><GridLoader color={'#ffcc35'} size={'50px'}/></div>;

  //Variable to determine the direction in which the story should be animated from 
  let direction = ''


  return (
    <div className={`p-5 ${styles.homeBody}`}  >
      <h1 className={styles.storyHeader}>Top Stories</h1>
      <HeaderCarousel items={data}/>
      <h1 className={styles.storyHeader}>Stories</h1>
      <div className={styles.storyContainer}>
        {data?.data?.map( (story, index) => (

          // Determines which direction the node should animate from 
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