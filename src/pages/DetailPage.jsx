import React from "react";
import { useLocation, Link,useNavigate } from "react-router-dom";
import SourceSection from "../pages/SourceSection";

const DetailPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="container py-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={state.urlToImage}
              className="img-fluid rounded-start"
              alt="newImage"
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">{state.title}</h5>
              <p className="card-text">{state.description}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {state.publishedAt.slice(0, 10)}
              </li>
              <li className="list-group-item">{state.source.name}</li>

              <div>
                <button
                  onClick={() => navigate("/")}
                  // onClick={() => navigate(-1)}
                  className="btn btn-success me-2 "
                >
                  Home
                </button>
                <li className="list-group-item ">
                <div  className="link text-decoration-underline" onClick={()=>navigate("/articles",{state:state.url})}>News Source</div>
              </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default DetailPage;
