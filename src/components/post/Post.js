import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import './Post.scss'

function Post(props) {
    let author= (props.auth)?.split(',')[0];

    return (
        <div className={'post ' + (props.reverseRow ? 'reverse-row' : 'row')}>
            <div className='image'>
                <Link to={{pathname:"/post", state: {post: props}}}>
                    <img src={props.imgUrl} alt={props.title} />
                </Link>
            </div>
            <div className='details'>
                <h4>{props.category}</h4>
                <Link to={{pathname:"/post", state: {post: props}}}>
                    <div className='title'>{props.title}</div>
                </Link>
                <div className='date'>{author?.length>25? author.slice(0,25)+ '...': author} . <Moment format='LL'>{props.date}</Moment></div>
            </div>
        </div>
    )
}

export default Post;
