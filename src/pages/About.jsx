import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-feature first">
                <img src="/Images/f-delivery.png" alt="" />
                <h4>Free shiping</h4>
                <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-feature secound">
                <img src="/Images/coin.png" alt="" />
                <h4>100% Money back</h4>
                <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-feature">
                <img src="/Images/chat.png" alt="" />
                <h4>Online support 24/7</h4>
                <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature-box Begin --> */}
        <div className="feature-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-feature-box first">
                      <img src="/Images/f-box-1.jpg" alt="" />
                      <div className="box-text">
                        <span className="trend-year">2019 Party</span>
                        <h2>Jewelry</h2>
                        <span className="trend-alert">Trend Allert</span>
                        <button className="box-btn">SEE MORE</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="about-feature-box secound">
                      <img src="/Images/f-box-2.jpg" alt="" />
                      <div className="box-text secound">
                        <span className="trend2-year">2019 Trend </span>
                        <h2>Footwear</h2>
                        <span className="trend2-alert">Bold & Black</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="large-feature-box">
                  <img src="/Images/f-box-3.jpg" alt="" />
                  <div className="large-box-text">
                    <span className="large-box-trend-year">2025 Party</span>
                    <h2>Collection</h2>
                    <span className="large-box-trend-alert">Trend Allert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lookbook-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="lookbook-text">
                <h2>
                  2025
                  <br />
                  #lookbook
                </h2>
                <p>
                  Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum
                  quam, ut commodo lorem. In at nisi nec arcu porttitor aliquet vitae at dui. Sed sollicitudin nulla non leo viverra scelerisque. Phasellus facilisis lobortis
                  metus, sit amet viverra lectus finibus ac. Aenean non felis dapibus, placerat libero auctor, ornare ante. Morbi quis ex eleifend, sodales nulla vitae, scelerisque
                  ante. Nunc id vulputate dui. Suspendisse consectetur rutrum metus nec scelerisque. s
                </p>
                <button>SEE MORE</button>
              </div>
            </div>
            <div className="col-6">
              <div className="lookbook-img">
                <img src="/Images/lookbok .jpg" alt="" />
                <div className="img-text">fashion</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
