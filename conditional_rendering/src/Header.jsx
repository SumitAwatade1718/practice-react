import "./header.css";
function Header() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY >= 90) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
  return (
    <>
      <div className="header-wrapper">
        <div className="top-bar">
          <div className="top-container">
            <div className="logo">
              <h2>Bulk Email Service</h2>
            </div>

            <div className="top-right">
              <div className="location">
                <i className="fa fa-map-marker"></i>
                <p>Pandharpur, Maharashtra</p>
              </div>

              <div className="email">
                <i className="fa fa-envelope"></i>
                <p>bulkemailservice1@gmail.com</p>
              </div>

              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="nav-container">
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>

            <button className="login-btn">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>Login
            </button>
          </div>
        </div>
      </div>
      <div className="space">
        <img
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
          alt=""
        />
      </div>
    </>
  );
}

export default Header;
