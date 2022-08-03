import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'


export default function Homepage() {
  const aws_url = 'http://ec2-54-90-186-77.compute-1.amazonaws.com'
  const [cookies] = useCookies(['token']);
  const { loading, error, data } = useFetch(`${aws_url}/api/stories?populate=Media`, cookies.token)

  if (loading) return <p>Loading...</p>;

  // console.log(data.data[0].attributes.media.data[0].attributes.formats.thumbnail.url)
  console.log(data)
  return (
    <div>
      {data.data.map( (story, index) => (
        <div key={story.id} className="story-card">

          <div className="rating">{story.id}</div>
          <h2>{story.attributes.Title}</h2>
          <small>published: {story.attributes.Date}</small>
          <p>{story.attributes.Description.substring(0, 200)}...</p>

          <div className='img-wrapper'>
            {story.attributes.Media.data.map( img => {
              console.log(img)
              return(
                <div key={img.id} className='img-container'>
                   {img.attributes.mime.includes('video')
                  ?
                    <video 
                    className='img'
                    controls 
                    src={img.attributes.url}
                    />
                  :
                    <img 
                    className='img'
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

  )

}