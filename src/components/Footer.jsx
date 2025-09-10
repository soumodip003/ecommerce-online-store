import { FaFacebook, FaInstagram, FaPinterest, FaTumblr, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-section ">
        <div className="container">
          <div className="newslatter-form">
            <div className="row">
              <div className="col-lg-12">
                <form action="">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit">Subscribe to our newsletter</button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-widget">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>About Us</h4>
                  <ul>
                    <li>About us</li>
                    <li>Community</li>
                    <li>Jobs</li>
                    <li>Shipping</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Customer care</h4>
                  <ul>
                    <li>Search</li>
                    <li>Privacy Policy</li>
                    <li>2025 Lokbook</li>
                    <li>Shipping & Delivery</li>
                    <li>Gallery</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Our Services</h4>
                  <ul>
                    <li>Free Shipping</li>
                    <li>Free Returns</li>
                    <li>Our Franchising</li>
                    <li>Terms and conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Information</h4>
                  <ul>
                    <li>Payment methods</li>
                    <li>Times and shipping costs</li>
                    <li>Product Returns</li>
                    <li>Shipping methods</li>
                    <li>Conformity of the products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="social-links-warp">
          <div className="container">
            <div className="social-links">
              <a className="instagram icon">
                <FaInstagram />
                <span>INSTAGRAM</span>
              </a>
              <a className="pinterest icon">
                <FaPinterest />
                <span>PINTEREST</span>
              </a>
              <a className="facebook icon">
                <FaFacebook />
                <span>FACEBOOK</span>
              </a>
              <a className="twitter icon">
                <FaTwitter />
                <span>TWITTER</span>
              </a>
              <a className="youtube icon">
                <FaYoutube />
                <span>YOUTUBE</span>
              </a>
              <a className="tumblr icon">
                <FaTumblr />
                <span>TUMBLR</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
