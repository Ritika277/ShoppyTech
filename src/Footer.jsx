import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our story, mission, and values.</p>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/shipping">Shipping Information</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul className="social-media">
            <li><a href="https://facebook.com" className="fa fa-facebook"></a></li>
            <li><a href="https://twitter.com" className="fa fa-twitter"></a></li>
            <li><a href="https://instagram.com" className="fa fa-instagram"></a></li>
            <li><a href="https://linkedin.com" className="fa fa-linkedin"></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ShopyTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
