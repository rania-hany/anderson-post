import Post from "../components/post/Post";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

import TopPost from "../components/post/TopPost";

import '../Styles/Globals.scss'

function AllPostsPage() {
    const [isLoading, setIsLoading] = useState(true);
    let [posts, setPosts ] = useState([]);
    let [topPost, setTopPost ] = useState({});
    let [page, setPage ] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const pageSize = 10;

    useEffect(()=>{
        let isMounted = true;
        fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=80119d99592243939a66ee267bacd07d`)
        .then((response)=>{
            return response.json();

        }).then((data)=> {
            if(isMounted) {
                let articles = data.articles.slice();
                if(page === 1){
                    setTopPost(articles.shift());
                    setTotalResults(data.totalResults);
                }
                setIsLoading(false);
                setPosts([...posts,...articles]);
            }
        })
    
        return () => { isMounted = false }
    }, [page])
    
    function loadMore () {
        setPage(++page);
    }

    if(isLoading){
        return <div className="center spinner">
            <FontAwesomeIcon icon={faAtom} className="fa-spin fa-5x"/>
        </div>
    }

    else return (
        <div className="center">
            <TopPost
                imgUrl={topPost.urlToImage}
                description={topPost.description}
                title={topPost.title}
                date={topPost.publishedAt}                
                category={topPost.source?.name}
                url={topPost.url}
            ></TopPost>
            {[posts.map((post, index) => {
                return <Post
                    reverseRow={index % 2 === 0}
                    imgUrl={post.urlToImage}
                    category={post.source?.name}
                    description={topPost.description}
                    title={post.title}
                    url={post.url}
                    auth={post.author}
                    key={index}
                    date={topPost.publishedAt}
                />
            })]}

            {(pageSize * page < totalResults) && <button className="btn btn-secondary" onClick={loadMore}>Load More</button> }
        </div>
    )
}

export default AllPostsPage;
