import Header from "./Header";
import Navbar from "./Navbar";
import './Layout.scss'

function Layout(props) {

    function onFilterHandler (category){
        console.log(category);
    }
    return (
        <div>
            <Header />
            <div className="content">
                <Navbar onFilter={onFilterHandler}/>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;