import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCustomAuthContext } from "../context/AuthContext";
import { toastSuccessNotify } from "../helper/ToastNotify";
import Share from "../components/Share";

const DetailPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { favourites, setfavourites } = useCustomAuthContext();


  const handleFavourite = (state) => {
    console.log(state);
    setfavourites([...favourites,state])
    toastSuccessNotify("Favourite added");
    navigate("/favorite");
   
  };
  console.log(favourites);
  return (
    <div className="container py-5">
      <div className="card mb-3">
        <div className="row g-0 border border-dark">
          <div className="col-md-4">
            <img
              src={state.urlToImage}
              className="img-fluid rounded-start h-100"
              alt="newImage"
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">{state.title}</h5>
              <p className="card-text">{state.description}</p>
            </div>
            <ul className="list-group text-start">
              <li className="list-group-item">
                {state.publishedAt.slice(0, 10)}
              </li>
              <li className="list-group-item ">{state.source.name}</li>
              <li className="list-group-item ">
                <button
                  onClick={() => navigate("/")}
                  // onClick={() => navigate(-1)}
                  className="btn btn-success ms-3 "
                >
                  Home
                </button>
                <button
                  onClick={() => handleFavourite(state)}
                  className="btn btn-success ms-3 "
                >
                  Add Favourite
                </button>
              </li>
              <Share state={state} />

              <li className="list-group-item ">
                <div
                  className="link text-decoration-underline"
                  onClick={() => navigate("/articles", { state: state.url })}
                >
                  News Source
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
