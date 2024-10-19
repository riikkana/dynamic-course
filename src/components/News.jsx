import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const date = new Date();
date.setDate(date.getDate() - 20);

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); 
const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;
const api_url = 'https://newsapi.org/v2/everything?q=electricity&from=${formattedDate}&sortBy=popularity&apiKey='
const api_key = import.meta.env.VITE_NEWS_API_KEY;

const News = () => {
    const [articleDescription, setArticleDescription] = useState("");
    const [articleUrl, setArticleUrl] = useState("");


    const fetchArticle = () => {
        const address = api_url + api_key;

        axios.get(address)
            .then(response => {
                const json = response.data
                if (json.articles && json.articles.length > 0) {
                    const randomIndex = Math.floor(Math.random() * json.articles.length);
                    setArticleDescription(json.articles[randomIndex].description);
                    const url = json.articles[randomIndex].url;
                    setArticleUrl(url);
                    console.log(url)
                } else {
                    setArticleDescription("No articles found");
                }
            }).catch(error => {
                alert(error)
            });
    };

    useEffect(() => {
        fetchArticle();
    }, []);


    return (
        <div className="news">
            <h2>Daily news about electricity</h2>
            
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </nav>

            <p>
                <span>{articleDescription}
                    <a href={articleUrl} target="_blank"> Read more here.</a>
                </span>
            </p>
            <button onClick={fetchArticle}>Get new article</button>
        </div>
    );
};



export default News;
