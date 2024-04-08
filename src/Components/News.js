import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

function News({ category }) {
  const [news, setnews] = useState([]);
  const [loader, setloader] = useState(false);

  const datafetch = useCallback(async () => {
    try {
      setloader(true);
      await axios
        .get(
          category
            // ? `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_APIKEY}&category=${category}&country=in&language=en`
            ? `https://newsdata.io/api/1/news?apikey=pub_415085d39d1c2af7190d411530c3646f5b2c6&category=${category}&country=in&language=en`
            // : `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_APIKEY}&country=in&language=en`
            : `https://newsdata.io/api/1/news?apikey=pub_415085d39d1c2af7190d411530c3646f5b2c6&country=in&language=en`
        )
        .then((resp) => {
          setnews(resp.data.results);
          setloader(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  useEffect(() => {
    datafetch();
  }, [category, datafetch]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center items-center flex-wrap -m-4">
            {loader ? (
              <LoadingSpinner />
            ) : (
              <div>
                <h1 className="text-center text-3xl  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text p-2 font-bold">TOP Headings</h1>
                <div className="p-4 grid md:grid-cols-3 w-[80%]  mt-4 mx-auto ">
                
                {news.map((item, index) => (
                  <div
                    key={index}
                    className=" mx-4 relative border-2 mt-4 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inline-flex items-center justify-center  h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-md m-2 p-2 top-2 end-2 dark:border-gray-900">
                      {item.creator ? item.creator : item.category}
                    </div>
                    <img
                      className="lg:h-48 mt-4 md:h-36 w-full object-contain object-center"
                      src={
                        item.image_url
                          ? `${item.image_url}`
                          : `https://demofree.sirv.com/nope-not-here.jpg`
                      }
                      alt={item.title}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {category ? category : "General"}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Publish:- {item.pubDate}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          to={item.link}
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
