import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import Error from "../components/custom-components/error";
import Post from "../components/post/Post";
import TopPost from "../components/post/TopPost";

function AllPostsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [topPost, setTopPost] = useState({});
    let [page, setPage] = useState(1);
    let [isloadMoreMode, setLoadMoreMode] = useState(false);
    const [error, setError] = useState(null);
    const [totalResults, setTotalResults] = useState(0);

    // Subscribes on the selected category for filtering the result
    const selectedCategory = useSelector(state => state.selected);

    // if the selectedCategory (filtering) updates, reset the posts and page details
    useEffect(async()=>{
        setPage(1);
        setPosts([]);
        setLoadMoreMode(false);
    },[selectedCategory])

    useEffect(async () => {
        // url has 3 main variables: the category for filtering, page and pagesize for fetching more data
        let url = `https://newsapi.org/v2/top-headlines?country=us${selectedCategory ? '&category=' + selectedCategory : ''}&pageSize=${pageSize}&page=${page}&apiKey=fc28d53fca1444a29a77597bc70252cf`
        try {
            const response = await fetch(url);
            let data = await response.json();

            let articles = data.articles;
            if (page === 1) {
                setTopPost(articles.shift());
                setTotalResults(data.totalResults);
            }
            setIsLoading(false);
            // loading more mode concatenates the new response to the cached posts
            // otherwise we replace the old posts with the new response
            isloadMoreMode? setPosts([...posts,...articles]) : setPosts([...articles]);
        } catch (error) {
            setError(true);
            setIsLoading(false);
        }
    }, [page, selectedCategory, isloadMoreMode])


    // default page size
    const pageSize = 10;

    // the load more button handler
    function loadMore() {
        setLoadMoreMode(true);
        setPage(++page);
    }

    // the below code switches between 3 views
    // 1) loading spinner
    // 2) error
    // 3) posts view (divided two TopPost component and Post component)
    if (isLoading) {
        return <div className="center spinner">
            <FontAwesomeIcon icon={faAtom} className="fa-spin fa-5x" />
        </div>
    }
    else if (error) {
        return <Error>
            <h4>Sorry, Something went wrong!</h4>
            <p>Unfortunatelly the <u>newsapi.org</u> service used to collect the data in this application, only allows local developing for free</p>
        </Error>
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

            {(pageSize * page < totalResults) && <button className="btn btn-secondary" onClick={loadMore}>Load More</button>}
        </div>
    )
}

export default AllPostsPage;
