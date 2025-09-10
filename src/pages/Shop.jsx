import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const Shop = () => {
  const [tab, setTab] = useState("*");
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
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

export default Shop;
