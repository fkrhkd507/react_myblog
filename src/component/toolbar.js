import { Link } from 'react-router-dom';
import '../css/toolbar.css';


function Toolbar(){

    const toolbar_style = {
        'display' : 'none'
    }
    const toolbar_exit = () => {
        let toolbar_header = document.querySelector('.toolbar_wrap');
        toolbar_header.style.display = "none";
    }

    return(
        <div className="toolbar_wrap" style={toolbar_style}>
            <div className="toolbar_header" onClick={toolbar_exit}>Menu</div>
            <div className="toolbar">
                <ul className="toolbar_list">
                    <li><Link to="/Html">Html</Link></li>
                    <li><Link to="/Css">Css</Link></li>
                    <li><Link to="/Javascript">Javascript</Link></li>
                    <li><Link to="/ReactJs">ReactJs</Link></li>
                    <li><Link to="/NodeJs">Nodejs</Link></li>
                    <li><Link to="/MySQL">MySQL</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Toolbar;