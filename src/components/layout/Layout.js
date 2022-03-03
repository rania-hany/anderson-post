import Header from "./Header";
import Navbar from "./Navbar";
import './Layout.scss'

function Layout(props) {

    return (
        <div>
            <Header />
            <div className="content">
                <Navbar/>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;