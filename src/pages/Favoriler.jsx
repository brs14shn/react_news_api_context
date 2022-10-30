import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCustomAuthContext } from '../context/AuthContext'

const Favoriler = () => {
const {favourites,setfavourites} =useCustomAuthContext()
const navigate = useNavigate()


const defaultImage =
"https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";


const handleRemoveFavourites =(url)=>{

  const remove =favourites.filter((news)=>news.url !==url) 
  setfavourites(remove)
}




  return (
    <div>
      <div className=" cardContainer container row  justify-content-evenly align-items-center mt-5 mx-auto  ">

        {favourites?.map((item) => {
          const {
            urlToImage,
            title,
            description,
            publishedAt,
            source: { name },
            url,
          } = item;
          return (
            <div className="card col-sm-12 col-md-6 col-lg-4 p-3" key={url}>
              <img
                loading="lazy"
                src={urlToImage ? urlToImage : defaultImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">
                  {description}
                  
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{publishedAt.slice(0, 10)} </li>
                <li className="list-group-item">{name} </li>
              </ul>
              <div className="card-body">
                <button
                  type="submit"
                  className="btn btn-primary me-4 "
                  onClick={()=>navigate(-1)}
                >
                  Details
                </button>
                <button
                  type="submit"
                  className="btn btn-primary on "
                  onClick={()=>handleRemoveFavourites(url)}
                >
                  Remove Favourite
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Favoriler

