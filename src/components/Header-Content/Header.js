import NavBar from './NavBar';
import HeaderContent from './HeaderContent';

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_container">
        <NavBar />
        <HeaderContent />
      </div>
    </div>
  );
};

export default Header;
