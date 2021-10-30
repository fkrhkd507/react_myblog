import '../css/header.css';

const Header = () => {
    function toolbar_click(){
      let toolbar = document.querySelector('.toolbar_wrap');
      toolbar.style.display = "block";
    }

    return (
      <div className="header">
          <div className="menu_header">
            <span className="header_title">Test App</span>
            <span className="header_menubar" onClick={toolbar_click}>a</span>
          </div>

      </div>
    );
  }
  
  export default Header;
  