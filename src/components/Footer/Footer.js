import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerContact">
          <h5 className="heading">E-Commerce</h5>
          <p>Address</p>
          <p>+120 2776627777</p>
          <p>ecommercedemo@gmail.com</p>
        </div>
        <div className="footerInfo">
          <h6 className="heading">Information</h6>
          <p>
            Eligendi sunt, provident, debitis nemo, facilis cupiditate velit
            libero dolorum aperiam enim nulla iste maxime corrupti ad illo
            libero minus
          </p>
        </div>
        <div className="footerLinks">
          <h6 className="heading">Useful Link</h6>
        </div>
        <div className="footerNewsletter">
          <h6 className="heading">NewsLetter</h6>
          <form className="footerForm">
            <input type="text" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footerEnd">
        <p>© 2022 All Rights Reserved By Free Html Templates</p>
      </div>
    </>
  );
};

export default Footer;
