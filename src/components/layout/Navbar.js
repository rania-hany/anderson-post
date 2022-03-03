import { Link } from 'react-router-dom';
import './Navbar.scss';

const categories = [
    { key: '1', name: 'Business' },
    { key: '2', name: 'Entertainment' },
    { key: '3', name: 'General' },
    { key: '4', name: 'Health' },
    { key: '5', name: 'Science' },
    { key: '6', name: 'Sports' },
    { key: '7', name: 'Technology' }

]


function Navbar(props) {
    function filterHandler (categoryName) {
        props.onFilter(categoryName)
    } 

    return <div className="navbar">
        {[categories.map((category, index) => {
            return <Link to="/"  key={index} >
                <div className="category"
                    onClick={filterHandler.bind(this, category.name)}>
                    {category.name}
                </div>
            </Link>
        })]}
    </div>
}

export default Navbar;