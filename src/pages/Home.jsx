import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Paginate from "../components/Pagination";
import { toastErrorNotify } from "../helper/ToastNotify";
import { toastWarnNotify } from "../helper/ToastNotify";
import img1 from "../assets/Homenews.jpg";
import { useCustomAuthContext } from "../context/AuthContext";
import Pagination from "../components/Pagination";

const Home = () => {
  const [searchText, setSearchText] = useState();
  const [newData, setNewData] = useState();
  const [readMore, setReadMore] = useState(false);




  const navigate = useNavigate();

  const { currentUser } = useCustomAuthContext();

  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  //! RESTAPI👇

  const getnewsDataFromApi = async () => {

    const API_KEY = "f3bec0d572254c0c95fa46e72a065627";
    let url = `https://newsapi.org/v2/everything?
q=${searchText}&page=1&sortBy=publishedAt&apiKey=${API_KEY}`;
    if (searchText) {
      try {
        //   const response = await axios.get(url);
        const { data } = await axios.get(url);
        setNewData(data.articles);

        console.log(newData);
      } catch (error) {
        console.log(error);
      }
    } else {
      toastErrorNotify("Please enter a news");
    }
  };

// useEffect(() => {
//   getnewsDataFromApi();
// }, [])

//   //! PAGINATION
  const [currentPage,setCurrentPage] =useState(1)
  const [newsPerPage,setNewsPerPage] =useState(9)
   
//? GET CURRENT POST

const indexOfLastNews=currentPage*newsPerPage  
console.log(indexOfLastNews);
const indexOfFirstNews=indexOfLastNews-newsPerPage
console.log(indexOfFirstNews);
const currentNews=newData?.slice(indexOfFirstNews,indexOfLastNews) //12 veri geldi
console.log(currentNews);


const totalPages=newData?.length / newsPerPage ;
console.log(totalPages);  //100

const paginate=(number)=>setCurrentPage(number)

  // // //! FİLTER

  // const newList =currentNews.filter((news)=>{
  //   news.source.name.includes(searchText)
  // })

  // // const handleChange =(e)=>{
  // //   if(e.target.value==""){
  // //     setNewData(newData)
  // //     return
  // //   }
  // //   const allNews =newData.filter((item)=>item.source.name.toLowerCase().includes(e.target.value.toLowerCase()))
  // //   setNewData(allNews)

  // // }

  // //

  //! SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    getnewsDataFromApi();
    setSearchText("");
  };

  return (
    <>
      <div>
        <form className="search text-center  " onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input w-75 mt-3 me-2 p-1 "
            placeholder="Search news..."
            onChange={(e) => setSearchText(e.target.value)}
            // onChange={handleChange}
            value={searchText}
          />
          <button type="submit" className="btn btn-success  ">
            Search
          </button>
        </form>
      </div>

      <div className=" cardContainer container row  justify-content-evenly align-items-center mt-5 mx-auto">
        {!currentNews && (
          <div className="d-flex  justify-content-center mt-2">
            <img className="w-50 mw-75" src={img1} alt="" />
          </div>
        )}
        {currentNews?.length === 0 && (
          <h1 className="">The News can not be found</h1>
        )}

        {currentNews?.map((item) => {
          const {
            urlToImage,
            title,
            description,
            publishedAt,
            source: { name },
            url,
          } = item;
          return (
            <div className="card col-sm-12 col-md-6 col-lg-4 p-3   " key={url}>
              <img
                loading="lazy"
                src={urlToImage ? urlToImage : defaultImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">
                  {readMore ? description : description.slice(0, 100) + "..."}
                  <button
                    className="border border-0 fw-bolder text-capitalize bg-white text-dark"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? "show less" : "readmore"}{" "}
                  </button>
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{publishedAt.slice(0, 10)} </li>
                <li className="list-group-item">{name} </li>
              </ul>
              <div className="card-body">
                <button
                  onClick={() => {
                    currentUser
                      ? navigate("detail", { state: item, replace: false })
                      : toastWarnNotify("Please log in to see detail");
                  }}
                  type="submit"
                  className="btn btn-primary  "
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Pagination  paginate={paginate}  totalPages={totalPages} />
      </div>
    </>
  );
};

export default Home;
