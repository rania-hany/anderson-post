import Moment from "react-moment";
import { Route } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import AllPostsPage from "./AllPostsPage";
import './PostPage.scss'

function PostsPage() {

    const location = useLocation();
    let history = useHistory()

    // disabling deeplinking to the page, by rerouting to the AllPostsPage
    if (!location.state) {
        history.push('/');
        return <Route path="/"> <AllPostsPage /> </Route>;
    }
    
    const { post } = location.state;
    return (
        <div>
            <h2 className='title'>{post.title}</h2>
            <div className='image'>
                <img src={post.imgUrl} alt={post.title} />
            </div>
            <a href={post.url} className="externalLink">Read more from the source</a>

            <div className='details'>
                <h4 className='category'>{post.category}</h4>
                <p className='body'>{post.description}</p>
                <div className='date'>
                    <Moment fromNow={true}>{post.date}</Moment>
                </div>
            </div>


        </div>)
}

export default PostsPage;