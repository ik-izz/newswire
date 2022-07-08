import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews?populate=media')

  if (loading) return <p>Loading...</p>;

  // console.log(data.data[0].attributes.media.data[0].attributes.formats.thumbnail.url)
  return (
    <div>
      {data.data.map( (review, index) => (
        <div key={review.id} className="review-card">

          <div className="rating">{review.id}</div>
          <h2>{review.attributes.title}</h2>
          <small>published: {review.attributes.date}</small>
          <p>{review.attributes.body.substring(0, 200)}...</p>

          <div className='img-wrapper'>
            
            {review.attributes.media.data.map( img => {
             console.log(img.attributes.mime)
              return(
                <div key={img.id} className='img-container'>
                  {img.attributes.ext == '.mp4'
                  ?
                    <video key={img.id}
                    className='img'
                    controls 
                    src={`http://localhost:1337${img.attributes.url}`}
                    />
                  :
                  img.attributes.ext == '.webm'
                  ?
                  <video key={img.id}
                  className='img'
                  controls 
                  src={`http://localhost:1337${img.attributes.url}`}
                />
                  :
                    <img key={img.id}
                    className='img'
                    src={`http://localhost:1337${img.attributes.formats.thumbnail.url}`}
                    />
                  }
                </div>
              )
            })}
          </div>

          <Link to={`/details/${review.id}`}>Read more</Link>
          {/* <img src={`http://localhost:1337${data.data[index].attributes.media.data[0].attributes.url}`}/> */}
        </div>
      ))}
    </div>

  )

}