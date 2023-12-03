import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://cdn.pixabay.com/photo/2021/01/16/05/09/zodiac-5921179_1280.png"
        alt="img"
        width={"100px"}
      />
      <ul>
        <li>HOROSCOPE</li>
        <li>DAILY</li>
        <li>TAROT</li>
        <li>ARTICLE</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
