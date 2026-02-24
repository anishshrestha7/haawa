import React from 'react'
import fLogo from "../assets/image/logo.png"


function Footer() {
  return (
    <>
    <div>
  <footer>
    <div className="con py bb">
      <div className="flex ai sb mom">
        <img src={fLogo} alt />
        <div>
          <p>Need help? Call us 1-800-222-8888</p>
        </div>
      </div>
    </div>
    <section className="footer1">
      <div className="container-footer grid cc gtc11">
        <div>
          <h2>Contact Us</h2>
          <p className='was'><span className="dd1"><i className="bi bi-geo-alt" /></span> 4517 Washington Ave. Manchester, Kentucky 39495</p>
          <p className="aab"><span className="dd2"><i className="bi bi-clock" /></span>Hours: 8:00 - 17:00, Mon - Sat</p>
          <p><span className="dd2"><i className="bi bi-envelope" /></span>support@email.com</p>
          <h2>Follow us</h2>
          <div className="tom">
            <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook" /></a>
            <a href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube" /></a>
            <a href="https://x.com/" target="_blank"><i className="fa-brands fa-square-x-twitter" /></a>
            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram" /></a>
          </div>
        </div>
        <div className="grid gtc111">
          <div className="eer">
            <h2>Company</h2>
            <p>About Us</p>
            <p>Community Blog</p>
            <p>Jobs and Careers</p>
            <p>Contact Us</p>
            <p>Our Awards</p>
          </div>
          <div className='bee'>
            <h2>Services</h2>
            <p>Tour Guide</p>
            <p>Tour Booking</p>
            <p>Hotel Booking</p>
            <p>Ticket Booking</p>
            <p>Rental Services</p>
          </div>
          <div>
            <h2>Resources</h2>
            <p>Blog</p>
            <p>FAQs</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
  <footer className="last jc flex py">
    <p>Copyright ©2026 SpreeThemes. All rights reserved.</p>
  </footer>
</div>

    </>
  )
}

export default Footer