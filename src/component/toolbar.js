import React from "react";
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
                    <li><a href="#">Html</a></li>
                    <li><a href="#">Css</a></li>
                    <li><a href="#">Javascript</a></li>
                    <li><a href="#">ReactJs</a></li>
                    <li><a href="#">Nodejs</a></li>
                    <li><a href="#">MySQL</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Toolbar;