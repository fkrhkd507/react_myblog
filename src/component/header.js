import Toolbar from './toolbar';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = (data) => {
    let { title } = data;
    title = title ? ` / ${title}` : '';

    function toolbar_click(){
      let toolbar = document.querySelector('.toolbar_wrap');
      toolbar.style.display = "block";
    }

    return (
      <div className="header">
          <div className="menu_header">
            <div>
              <Link to="/"><span className="header_title">Test App</span></Link>
              <span className="page_type">{title}</span>
            </div>
            <span className="header_menubar" onClick={toolbar_click}>a</span>
          </div>

          <Toolbar />
      </div>
    );
  }
  
  export default Header;
  