import React from 'react'
import { useLocation } from 'react-router-dom';


const SourceSection = () => {
  const {state}=useLocation()
  console.log(state)


  return (
   
        <div className="card w-75 m-auto my-3 shadow-lg">
          <div className="card-body">
            <div className="ratio ratio-16x9">
              <iframe
                src={state}
                title="articles"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      );
}

export default SourceSection