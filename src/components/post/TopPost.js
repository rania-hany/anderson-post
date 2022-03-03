import Moment from "react-moment";
import { Link } from "react-router-dom";

import './TopPost.scss'

function TopPost(props) {

    let linkToPostPage = (element) => {
        return <Link to={{ pathname: '/post', state: { post: props } }}>{element}</Link>
    }
    return (
        <div className='top-post'>
            <h4 className="breaking">Breaking News</h4>
            <div className='image'>
                {linkToPostPage(<img src={props.imgUrl} alt={props.title} />)}
            </div>
            <div className='details'>
                <h4 className='category'>Top Story</h4>
                {linkToPostPage(<h2 className='title'>{props.title}</h2>)}
                <div className='body'>{props.description}</div>
                <div className='date'>
                    <Moment fromNow={true}>{props.date}</Moment>
                </div>
            </div>
        </div>
    )
}

export default TopPost;