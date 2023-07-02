
import React,{useEffect,useState} from 'react'
import "./Nav.css"
function Nav() {
  // const [view, setView] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setView(true);
  //     } else setView(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  const [view, setView ] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setView(true);
      } else{
        setView(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${view && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__Avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
      />
    </div>
  );
}
 export default Nav;