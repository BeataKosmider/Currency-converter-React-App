import logo from "../assets/logo-app.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="euro and dollar coins" />
      </div>
      <div className="title">
        <h1>Przelicznik walut</h1>
      </div>
    </header>
  );
};

export default Header;
