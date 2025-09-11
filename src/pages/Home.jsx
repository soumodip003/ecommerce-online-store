import { useEffect, useState } from "react";
import Header from "../components/Header";

import axios from "axios";

const Home = () => {
  const [tab, setTab] = useState("*");
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/products`);
    if (res.status === 200 && res.data?.products) {
      setData(res.data.products);
      let uniQueCat = [];
      res?.data.products.map((item) => {
        if (!uniQueCat.includes(item.category)) {
          uniQueCat.push(item.category);
        }
      });
      setCat(uniQueCat);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="hero-slider">
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img src="/Images/slider-1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>2025</h1>
                <h2>Lookbook.</h2>
                <button className="btn">SEE MORE</button>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img src="/Images/slider-2.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>2025</h1>
                <h2>Lookbook.</h2>
                <button className="btn">SEE MORE</button>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img src="/Images/slider-3.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>2025</h1>
                <h2>Lookbook.</h2>
                <button className="btn">SEE MORE</button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev angle-btn" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next angle-btn" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* <!-- Features-Section Begin --> */}
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

      <section className="latest-product-section">
        <div className="container">
          <div className="product-filter">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>Latest Products</h2>
                </div>
                <ul className="product-controls">
                  <li className={tab === "*" ? "mixitup-control-active" : ""} onClick={() => setTab("*")}>
                    All
                  </li>
                  {cat?.map((item, i) => {
                    return (
                      <li className={tab === item ? "mixitup-control-active" : ""} onClick={() => setTab(item)} key={i}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="row" id="product-list">
            {data &&
              data
                .filter((it) => it.category === tab || tab === "*")
                .map((item, i) => {
                  return (
                    <div className="col-lg-3 col-6" key={i}>
                      <div className="single-product-item">
                        <figure>
                          <a href="#">
                            <img src={item?.thumbnail} alt="" />
                          </a>
                          <div className="p-status">{item?.category}</div>
                        </figure>
                        <div className="product-text">
                          <h6>{item?.title}</h6>
                          <p>${item?.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
