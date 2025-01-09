function Footer() {
  return (
    <footer className="footer">
      <div className="footercontent">
        <div className="contactdetails">
          <h3>Contact Us</h3>
          <p>Email: support@neurovent.com</p>
          <p>Phone: +1-234-567-890</p>
          <p>Address: 123 NeuroVent Ave, Health City, Wellness State</p>
        </div>
        <div className="socialmedia">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footerbottom">
        <p>&copy; 2025 NeuroVent. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
