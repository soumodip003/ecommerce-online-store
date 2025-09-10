import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="contact-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-title">
                <h2>Contact us</h2>
                <span>.</span>
              </div>
            </div>
            <div className="col-lg-8">
              <img src="/Images/add.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form action="" className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="col-lg-12">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                  </div>
                  <div className="col-lg-12 text-end ">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="contact-widget">
                <div className="cw-item">
                  <div className="d-flex gap-2 align-items-center">
                    <FaMapMarkerAlt />
                    <h5 className="m-0 fs-5">Location</h5>
                  </div>
                  <p> West Bengal, INDIA</p>
                </div>
                <div className="cw-item">
                  <div className="d-flex gap-2 align-items-center">
                    <FaPhone />
                    <h5 className="m-0 fs-5">Phone</h5>
                  </div>
                  <p>
                    9330103687
                    <br />
                    9851689514
                  </p>
                </div>
                <div className="cw-item">
                  <div className="d-flex gap-2 align-items-center">
                    <MdEmail />
                    <h5 className="m-0 fs-5">E-mail</h5>
                  </div>
                  <p>soumodipgh03@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335.73770169804334!2d88.42485594303609!3d22.58393553055617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751f189cbcef%3A0x9c60d3b0c5153587!2sRahul%20Stores!5e0!3m2!1sen!2sin!4v1757514893826!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
