import './Header.scss'

// fontawesome imports
import { faBarsStaggered, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

function Header() {

    return <header className='my-header'>
        <input type="checkbox" id="hiddenCheckbox" className='hide'/>
        <label className="mobileMenu" htmlFor="hiddenCheckbox"><FontAwesomeIcon icon={faBarsStaggered} className="font-awesome"/></label>

        <nav className='side-menu'>
            <ul>
                <li><span>Newsletter</span></li>
                <li><span>Sign in</span></li>
                <li><button className='btn btn-primary'>Subscribe</button></li>
            </ul>
        </nav>
        <div className='search'><FontAwesomeIcon icon={faMagnifyingGlass} className="font-awesome"/></div>
        <div className='logo'>
            <Link to="/">
                <div className='underscore'></div>
                <h1 className='title'>Anderson Post</h1>
            </Link>
        </div>
    </header>
}

export default Header;