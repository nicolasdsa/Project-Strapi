import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const {loading, error, data} = useFetch('http://localhost:1337/api/reviews?populate=*', process.env.REACT_APP_TOKEN)
  console.log(process.env.token);
  console.log("process.env.token");

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error!</p>

  if(!data) return <p>Empty</p>


  return (
    <div>
      {data.map(review => (        
        <div key={review.id} className='review-card'>
          <div className='rating'>{review.attributes.rating}</div>
          <h2>{review.attributes.Title}</h2>
          {review.attributes.categories.data.map(c => ( <small key={c.id}>{c.attributes.name}</small> ))}
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}