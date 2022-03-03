import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedCategoryAction } from '../../store/categories.action';
import './Navbar.scss';

function Navbar() {

    const dispatch = useDispatch();
    const categoriesList = useSelector(state => state.list);
    function filterHandler (categoryName) {
        setSelectedCategoryAction.payload = categoryName;
        dispatch(setSelectedCategoryAction);
    } 

    return <div className="navbar">
        {[categoriesList.map((category, index) => {
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