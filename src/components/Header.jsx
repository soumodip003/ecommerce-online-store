import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="container-fluid">
          <div className="inner-header">
            <div className="logo">
              <a href="">
                <img src="./Images/logo.png" alt="" />
              </a>
            </div>
            <div className="header-right">
              <img src="./Images/search.png" alt="" />
              <img src="./Images/man.png" alt="" />
              <a href="">
                <img src="./Images/bag.png" alt="" />
                <span>2</span>
              </a>
            </div>
            <div className="user-access">
              <a href="">Register |</a>
              <a href="" className="in">
                {" "}
                Sign in
              </a>
            </div>

            <nav className="main-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="header-info">
        <div className="inner-header">
          <div className="row">
            <div className="col-md-4 text-left">
              <div className="header-item">
                <img src="/Images/delivery.png" alt="" />
                <p>Free shipping on orders over $30 in USA</p>
              </div>
            </div>
            <div className="col-md-4 text-left text-lg-center">
              <div className="header-item">
                <img src="/Images/voucher.png" alt="" />
                <p>20% Student Discount</p>
              </div>
            </div>
            <div className="col-md-4 text-left text-lg-right">
              <div className="header-item">
                <img src="/Images/sales.png" alt="" />
                <p>30% off on dresses. Use code: 30OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
