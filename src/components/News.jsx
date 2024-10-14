import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

const api_url = 'https://newsapi.org/v2/everything?q=electricity&from=2024-09-14&sortBy=popularity&apiKey='
const api_key = import.meta.env.VITE_NEWS_API_KEY;

const News = () => {
    const [articleDescription, setArticleDescription] = useState("");

    useEffect(() => {
        const address = api_url + api_key;
    
    axios.get(address)
        .then(response => {
            const json = response.data
            if (json.articles && json.articles.length > 10) {
                setArticleDescription(json.articles[2].description);

                const url = json.articles[2].url;
                console.log(url)


            } else {
                setArticleDescription("No articles found");
            }
        }).catch(error => {
            alert(error)
        });
    }, []); 


  return (
    <div className="news">
      <h2>Daily news about electricity</h2>
      <p>This is the article: <span id="news">{articleDescription}</span></p>
      <p>Read more link</p>
      <p>Get new article</p>
    </div>
  );
};



export default News;
